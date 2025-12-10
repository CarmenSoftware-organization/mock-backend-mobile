import type { Elysia } from "elysia";
import { resBadRequest, resErrorWithData, resNotFound } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { tbBusinessUnit, tbStoreRequisition, tbStoreRequisitionDetail } from "@/mockdata";
import { CheckHeaderHasAccessToken } from "@/libs/header";
import { CheckHeaderHasAppId } from "@/libs/header";
import { StoreRequisitionApproval } from "@/mockdata/tb_store_requisition";
import { PARAM_X_APP_ID, PARAM_AUTHORIZATION } from "@mockdata/const";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )



    .get("/api/:bu_code/store-requisition/:id", async (ctx) => {
      const { bu_code, id } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const sr = tbStoreRequisition.getStoreRequisitionById(id);
      if (!sr) {
        return resNotFound("Store requisition not found");
      }

      let storeRequisitionDetail = [];

      const srdtBySrId = tbStoreRequisitionDetail.getStoreRequisitionDetailsByStoreRequisitionId(sr.id);

      for (const srdt of srdtBySrId) {
        storeRequisitionDetail.push(srdt);
      }

      let srWithDetail = {
        ...sr,
        store_requisition_detail: storeRequisitionDetail,
      };

      const res = {
        bu_code: bu_code,
        bu_name: bu.name,
        data: srWithDetail,
      };

      return res;
    })



    .patch(
      "/api/:bu_code/store-requisition/:id/approve",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        try {
          const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
          if (!storeRequisition) {
            return resNotFound("Store requisition not found");
          }

          const body = (await ctx.body) as StoreRequisitionApproval | undefined;
          if (!body) {
            return resBadRequest("Invalid body");
          }

          if (body.state_role !== "approve") {
            return resBadRequest("Invalid state role");
          }

          for (const item of body.details) {
            const storeRequisitionDetail = tbStoreRequisitionDetail.getStoreRequisitionDetailById(item.id);
            if (!storeRequisitionDetail) {
              return resNotFound("Store requisition detail " + item.id + " not found");
            }
          }

          return { data: storeRequisition.id };
        } catch (error) {
          return resErrorWithData("Internal server error", error);
        }
      },
      {
        tags: ["Application - Store Requisition"],
        description: "Approve a store requisition",
      }
    )

    .post(
      "/api/:bu_code/store-requisition/:id/swipe_approve",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        try {
          const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
          if (!storeRequisition) {
            return resNotFound("Store requisition not found");
          }

          tbStoreRequisition.swipeApproveStoreRequisitionById(id);

          return { data: storeRequisition.id };
        } catch (error) {
          return resErrorWithData("Internal server error", error);
        }
      },
      {
        tags: ["Application - Store Requisition"],
        description: "Swipe to approve a store requisition",
      }
    )

    .post(
      "/api/:bu_code/store-requisition/:id/swipe_reject",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        try {

          const body = ctx.body;

          if (!body || !body.message) {
            return resBadRequest("Message is required");
          }

          const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
          if (!storeRequisition) {
            return resNotFound("Store requisition not found");
          }

          tbStoreRequisition.swipeRejectStoreRequisitionById(id, body.message);

          return { data: storeRequisition.id };


        } catch (error) {
          return resErrorWithData("Internal server error", error);
        }
      },
      {
        tags: ["Application - Store Requisition"],
        description: "Swipe to reject a store requisition",
      }
    )

    .patch(
      "/api/:bu_code/store-requisition/:id/issue",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
        if (!storeRequisition) {
          return resNotFound("Store requisition not found");
        }

        const body = (await ctx.body) as StoreRequisitionApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "issue") {
          return resBadRequest("Invalid state role");
        }

        console.log(body);

        for (const item of body.details) {
          const storeRequisitionDetail = tbStoreRequisitionDetail.getStoreRequisitionDetailById(item.id);
          if (!storeRequisitionDetail) {
            return resNotFound("Store requisition detail " + item.id + " not found");
          }
        }

        return { data: storeRequisition.id };
      },
      {
        type: "json",
        tags: ["Application - Store Requisition"],
        description: "Approve a store requisition",
      }
    )

    .patch(
      "/api/:bu_code/store-requisition/:id/reject",
      async (ctx) => {

        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
        if (!storeRequisition) {
          return resNotFound("Store requisition not found");
        }

        const body = (await ctx.body) as StoreRequisitionApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve" && body.state_role !== "issue") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.details) {
          const storeRequisitionDetail = tbStoreRequisitionDetail.getStoreRequisitionDetailById(item.id);
          if (!storeRequisitionDetail) {
            return resNotFound("Store requisition detail " + item.id + " not found");
          }
          if (item.state_status !== "reject") {
            return resBadRequest("Invalid state status (" + item.state_status + ")");
          }
          if (!item.state_message) {
            return resBadRequest("State message is required");
          }
        }

        return { data: storeRequisition.id };
      },
      {
        type: "json",
        tags: ["Application - Store Requisition"],
        description: "Reject a store requisition",
      }
    )

    .patch(
      "/api/:bu_code/store-requisition/:id/review",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const storeRequisition = tbStoreRequisition.getStoreRequisitionById(id);
        if (!storeRequisition) {
          return resNotFound("Store requisition not found");
        }

        const body = (await ctx.body) as StoreRequisitionApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve" && body.state_role !== "issue") {
          return resBadRequest("Invalid state role");
        }

        const destination = body.destination;
        if (!destination) {
          return resBadRequest("Destination is required");
        }

        for (const item of body.details) {
          const storeRequisitionDetail = tbStoreRequisitionDetail.getStoreRequisitionDetailById(item.id);
          if (!storeRequisitionDetail) {
            return resNotFound("Store requisition detail " + item.id + " not found");
          }
        }

        return { data: storeRequisition.id };
      },
      {
        type: "json",
        tags: ["Application - Store Requisition"],
        description: "Review a store requisition",
      }
    )

