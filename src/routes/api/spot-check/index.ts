import type { Elysia } from "elysia";
import {
  resBadRequest,
  resInternalServerError,
  resNotFound,
  resNotImplemented,
} from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbSpotCheck } from "@/mockdata";
import { getRandomInt } from "@/libs/utils";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/api/spot-check/pending",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {

          // mock random data
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
          tags: ["spot-check"],
          summary: "Get my pending spot checks",
          description: "Get my pending spot checks",
        },
      }
    )

    .get("/api/:bu_code/spot-check", async (ctx) => {
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

      const bu = bussiness_Units.find((bu) => bu.code === ctx.params.bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const include_not_count = ctx.query.include_not_count === "true";
      
      // get all details
      const spotChecks = tbSpotCheck.getSpotCheck(include_not_count);
      if (!spotChecks || spotChecks.length === 0) {
        // return resNotFound("Physical count details not found");
      }

      return {
        details: spotChecks,
      };
    }, {
      detail: {
        tags: ["spot-check"],
        summary: "Get all spot checks",
        description: "Get all spot checks",
      },
    });
