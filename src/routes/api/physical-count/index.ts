import type { Elysia } from "elysia";
import { resBadRequest, resInternalServerError, resNotFound } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbPhysicalCountPeriod, tbPhysicalCount, tbPhysicalCountDetail } from "@/mockdata";
import { generateId, getRandomInt } from "@/libs/utils";
import {
  createPhysicalCountDetail,
  getNextSequenceNumber,
  getPhysicalCountDetailByPhysicalCountId,
  PhysicalCountDetailUpdateDTO,
  updatePhysicalCountDetail,
} from "@/mockdata/tb_physical_count_detail";
import { uuid } from "zod";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/api/physical-count/pending",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          // mock random data
          const res = { pending: getRandomInt(0, 20) };
          return {
            data: res,
          };
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Get my pending physical counts",
          description: "Get my pending physical counts",
        },
      }
    )

    .get("/api/:bu_code/physical-count", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const include_not_count = ctx.query.include_not_count === "true";

      const physicalCountPeriods = tbPhysicalCountPeriod.getPhysicalCountPeriodsOnCounting();
      if (!physicalCountPeriods) {
        return resNotFound("Physical counts not found");
      }

      // get all details
      const physicalCounts = tbPhysicalCount.getPhysicalCountsByPhysicalCountId(
        physicalCountPeriods.id,
        include_not_count
      );
      if (!physicalCounts || physicalCounts.length === 0) {
        // return resNotFound("Physical count details not found");
      }

      return {
        data: physicalCountPeriods,
        details: physicalCounts,
      };
    })

    .get(
      "/api/:bu_code/physical-count/:physical_count_id",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const physical_count_id = ctx.params.physical_count_id as string;
        if (!physical_count_id) {
          return resBadRequest("Invalid physical count id");
        }

        try {
          const physical_count = tbPhysicalCountDetail.getPhysicalCountById(physical_count_id);
          if (!physical_count) {
            return resNotFound("Physical count not found");
          }

          return { data: physical_count };
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Get physical count by id",
          description: "Get physical count by id",
        },
      }
    )

    .patch(
      "/api/:bu_code/physical-count/:physical_count_id/save",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          businessUnits,
          currentUser,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const items = ctx.body as PhysicalCountDetailUpdateDTO;

        try {
          // update each item
          items.items.forEach((item) => {
            const existingDetails = getPhysicalCountDetailByPhysicalCountId(ctx.params.physical_count_id);

            if (item.id) {
              const existingDetail = existingDetails.find((detail) => detail.id === item.id);
              if (existingDetail) {
                // update existing detail
                updatePhysicalCountDetail(
                  existingDetail.id,
                  {
                    actual_qty: item.actual_qty,
                  },
                  currentUser?.id || ""
                );
              }
            } else {
              const nextSequence = getNextSequenceNumber(ctx.params.physical_count_id);
              createPhysicalCountDetail({
                physical_count_id: ctx.params.physical_count_id,
                sequence_no: nextSequence,
                product_id: item.product_id || "",
                product_name: "", // In real scenario, fetch product name by product_id
                product_local_name: "",
                sku: "", // In real scenario, fetch SKU by product_id
                actual_qty: item.actual_qty,
                created_by_id: currentUser?.id || "",
                updated_by_id: currentUser?.id || "",
                inventory_unit_id: "",
                inventory_unit_name: "",
              });
            }
          });

          // console.log("Updated physical count items:", items);

          return { id: ctx.params.physical_count_id };
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Save physical count",
          description: "Save a specific physical count",
        },
      }
    )

    .patch(
      "/api/:bu_code/physical-count/:physical_count_id/review",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          businessUnits,
          currentUser,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const items = ctx.body as PhysicalCountDetailUpdateDTO;

        // console.log("Reviewing physical count items:", items);

        let res: any[] = [];

        try {
          // update each item
          items.items.forEach((item) => {
            // console.log("Existing details:", item, ctx.params.physical_count_id);

            if (item.id) {
              // find existing detail by product_id and physical_count_id
              const existingDetails = getPhysicalCountDetailByPhysicalCountId(ctx.params.physical_count_id);

              // console.log("Existing details fetched:", existingDetails, item.id);

              const existingDetail = existingDetails.find((detail) => detail.id === item.id);

              console.log("Existing detail found:", existingDetail);

              if (existingDetail) {
                // update existing detail
                const update_item = updatePhysicalCountDetail(
                  item.id,
                  {
                    actual_qty: item.actual_qty,
                    submitted_qty: Number(existingDetail.on_hand_qty ?? 0) - item.actual_qty, // mark as submitted
                  },
                  currentUser?.id || ""
                );

                // console.log("Updated item:", update_item);

                const { physical_count_id, created_at, created_by_id, updated_at, updated_by_id, ...data } =
                  update_item as any;

                res.push(data);
              }
            } else {
              // create new detail
              const nextSequence = getNextSequenceNumber(ctx.params.physical_count_id);

              const new_item = createPhysicalCountDetail({
                physical_count_id: ctx.params.physical_count_id,
                sequence_no: nextSequence,
                product_id: item.product_id || "",
                product_name: "", // In real scenario, fetch product name by product_id
                product_local_name: "",
                sku: "", // In real scenario, fetch SKU by product_id

                inventory_unit_id: "",
                inventory_unit_name: "",

                actual_qty: item.actual_qty,
                submitted_qty: getRandomInt(100, 1000) - item.actual_qty,
                created_by_id: currentUser?.id || "",
                updated_by_id: currentUser?.id || "",
              });

              const { physical_count_id, created_at, created_by_id, updated_at, updated_by_id, ...data } =
                new_item as any;
              res.push(data);
            }
          });

          // console.log("Updated physical count items:", res as any);

          return { data: res };
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Review physical count",
          description: "Review a specific physical count",
        },
      }
    )

    .post("/api/:bu_code/physical-count/:physical_count_detail_id/comment", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const {
        error: errorAccessToken,
        businessUnits,
        currentUser,
      } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const { physical_count_detail_id } = ctx.params;
      if (!physical_count_detail_id) {
        return resBadRequest("Invalid physical count detail id");
      }

      // find physical count detail
      const physicalCountDetail = tbPhysicalCountDetail.getPhysicalCountDetailById(physical_count_detail_id);
      if (!physicalCountDetail) {
        return resNotFound("Physical count detail not found");
      }

      const comments = physicalCountDetail.comments || [];

      const { message } = ctx.body as { message: string };
      const newComment = {
        count_stock_detail_id: physical_count_detail_id,
        type: "user",
        user_id: currentUser?.id || "unknown",
        user_name: currentUser?.username || "Unknown User",
        message: message,
        attachments: {},
        info: {},
        // note: null,
        created_at: new Date().toISOString(),
        created_by_id: currentUser?.id || "unknown",
        updated_at: new Date().toISOString(),
        updated_by_id: currentUser?.id || "unknown",
        deleted_at: null,
        deleted_by_id: null,
      };

      comments.push({
        id: generateId(),
        ...newComment,
      });

      physicalCountDetail.comments = comments;

      return { data: physicalCountDetail };
    })

    .get(
      "/api/:bu_code/physical-count/:physical_count_id/review",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          businessUnits,
          currentUser,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        let res: any[] = [];

        const existingDetails = getPhysicalCountDetailByPhysicalCountId(ctx.params.physical_count_id);

        for (const item of existingDetails) {
          // update existing detail
          const update_item = updatePhysicalCountDetail(
            item.id,
            {
              actual_qty: item.actual_qty,
              submitted_qty: Number(item.on_hand_qty ?? 0) - item.actual_qty, // mark as submitted
            },
            currentUser?.id || ""
          );

          // console.log("Updated item:", update_item);

          const { physical_count_id, created_at, created_by_id, updated_at, updated_by_id, ...data } =
            update_item as any;

          res.push(data);
        }

        // console.log("Updated physical count items:", res as any);

        return { data: res };
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Review physical count",
          description: "Review a specific physical count",
        },
      }
    )

    .patch(
      "/api/:bu_code/physical-count/:physical_count_id/submit",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          businessUnits,
          currentUser,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        try {
          // In real scenario, update spot check status to 'completed'
          console.log(`Physical count ${ctx.params.physical_count_id} marked as completed by user ${currentUser?.id}`);

          return { id: ctx.params.physical_count_id };
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["physical-count"],
          summary: "Submit physical count",
          description: "Submit a specific physical count",
        },
      }
    );
