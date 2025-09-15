import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { getDefaultCurrencyByBusinessUnitId } from "@/mockdata/tb_application_config";

export default (app: Elysia) =>
  app
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  .get("/api/:bu_code/currencies/default", async (ctx) => {
     const { bu_code } = ctx.params;
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

     const bu = bussiness_Units?.find((bu) => bu.code === bu_code);
     if (!bu) {
       return resNotFound("Business unit not found");
     }

     const defaultCurrency = getDefaultCurrencyByBusinessUnitId(bu.id);
     return {
      bu_code: bu.code,
      bu_name: bu.name,
      currency_id: defaultCurrency?.id || "",
      currency_name: defaultCurrency?.name || "",
      currency_code: defaultCurrency?.code || "",
     }
  }, {
    detail: {
      tags: ["currencies"],
      summary: "Get default currency",
      description: "Get default currency",
    },
  })

  

  .get("/api/currencies", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/currencies/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/currencies/iso", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });