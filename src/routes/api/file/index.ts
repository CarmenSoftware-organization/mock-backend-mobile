import type { Elysia } from "elysia";
import { t } from "elysia";
import jwt from "@elysiajs/jwt";
import { Client } from "minio";
import { v4 as uuidv4 } from "uuid";
import { CheckHeaderHasAppId, CheckHeaderHasAccessToken } from "@/libs/header";
import { resSuccess, resBadRequest, resNotFound, resInternalServerError } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT?.replace(/^https?:\/\//, "").split(":")[0] || "localhost",
  port: parseInt(process.env.MINIO_ENDPOINT?.split(":").pop() || "9000"),
  useSSL: process.env.MINIO_ENDPOINT?.startsWith("https") || false,
  accessKey: process.env.MINIO_ACCESS_KEY || "",
  secretKey: process.env.MINIO_SECRET_KEY || "",
});

const bucketName = process.env.MINIO_BUCKET_NAME || "carmen";

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
      "/api/file/upload",
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

          return resSuccess({
            bu_code: businessUnits?.[0]?.code,
            fileToken,
            originalName: file.name,
            size: file.size,
            contentType: file.type,
            message: "File uploaded successfully",
          });
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
      "/api/file/list",
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
          // Parse pagination parameters
          const page = Math.max(1, parseInt(ctx.query.page || "1"));
          const limit = Math.min(100, Math.max(1, parseInt(ctx.query.limit || "10")));

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
            return resSuccess({
              files: [],
              total: 0,
              page,
              limit,
              totalPages: 0,
            });
          }

          // List all objects in the bucket
          const stream = minioClient.listObjects(bucketName, "", true);
          const objectNames: Array<{ name: string; size: number; lastModified: Date }> = [];

          await new Promise<void>((resolve, reject) => {
            stream.on("data", (obj) => {
              if (obj.name) {
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

          // Sort by lastModified descending (newest first)
          files.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

          // Apply pagination
          const total = files.length;
          const totalPages = Math.ceil(total / limit);
          const startIndex = (page - 1) * limit;
          const paginatedFiles = files.slice(startIndex, startIndex + limit);

          return resSuccess({
            files: paginatedFiles,
            total,
            page,
            limit,
            totalPages,
          });
        } catch (error) {
          console.error("List files error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to list files");
        }
      },
      {
        query: t.Object({
          page: t.Optional(t.String()),
          limit: t.Optional(t.String()),
        }),
        detail: {
          tags: ["file"],
          summary: "List all files",
          description: "List all files stored in MinIO bucket with pagination",
          parameters: [PARAM_X_APP_ID],
          security: [{ Bearer: [] }],
        },
      }
    )

    .get(
      "/api/file/:filetoken",
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

          if (!fileInfo) {
            // Try to get file directly from MinIO using token as object name prefix
            try {
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

              const objectName = objects[0];
              const stat = await minioClient.statObject(bucketName, objectName);
              const dataStream = await minioClient.getObject(bucketName, objectName);

              const chunks: Buffer[] = [];
              for await (const chunk of dataStream) {
                chunks.push(chunk);
              }
              const buffer = Buffer.concat(chunks);

              const originalName = stat.metaData?.["x-original-name"]
                ? decodeURIComponent(stat.metaData["x-original-name"])
                : objectName;

              ctx.set.headers["Content-Type"] = stat.metaData?.["content-type"] || "application/octet-stream";
              ctx.set.headers["Content-Disposition"] = `attachment; filename="${originalName}"`;
              ctx.set.headers["Content-Length"] = String(buffer.length);

              return buffer;
            } catch {
              ctx.set.status = 404;
              return resNotFound("File not found");
            }
          }

          // Get file from MinIO
          const dataStream = await minioClient.getObject(bucketName, fileInfo.objectName);

          const chunks: Buffer[] = [];
          for await (const chunk of dataStream) {
            chunks.push(chunk);
          }
          const buffer = Buffer.concat(chunks);

          ctx.set.headers["Content-Type"] = fileInfo.contentType;
          ctx.set.headers["Content-Disposition"] = `attachment; filename="${fileInfo.originalName}"`;
          ctx.set.headers["Content-Length"] = String(buffer.length);

          return buffer;
        } catch (error) {
          console.error("Download error:", error);
          ctx.set.status = 500;
          return resInternalServerError(error instanceof Error ? error.message : "Failed to download file");
        }
      },
      {
        params: t.Object({
          filetoken: t.String(),
        }),
        detail: {
          tags: ["file"],
          summary: "Download a file",
          description: "Download a file from MinIO storage using its file token",
          parameters: [PARAM_X_APP_ID],
        },
      }
    )

    .delete(
      "/api/file/:filetoken",
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

            return resSuccess({
              fileToken: filetoken,
              message: "File deleted successfully",
            });
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

          return resSuccess({
            fileToken: filetoken,
            message: "File deleted successfully",
          });
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
