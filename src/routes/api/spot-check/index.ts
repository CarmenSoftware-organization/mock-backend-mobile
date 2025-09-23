import { t, type Elysia } from "elysia";
import {
  resBadRequest,
  resInternalServerError,
  resNotFound,
  resNotImplemented,
} from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbSpotCheck, tbSpotCheckDetail } from "@/mockdata";
import { getRandomInt } from "@/libs/utils";
import { createSpotCheck, CreateSpotCheckDTO } from "@/mockdata/tb_spot_check";
import {
  getAllSpotCheckDetails,
  getSpotCheckDetailById,
  getSpotCheckDetailsBySpotCheckId,
  createSpotCheckDetail,
  updateSpotCheckDetail,
  deleteSpotCheckDetail,
  getNextSequenceNumber,
  type SpotCheckDetail,
  SpotCheckUpdateDTO,
} from "@/mockdata/tb_spot_check_detail";
import { number } from "zod";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/spot-check/pending",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
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
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["spot-check"],
          summary: "Get my pending spot checks",
          description: "Get my pending spot checks",
        },
      }
    )

    .get("/api/:bu_code/spot-check", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const include_not_count = ctx.query.include_not_count === "true";

      // get all details
      const spotChecks = tbSpotCheck.getSpotCheck(include_not_count);
      if (!spotChecks || spotChecks.length === 0) {
        // return resNotFound("Physical count details not found");
      }

      return {
        details: spotChecks,
      };
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Get all spot checks",
        description: "Get all spot checks",
      },
    })

    .post("/api/:bu_code/spot-check", async (ctx) => {

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const { location_id, method, items_total, items } = ctx.body as CreateSpotCheckDTO;

      const res = tbSpotCheck.createSpotCheck(method, location_id, items_total);
      // response spotchecking details
      return { id: res.id };

    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Create spot check",
        description: "Create spot check",
      },
    })

    .get("/api/:bu_code/spot-check/:spot_check_id/details", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const details = getSpotCheckDetailsBySpotCheckId(ctx.params.spot_check_id);
        return { data: details };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Get spot check details by spot check ID",
        description: "Get all details for a specific spot check",
      },
    })

    .get("/api/:bu_code/spot-check/detail/:detail_id", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const detail = getSpotCheckDetailById(ctx.params.detail_id);
        if (!detail) {
          return resNotFound("Spot check detail not found");
        }
        return { data: detail };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Get spot check detail by ID",
        description: "Get a specific spot check detail by its ID",
      },
    })

    .post("/api/:bu_code/spot-check/:spot_check_id/details", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const { product_id, product_name, sku, actual_qty } = ctx.body as {
          product_id: string;
          product_name: string;
          sku: string;
          actual_qty: number;
        };

        const nextSequence = getNextSequenceNumber(ctx.params.spot_check_id);

        const newDetail = createSpotCheckDetail({
          spot_check_id: ctx.params.spot_check_id,
          sequence_no: nextSequence,
          product_id,
          product_name,
          sku,
          actual_qty,
          created_by_id: currentUser?.id || "",
          updated_by_id: currentUser?.id || "",
        });

        return { data: newDetail };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Create spot check detail",
        description: "Add a new detail item to a spot check",
      },
    })

    .patch("/api/:bu_code/spot-check/detail/:detail_id", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const updateData = ctx.body as Partial<Pick<SpotCheckDetail, 'product_id' | 'product_name' | 'sku' | 'actual_qty' | 'sequence_no'>>;

        const updatedDetail = updateSpotCheckDetail(
          ctx.params.detail_id,
          updateData,
          currentUser?.id || ""
        );

        if (!updatedDetail) {
          return resNotFound("Spot check detail not found");
        }

        return { data: updatedDetail };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Update spot check detail",
        description: "Update an existing spot check detail",
      },
    })

    .delete("/api/:bu_code/spot-check/detail/:detail_id", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const deleted = deleteSpotCheckDetail(ctx.params.detail_id);

        if (!deleted) {
          return resNotFound("Spot check detail not found");
        }

        return { message: "Spot check detail deleted successfully" };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Delete spot check detail",
        description: "Delete a spot check detail by ID",
      },
    })

    .get("/api/:bu_code/spot-check-details", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const allDetails = getAllSpotCheckDetails();
        return { data: allDetails };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check-detail"],
        summary: "Get all spot check details",
        description: "Get all spot check details across all spot checks",
      },
    })

    .get("/api/:bu_code/spot-check/:spot_check_id", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const { bu_code, spot_check_id } = ctx.params;

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        const spotcheck = tbSpotCheckDetail.getSpotcheckById(spot_check_id);
        if (!spotcheck) {
          return resNotFound("Spot check not found");
        }

        return { data: spotcheck };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Get spot check by ID with details",
        description: "Get a specific spot check by its ID along with its details",
      },
    })

    .patch("/api/:bu_code/spot-check/:spot_check_id/save", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const items = ctx.body as SpotCheckUpdateDTO;

      try {
        // update each item
        items.items.forEach(item => {
          // find existing detail by product_id and spot_check_id
          const existingDetails = getSpotCheckDetailsBySpotCheckId(ctx.params.spot_check_id);
          const existingDetail = existingDetails.find(detail => detail.product_id === item.product_id);
          if (existingDetail) {
            // update existing detail
            updateSpotCheckDetail(existingDetail.id, {
              actual_qty: item.actual_qty
            }, currentUser?.id || "");
          } else {
            // create new detail
            const nextSequence = getNextSequenceNumber(ctx.params.spot_check_id);
            createSpotCheckDetail({
              spot_check_id: ctx.params.spot_check_id,
              sequence_no: nextSequence,
              product_id: item.product_id,
              product_name: "", // In real scenario, fetch product name by product_id
              sku: "", // In real scenario, fetch SKU by product_id
              actual_qty: item.actual_qty,
              created_by_id: currentUser?.id || "",
              updated_by_id: currentUser?.id || "",
            });
          }

        });

        console.log("Updated spot check items:", items);

        return { id: ctx.params.spot_check_id };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Save spot check",
        description: "Save changes to a specific spot check",
      },
    })

    .patch("/api/:bu_code/spot-check/:spot_check_id/review", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const items = ctx.body as SpotCheckUpdateDTO;

      let res: any[] = [];

      try {
        // update each item
        items.items.forEach(item => {
          // find existing detail by product_id and spot_check_id
          const existingDetails = getSpotCheckDetailsBySpotCheckId(ctx.params.spot_check_id);
          const existingDetail = existingDetails.find(detail => detail.product_id === item.product_id);
          if (existingDetail) {
            // update existing detail
            const update_item =
              updateSpotCheckDetail(existingDetail.id, {
                actual_qty: item.actual_qty,
                submitted_qty: Number(existingDetail.on_hand_qty ?? 0) - item.actual_qty, // mark as submitted
              }, currentUser?.id || "");

            const { spot_check_id, created_at, created_by_id, updated_at, updated_by_id, ...data } = update_item as any;

            res.push(data);
          } else {
            // create new detail
            const nextSequence = getNextSequenceNumber(ctx.params.spot_check_id);

            const new_item = createSpotCheckDetail({
              spot_check_id: ctx.params.spot_check_id,
              sequence_no: nextSequence,
              product_id: item.product_id,
              product_name: "", // In real scenario, fetch product name by product_id
              sku: "", // In real scenario, fetch SKU by product_id
              actual_qty: item.actual_qty,
              submitted_qty: getRandomInt(100, 1000) - item.actual_qty,
              created_by_id: currentUser?.id || "",
              updated_by_id: currentUser?.id || "",
            });

            const { spot_check_id, created_at, created_by_id, updated_at, updated_by_id, ...data } = new_item as any;
            res.push(data);
          }

        });

        console.log("Updated spot check items:", res as any);

        return { data: res };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Review spot check",
        description: "Submit a specific spot check for review",
      },
    })

    .patch("/api/:bu_code/spot-check/:spot_check_id/submit", async (ctx) => {
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      try {
        // In real scenario, update spot check status to 'completed'
        console.log(`Spot check ${ctx.params.spot_check_id} marked as completed by user ${currentUser?.id}`);

        return { id: ctx.params.spot_check_id };
      } catch (error) {
        return resInternalServerError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Complete spot check",
        description: "Mark a specific spot check as completed",
      },
    })
  ;
