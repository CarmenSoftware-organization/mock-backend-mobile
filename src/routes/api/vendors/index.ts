import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseRequest, tbStoreRequisition, tbVendor } from "@/mockdata";
import { resNotFound } from "@/libs/res.error";
import { resSuccessWithPaginate } from "@/libs/response.paginate";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/:bu_code/config/vendors", async (ctx) => {
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

      const vendors = tbVendor.getActiveVendors();
      const res = resSuccessWithPaginate(vendors, vendors.length, 1, 10, 1);
      return res;
    })
    .post("/api/:bu_code/vendors", async (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/:bu_code/vendors/:id", async (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    });
