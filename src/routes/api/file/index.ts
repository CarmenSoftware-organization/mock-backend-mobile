import type { Elysia } from "elysia";
import { t } from "elysia";
import jwt from "@elysiajs/jwt";
import { Client } from "minio";
import { v4 as uuidv4 } from "uuid";
import { CheckHeaderHasAppId, CheckHeaderHasAccessToken } from "@/libs/header";
import { resSuccessWithData, resBadRequest, resNotFound, resInternalServerError } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";
import type { IPaginate } from "@/libs/response.paginate";

const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT?.replace(/^https?:\/\//, "").split(":")[0] || "localhost",
  port: parseInt(process.env.MINIO_ENDPOINT?.split(":").pop() || "9000"),
  useSSL: process.env.MINIO_ENDPOINT?.startsWith("https") || false,
  accessKey: process.env.MINIO_ACCESS_KEY || "",
  secretKey: process.env.MINIO_SECRET_KEY || "",
});

const bucketName = process.env.MINIO_BUCKET_NAME || "carmen";

// Helper function to encode filename for Content-Disposition header (RFC 5987)
const encodeContentDisposition = (filename: string): string => {
  // Check if filename contains non-ASCII characters
  const hasNonAscii = /[^\x20-\x7E]/.test(filename);

  if (!hasNonAscii) {
    // For ASCII-only filenames, use simple format
    return `attachment; filename="${filename}"`;
  }

  // For non-ASCII filenames, use RFC 5987 encoding
  const asciiName = filename.replace(/[^\x20-\x7E]/g, "_");
  const encodedName = encodeURIComponent(filename).replace(/['()]/g, escape);
  return `attachment; filename="${asciiName}"; filename*=UTF-8''${encodedName}`;
};

// In-memory file token mapping (in production, use a database)
const fileTokenMap = new Map<string, { objectName: string; originalName: string; contentType: string }>();

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .post(
      "/api/files/upload",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAuth, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAuth) {
          ctx.set.status = 401;
          return errorAuth;
        }

        try {
          const file = ctx.body.file;

          if (!file) {
            ctx.set.status = 400;
            return resBadRequest("No file provided");
          }

          // Generate unique file token and object name
          const fileToken = `${businessUnits?.[0]?.code}/${uuidv4()}`;
          const fileExtension = file.name.split(".").pop() || "";
          const objectName = `${fileToken}${fileExtension ? `.${fileExtension}` : ""}`;

          // Convert File to Buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          // Ensure bucket exists
          const bucketExists = await minioClient.bucketExists(bucketName);
          if (!bucketExists) {
            await minioClient.makeBucket(bucketName);
          }

          // Upload to MinIO
          await minioClient.putObject(bucketName, objectName, buffer, buffer.length, {
            "Content-Type": file.type || "application/octet-stream",
            "X-Original-Name": encodeURIComponent(file.name),
          });

          // Store file mapping
          fileTokenMap.set(fileToken, {
            objectName,
            originalName: file.name,
            contentType: file.type || "application/octet-stream",
          });

          return resSuccessWithData({
            bu_code: businessUnits?.[0]?.code,
            fileToken,
            originalName: file.name,
            size: file.size,
            contentType: file.type,
          }, "File uploaded successfully");
        } catch (error) {
          console.error("Upload error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to upload file");
        }
      },
      {
        body: t.Object({
          file: t.File(),
        }),
        detail: {
          tags: ["file"],
          summary: "Upload a file",
          description: "Upload a file to MinIO storage and receive a file token for downloading",
          parameters: [PARAM_X_APP_ID],
          security: [{ Bearer: [] }],
        },
      }
    )

    .get(
      "/api/files/list",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAuth } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAuth) {
          ctx.set.status = 401;
          return errorAuth;
        }

        try {
          // Parse IPaginate parameters
          const paginate: IPaginate = {
            page: Math.max(1, parseInt(ctx.query.page || "1")),
            perpage: Math.min(100, Math.max(1, parseInt(ctx.query.perpage || "10"))),
            search: ctx.query.search || "",
            searchfields: ctx.query.searchfields ? ctx.query.searchfields.split(",") : ["originalName"],
            sort: ctx.query.sort ? ctx.query.sort.split(",") : ["-lastModified"],
            filter: ctx.query.filter ? JSON.parse(ctx.query.filter) : {},
            advance: ctx.query.advance ? JSON.parse(ctx.query.advance) : null,
            bu_code: ctx.query.bu_code ? ctx.query.bu_code.split(",") : [],
          };

          const files: Array<{
            fileToken: string;
            objectName: string;
            originalName: string;
            size: number;
            contentType: string;
            lastModified: Date;
          }> = [];

          // Check if bucket exists
          const bucketExists = await minioClient.bucketExists(bucketName);
          if (!bucketExists) {
            return {
              data: [],
              paginate: {
                total: 0,
                page: paginate.page,
                perpage: paginate.perpage,
                pages: 0,
              },
            };
          }

          // List all objects in the bucket (optionally filter by bu_code prefix)
          const prefix = paginate.bu_code.length === 1 ? `${paginate.bu_code[0]}/` : "";
          const stream = minioClient.listObjects(bucketName, prefix, true);
          const objectNames: Array<{ name: string; size: number; lastModified: Date }> = [];

          await new Promise<void>((resolve, reject) => {
            stream.on("data", (obj) => {
              if (obj.name) {
                // Filter by bu_code if multiple codes specified
                if (paginate.bu_code.length > 1) {
                  const objBuCode = obj.name.split("/")[0];
                  if (!paginate.bu_code.includes(objBuCode)) return;
                }
                objectNames.push({
                  name: obj.name,
                  size: obj.size || 0,
                  lastModified: obj.lastModified || new Date(),
                });
              }
            });
            stream.on("error", reject);
            stream.on("end", resolve);
          });

          // Fetch metadata for each object
          for (const obj of objectNames) {
            try {
              const stat = await minioClient.statObject(bucketName, obj.name);

              // Extract file token from object name (remove extension)
              const nameParts = obj.name.split(".");
              if (nameParts.length > 1) nameParts.pop();
              const fileToken = nameParts.join(".");

              // Get original name from metadata
              const originalName = stat.metaData?.["x-original-name"]
                ? decodeURIComponent(stat.metaData["x-original-name"])
                : obj.name;

              const contentType = stat.metaData?.["content-type"] || "application/octet-stream";

              files.push({
                fileToken,
                objectName: obj.name,
                originalName,
                size: obj.size,
                contentType,
                lastModified: obj.lastModified,
              });
            } catch {
              // If stat fails, use basic info
              const nameParts = obj.name.split(".");
              nameParts.pop();
              const fileToken = nameParts.join(".");

              files.push({
                fileToken,
                objectName: obj.name,
                originalName: obj.name,
                size: obj.size,
                contentType: "application/octet-stream",
                lastModified: obj.lastModified,
              });
            }
          }

          // Apply search filter
          let filteredFiles = files;
          if (paginate.search) {
            const searchLower = paginate.search.toLowerCase();
            filteredFiles = files.filter((file) =>
              paginate.searchfields.some((field) => {
                const value = file[field as keyof typeof file];
                return value && String(value).toLowerCase().includes(searchLower);
              })
            );
          }

          // Apply content type filter
          if (paginate.filter.contentType) {
            filteredFiles = filteredFiles.filter((file) =>
              file.contentType.includes(paginate.filter.contentType)
            );
          }

          // Apply sorting
          filteredFiles.sort((a, b) => {
            for (const sortField of paginate.sort) {
              const desc = sortField.startsWith("-");
              const field = desc ? sortField.slice(1) : sortField;
              const aVal = a[field as keyof typeof a];
              const bVal = b[field as keyof typeof b];

              if (aVal instanceof Date && bVal instanceof Date) {
                const diff = desc ? bVal.getTime() - aVal.getTime() : aVal.getTime() - bVal.getTime();
                if (diff !== 0) return diff;
              } else if (typeof aVal === "number" && typeof bVal === "number") {
                const diff = desc ? bVal - aVal : aVal - bVal;
                if (diff !== 0) return diff;
              } else if (typeof aVal === "string" && typeof bVal === "string") {
                const diff = desc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
                if (diff !== 0) return diff;
              }
            }
            return 0;
          });

          // Apply pagination
          const total = filteredFiles.length;
          const pages = Math.ceil(total / paginate.perpage);
          const startIndex = (paginate.page - 1) * paginate.perpage;
          const paginatedFiles = filteredFiles.slice(startIndex, startIndex + paginate.perpage);

          return {
            data: paginatedFiles,
            paginate: {
              total,
              page: paginate.page,
              perpage: paginate.perpage,
              pages,
            },
          };
        } catch (error) {
          console.error("List files error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to list files");
        }
      },
      {
        query: t.Object({
          page: t.Optional(t.String()),
          perpage: t.Optional(t.String()),
          search: t.Optional(t.String()),
          searchfields: t.Optional(t.String()),
          sort: t.Optional(t.String()),
          filter: t.Optional(t.String()),
          advance: t.Optional(t.String()),
          bu_code: t.Optional(t.String()),
        }),
        detail: {
          tags: ["file"],
          summary: "List all files",
          description: "List all files stored in MinIO bucket with pagination, search, sort, and filter support",
          parameters: [PARAM_X_APP_ID],
          security: [{ Bearer: [] }],
        },
      }
    )

    .get(
      "/api/files/info/:filetoken",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        try {
          const { filetoken } = ctx.params;

          // Look up file info from token map
          const fileInfo = fileTokenMap.get(filetoken);

          let objectName: string;
          let originalName: string;
          let contentType: string;
          let fileSize: number;
          let lastModified: Date;

          if (!fileInfo) {
            // Try to get file directly from MinIO using token as object name prefix
            const objects: string[] = [];
            const listStream = minioClient.listObjects(bucketName, filetoken, false);

            await new Promise<void>((resolve, reject) => {
              listStream.on("data", (obj) => {
                if (obj.name) objects.push(obj.name);
              });
              listStream.on("error", reject);
              listStream.on("end", resolve);
            });

            if (objects.length === 0) {
              ctx.set.status = 404;
              return resNotFound("File not found");
            }

            objectName = objects[0];
            const stat = await minioClient.statObject(bucketName, objectName);

            originalName = stat.metaData?.["x-original-name"]
              ? decodeURIComponent(stat.metaData["x-original-name"])
              : objectName;
            contentType = stat.metaData?.["content-type"] || "application/octet-stream";
            fileSize = stat.size;
            lastModified = stat.lastModified;
          } else {
            objectName = fileInfo.objectName;
            originalName = fileInfo.originalName;
            contentType = fileInfo.contentType;
            const stat = await minioClient.statObject(bucketName, objectName);
            fileSize = stat.size;
            lastModified = stat.lastModified;
          }

          return resSuccessWithData({
            fileToken: filetoken,
            objectName,
            originalName,
            size: fileSize,
            contentType,
            lastModified,
          });
        } catch (error) {
          console.error("Get file info error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to get file info");
        }
      },
      {
        params: t.Object({
          filetoken: t.String(),
        }),
        detail: {
          tags: ["file"],
          summary: "Get file info",
          description: "Get file metadata without downloading the file",
          parameters: [PARAM_X_APP_ID],
        },
      }
    )

    .get(
      "/api/files/:filetoken",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        try {
          const { filetoken } = ctx.params;

          // Look up file info from token map
          const fileInfo = fileTokenMap.get(filetoken);

          let objectName: string;
          let originalName: string;
          let contentType: string;
          let fileSize: number;

          if (!fileInfo) {
            // Try to get file directly from MinIO using token as object name prefix
            const objects: string[] = [];
            const listStream = minioClient.listObjects(bucketName, filetoken, false);

            await new Promise<void>((resolve, reject) => {
              listStream.on("data", (obj) => {
                if (obj.name) objects.push(obj.name);
              });
              listStream.on("error", reject);
              listStream.on("end", resolve);
            });

            if (objects.length === 0) {
              ctx.set.status = 404;
              return resNotFound("File not found");
            }

            objectName = objects[0];
            const stat = await minioClient.statObject(bucketName, objectName);

            originalName = stat.metaData?.["x-original-name"]
              ? decodeURIComponent(stat.metaData["x-original-name"])
              : objectName;
            contentType = stat.metaData?.["content-type"] || "application/octet-stream";
            fileSize = stat.size;
          } else {
            objectName = fileInfo.objectName;
            originalName = fileInfo.originalName;
            contentType = fileInfo.contentType;
            const stat = await minioClient.statObject(bucketName, objectName);
            fileSize = stat.size;
          }

          // Get file stream from MinIO
          const dataStream = await minioClient.getObject(bucketName, objectName);

          // Return the stream directly with headers
          const contentDisposition = encodeContentDisposition(originalName);
          return new Response(dataStream as unknown as ReadableStream, {
            headers: {
              "Content-Type": contentType,
              "Content-Disposition": contentDisposition,
              "Content-Length": String(fileSize),
            },
          });
        } catch (error) {
          console.error("Stream error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to stream file");
        }
      },
      {
        params: t.Object({
          filetoken: t.String(),
        }),
        detail: {
          tags: ["file"],
          summary: "Download a file",
          description: "Download/stream a file from MinIO storage using its file token",
          parameters: [PARAM_X_APP_ID],
        },
      }
    )

    .delete(
      "/api/files/:filetoken",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAuth } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAuth) {
          ctx.set.status = 401;
          return errorAuth;
        }

        try {
          const { filetoken } = ctx.params;

          // Look up file info from token map
          const fileInfo = fileTokenMap.get(filetoken);

          if (fileInfo) {
            // Delete from MinIO
            await minioClient.removeObject(bucketName, fileInfo.objectName);
            // Remove from token map
            fileTokenMap.delete(filetoken);

            return resSuccessWithData({
              fileToken: filetoken,
            }, "File deleted successfully");
          }

          // Try to find file directly in MinIO using token as prefix
          const objects: string[] = [];
          const stream = minioClient.listObjects(bucketName, filetoken, false);

          await new Promise<void>((resolve, reject) => {
            stream.on("data", (obj) => {
              if (obj.name) objects.push(obj.name);
            });
            stream.on("error", reject);
            stream.on("end", resolve);
          });

          if (objects.length === 0) {
            ctx.set.status = 404;
            return resNotFound("File not found");
          }

          // Delete the file from MinIO
          await minioClient.removeObject(bucketName, objects[0]);

          return resSuccessWithData({
            fileToken: filetoken,
          }, "File deleted successfully");
        } catch (error) {
          console.error("Delete error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to delete file");
        }
      },
      {
        params: t.Object({
          filetoken: t.String(),
        }),
        detail: {
          tags: ["file"],
          summary: "Delete a file",
          description: "Delete a file from MinIO storage using its file token",
          parameters: [PARAM_X_APP_ID],
          security: [{ Bearer: [] }],
        },
      }
    );
