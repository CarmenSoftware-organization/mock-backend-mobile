import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbProduct, tbUnitConversion } from "@/mockdata";
import { PARAM_X_APP_ID } from "@mockdata/const";
import { getDateEndOnStatusIsOpen, getDateStartOnStatusIsOpen, getOpenPeriods } from "@/mockdata/tb_period";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/:bu_code/period/open", async (ctx) => {
      const { bu_code } = ctx.params;

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

      const openPeriods = getOpenPeriods();

      return openPeriods;
    }, {
        detail: {
            tags: ["financial"],
            summary: "Get open periods for a business unit",
            description: "Retrieve a list of open periods for the specified business unit",
            parameters: [
                PARAM_X_APP_ID,
                {
                    name: "bu_code",
                    in: "path",
                    required: true,
                    description: "Business unit code",
                    schema: {
                        type: "string"
                    }
                }
            ]
        }   
    })
    
    .get("/api/:bu_code/period/eta", async (ctx) => {
     
         const { bu_code } = ctx.params;

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

      const eta_start = getDateStartOnStatusIsOpen();
      const eta_end = getDateEndOnStatusIsOpen();
      
      return {
        eta_start,
        eta_end
      };

    }, {
        detail: {
            tags: ["financial"],
            summary: "Get ETA for period opening",
            description: "Retrieve the estimated start and end dates for the opening of periods for the specified business unit",
            parameters: [
                PARAM_X_APP_ID,
                {
                    name: "bu_code",
                    in: "path",
                    required: true,
                    description: "Business unit code",
                    schema: {
                        type: "string"
                    }
                }
            ]   
        }   
    });
