import { createExtraCost } from './../../../../mockdata/tb_extra_cost';
import type { Elysia } from "elysia";
import { resInternalServerError, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from '@/libs/header';
import { tbStoreRequisition } from '@/mockdata';
import { getRandomInt } from '@/libs/utils';
import { getDefaultCurrency } from '@/mockdata/tb_application_config';

export default (app: Elysia) =>
  app

  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  .get("/api/my-pending/store-requisition", async(ctx) => {
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

    const { bu_code } = ctx.query;

    try {
      let storeRequisitions: any[] = [];

      const defaultCurrency = getDefaultCurrency();

      for (const bu of bussiness_Units) {
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

        const res = {
          bu_code: bu.code,
          bu_name: bu.name,
          currency_id: defaultCurrency?.id || "",
          currency_name: defaultCurrency?.name || "",
          currency_code: defaultCurrency?.code || "",
          currency_symbol: defaultCurrency?.symbol || "",
          currency_decimal_places: defaultCurrency?.decimal_places || 0,
          data: srData,
        };
        storeRequisitions.push(res);
      }

    return storeRequisitions;

    } catch (error) {
      return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
    }

  },{
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
        summary: "Get my pending store requisitions",
        description: "Get my pending store requisitions",
      },
    }
  );
