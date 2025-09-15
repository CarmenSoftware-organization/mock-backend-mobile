import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbInventoryTransactionDetail, tbLocation, tbProduct } from "@/mockdata";

export default (app: Elysia) =>
  app

  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  .get("/api/products", async (ctx) => {
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

    const { bu_code } = ctx.query;

    const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
    if (!bu) {
      return resNotFound("Business unit not found");
    }

    const products = tbProduct.getProductsByBusinessUnitCode(bu.code);
    return products;
  })

  .get("/api/:bu_code/product/:product_id/on-hand", async (ctx) => {
    const { bu_code, product_id } = ctx.params;

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

    const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
    if (!bu) {
      return resNotFound("Business unit not found");
    }

    const product = tbProduct.getProductById(product_id);
    if (!product) {
      return resNotFound("Product not found");
    }

    const location_id = ctx.query.location_id;

    const location = tbLocation.getLocationById(location_id);
    

    const inventory = tbInventoryTransactionDetail.getProductOnHand(location_id,product_id);
    return inventory;
    
  })

  // Merged routes from /api/products/locations/:id
  .get("/api/products/locations/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
