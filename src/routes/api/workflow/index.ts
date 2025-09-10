import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseRequest, tbStoreRequisition } from "@/mockdata";
import { resNotFound } from "@/libs/res.error";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/:bu_code/workflow/purchase-request/:pr_id", async (ctx) => {
      const { bu_code, pr_id } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
        ctx.headers,
        ctx.jwt
      );
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const pr = tbPurchaseRequest.getPurchaseRequestById(pr_id);
      if (!pr) {
        return resNotFound("Purchase request not found");
      }

      return {
        stage_role: "approve",
      };
    })

    .get(
      "/api/:bu_code/workflow/purchase-request/:pr_id/previous",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
          ctx.headers,
          ctx.jwt
        );
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const { bu_code, pr_id } = ctx.params;

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const pr = tbPurchaseRequest.getPurchaseRequestById(pr_id);
        if (!pr) {
          return resNotFound("Purchase request not found");
        }

        return {
          1: "Request Creation",
          2: "Department Approval",
          3: "Purchasing Review",
        };
      }
    )

    .get("/api/:bu_code/workflow/store-requisition/:sr_id", async (ctx) => {
      const { bu_code, sr_id } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
        ctx.headers,
        ctx.jwt
      );
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const sr = tbStoreRequisition.getStoreRequisitionById(sr_id);
      if (!sr) {
        return resNotFound("Store requisition not found");
      }

      return {
        stage_role: "issue",
      };
    })

    .get(
      "/api/:bu_code/workflow/store-requisition/:sr_id/previous",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
          ctx.headers,
          ctx.jwt
        );
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const { bu_code, sr_id } = ctx.params;

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const sr = tbStoreRequisition.getStoreRequisitionById(sr_id);
        if (!sr) {
          return resNotFound("Store requisition not found");
        }

        return {
          1: "Draft",
          2: "Approved"
        };
      }
    )

    .get("/api/workflow/type/:type", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    });
