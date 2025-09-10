import {
  resBadRequest,
  resNotFound,
  resNotImplemented,
  resSuccess,
} from "@/libs/res.error";
import type { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import {
  tbBusinessUnit,
  tbPurchaseRequest,
  tbPurchaseRequestDetail,
} from "@/mockdata";
import { t } from "elysia";
import { PurchaseRequestApproval } from "@/mockdata/tb_purchase_request";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    // create model from PurchaseRequestApproval
    .model({
      PurchaseRequestApproval: t.Object({
        state_role: t.Enum({
          approve: "approve",
          create: "create",
          purchase: "purchase",
          view_only: "view_only",
        }),
      }),
      PurchaseRequestApprovalItem: t.Object({
        id: t.String({
          description: "Purchase request detail id",
          required: true,
        }),
        state_status: t.Enum(
          {
            approve: "approve",
            reject: "reject",
            review: "review",
          },
          {
            required: true,
          }
        ),
        state_message: t.String({
          description: "State message",
          required: false,
        }),
        description: t.String({
          description: "Description",
          required: false,
        }),
        approved_qty: t.Number({
          description: "Approved quantity",
          required: false,
        }),
        approved_unit_id: t.String({
          required: false,
          description: "Approved unit id",
        }),
        approved_unit_conversion_factor: t.Number({
          required: false,
          description: "Approved unit conversion factor",
        }),
        approved_base_qty: t.Number({
          required: false,
          description: "Approved base quantity",
        }),
      }),
    })

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

      const pr = tbPurchaseRequest.getPurchaseRequestById(id);
      if (!pr) {
        return resNotFound("Purchase request not found");
      }

      let purchaseRequestDetail = [];

      const prdByPrId =
        tbPurchaseRequestDetail.getPurchaseRequestDetailsByPurchaseRequestId(
          pr.id
        );

      for (const prd of prdByPrId) {
        purchaseRequestDetail.push(prd);
      }

      let prWithDetail = {
        ...pr,
        purchase_request_detail: purchaseRequestDetail,
      };

      const res = {
        bu_code: bu_code,
        bu_name: bu.name,
        data: prWithDetail,
      };

      return res;
    })

    .delete("/api/:bu_code/purchase-request/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .patch("/api/:bu_code/purchase-request/:id/submit", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .patch(
      "/api/:bu_code/purchase-request/:id/approve",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Approve a purchase request",
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/reject",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
          if (item.state_status !== "reject") {
            return resBadRequest(
              "Invalid state status (" + item.state_status + ")"
            );
          }
          if (!item.state_message) {
            return resBadRequest("State message is required");
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Reject a purchase request",
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/review",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        const destination = body.destination;
        if (!destination) {
          return resBadRequest("Destination is required");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Review a purchase request",
      }
    )
    .patch("/api/:bu_code/purchase-request/:id/save", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/:bu_code/purchase-request/status/:status", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    });
