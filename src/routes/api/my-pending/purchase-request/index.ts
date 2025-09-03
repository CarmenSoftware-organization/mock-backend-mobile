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

        const { error: errorAccessToken, jwtUser, currentUser, userProfile, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const {tenant_id} = ctx.query;

        try {

          let purchaseRequests: any[] = [];

          for (const bu of bussiness_Units) {

            if (tenant_id && tenant_id !== bu.id) {
              continue;
            }

            // find pr in bu_id
            const prData = tbPurchaseRequest.getPurchaseRequestsByBuId(bu.id);

            const res = {
              bu_id: bu.id,
              bu_name: bu.name,
              // bu_alias_name: bu.alias_name,
              data: prData,
            };
            purchaseRequests.push(res);
          }

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
