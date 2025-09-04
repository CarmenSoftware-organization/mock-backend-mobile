import { resNotFound, resNotImplemented } from "@/libs/res.error";
import type { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseRequest, tbPurchaseRequestDetail } from "@/mockdata";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )
    .get(
      "/api/:bu_code/purchase-request",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .post(
      "/api/:bu_code/purchase-request",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .get("/api/:bu_code/purchase-request/:id", async (ctx) => {
      const { bu_code, id } = ctx.params;

      // check x-app-id
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
        ctx.headers,
        ctx.jwt
      );
      if (errorAccessToken) {
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
      if (!purchaseRequest) {
        return resNotFound("Purchase request not found");
      }

      const purchaseRequestDetail = tbPurchaseRequestDetail.getPurchaseRequestDetailById(id);

      let prWithDetail = {
        ...purchaseRequest,
        purchase_request_detail: purchaseRequestDetail,
      };

      const res = {
        bu_code: bu_code,
        bu_name: bu.name,
        data: prWithDetail,
      };

      return res;
    })
    .delete(
      "/api/:bu_code/purchase-request/:id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/:bu_code/purchase-request/:id/submit",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/:bu_code/purchase-request/:id/approve",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/:bu_code/purchase-request/:id/reject",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/:bu_code/purchase-request/:id/review",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/:bu_code/purchase-request/:id/save",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .get(
      "/api/:bu_code/purchase-request/status/:status",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    );
