import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { resInternalServerError, resNotImplemented } from "@/libs/res.error";
import { getRandomInt } from "@/libs/utils";
import { tbPurchaseRequest, tbPurchaseRequestDetail } from "@/mockdata";
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

        const {
          error: errorAccessToken,
          jwtUser,
          currentUser,
          userProfile,
          bussiness_Units,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const { bu_code } = ctx.query;

        try {
          let purchaseRequests: any[] = [];

          for (const bu of bussiness_Units) {
            if (bu_code && bu_code !== bu.code) {
              continue;
            }

            // find pr in bu_id
            const prData = tbPurchaseRequest
              .getPurchaseRequestsByCodeAndInProgress(bu.code ?? "")
              .map((pr) => ({
                id: pr.id,
                pr_no: pr.pr_no,
                pr_date: pr.pr_date,
                description: pr.description,
                pr_status: pr.pr_status,
                requestor_name: pr.requestor_name,
                department_name: pr.department_name,
                workflow_name: pr.workflow_name,
                workflow_current_stage: pr.workflow_current_stage,
                workflow_previous_stage: pr.workflow_previous_stage,
                workflow_next_stage: pr.workflow_next_stage,
                last_action: pr.last_action,
                created_at: pr.created_at,
                total_amount: Number(getRandomInt(50, 100000)),
              }));

            const res = {
              bu_code: bu.code,
              bu_name: bu.name,
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
    .get(
      "/api/my-pending/purchase-request/pending",
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

        try {
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
          tags: ["my-pending"],
          summary: "Get my pending purchase requests",
          description: "Get my pending purchase requests",
        },
      }
    );
