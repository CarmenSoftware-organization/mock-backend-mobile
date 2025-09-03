import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { resInternalServerError, resNotImplemented } from "@/libs/res.error";
import { tbPurchaseRequest } from "@/mockdata";
import jwt from "@elysiajs/jwt";
import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/api/my-pending/purchase-request",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, jwtUser } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          const purchaseRequests = tbPurchaseRequest.purchaseRequests.filter((purchaseRequest: any) => purchaseRequest.bu_id === jwtUser.bu_id);
          return purchaseRequests;
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["my-pending"],
          summary: "Get my pending purchase requests",
          description: "Get my pending purchase requests",
        },
      }
    )
    .post(
      "/api/my-pending/purchase-request/:tenant_id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .get(
      "/api/my-pending/purchase-request/:tenant_id/:id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .delete(
      "/api/my-pending/purchase-request/:tenant_id/:id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/my-pending/purchase-request/:tenant_id/:id/submit",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/my-pending/purchase-request/:tenant_id/:id/approve",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/my-pending/purchase-request/:tenant_id/:id/reject",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/my-pending/purchase-request/:tenant_id/:id/review",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .patch(
      "/api/my-pending/purchase-request/:tenant_id/:id/save",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .get(
      "/api/my-pending/purchase-request/:tenant_id/status/:status",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    );
