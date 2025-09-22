import type { Elysia } from "elysia";
import {
  resBadRequest,
  resInternalServerError,
  resNotFound,
  resNotImplemented,
} from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbPhysicalCount, tbPhysicalCountDetail } from "@/mockdata";
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
      "/api/physical-count/pending",
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
          tags: ["physical-count"],
          summary: "Get my pending physical counts",
          description: "Get my pending physical counts",
        },
      }
    )
    
    .get("/api/:bu_code/physical-count", async (ctx) => {
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


      const physicalCounts = tbPhysicalCount.getPhysicalCountsOnCounting();
      if (!physicalCounts) {
        return resNotFound("Physical counts not found");
      }


      // get all details
      const physicalCountDetails = tbPhysicalCountDetail.getPhysicalCountDetailsByPhysicalCountId(physicalCounts.id, include_not_count);
      if (!physicalCountDetails || physicalCountDetails.length === 0) {
        // return resNotFound("Physical count details not found");
      }

      return {
        data: physicalCounts,
        details: physicalCountDetails,
      };
    });
