import { createExtraCost } from './../../../../mockdata/tb_extra_cost';
import type { Elysia } from "elysia";
import { resInternalServerError, resSuccessWithData } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from '@/libs/header';
import { tbStoreRequisition } from '@/mockdata';
import { getRandomInt } from '@/libs/utils';
import { getDefaultCurrencyByBusinessUnitId } from '@/mockdata/tb_application_config';

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/my-pending/store-requisition", async (ctx) => {
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

      const { bu_code } = ctx.query;

      try {
        let storeRequisitions: any[] = [];


        for (const bu of businessUnits) {
          if (bu_code && bu_code !== bu.code) {
            continue;
          }

          const srData = tbStoreRequisition.getStoreRequisitionsByCodeAndInProgress(bu.code ?? "")
            .map((sr) => ({
              id: sr.id,
              sr_no: sr.sr_no,
              sr_date: sr.sr_date,
              description: sr.description,
              doc_status: sr.doc_status,
              requestor_name: sr.requestor_name,
              department_name: sr.department_name,
              workflow_name: sr.workflow_name,
              workflow_current_stage: sr.workflow_current_stage,
              workflow_previous_stage: sr.workflow_previous_stage,
              workflow_next_stage: sr.workflow_next_stage,
              last_action: sr.last_action,
              created_at: sr.created_at,
              total_amount: Number(getRandomInt(50, 100000)),
            }));


          const defaultCurrency = getDefaultCurrencyByBusinessUnitId(bu.id);

          const res = {
            bu_code: bu.code,
            bu_name: bu.name,
            currency: {
              id: defaultCurrency?.id || "",
              name: defaultCurrency?.name || "",
              code: defaultCurrency?.code || "",
              symbol: defaultCurrency?.symbol || "",
              decimal_places: defaultCurrency?.decimal_places || 0,
            },
            data: srData,
          };
          storeRequisitions.push(res);
        }

        return resSuccessWithData(storeRequisitions);

      } catch (error) {
        return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
      }

    }, {
      detail: {
        tags: ["my-pending"],
        summary: "Get my pending store requisitions",
        description: "Get my pending store requisitions",
      },
    })
    .get(
      "/api/my-pending/store-requisition/pending",
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
          return resSuccessWithData(res);
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["my-pending"],
          summary: "Get my pending store requisitions",
          description: "Get my pending store requisitions",
        },
      }
    );
