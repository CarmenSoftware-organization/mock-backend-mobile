import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbProduct, tbUnitConversion } from "@/mockdata";

export default (app: Elysia) =>
  app

.use(
  jwt({
    name: "jwt",
    secret: process.env.JWT_SECRET || "secret",
  })
)

.get("/api/:bu_code/unit/available/product/:product_id", async (ctx) => {
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

  const available_unit = tbUnitConversion.getAvailableUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
  return {data : available_unit};
})

  .get("/api/:bu_code/unit/ingredient/product/:product_id", async (ctx) => {
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
  
    const available_unit = tbUnitConversion.getIngredientUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
    return {data : available_unit};
  })

  .get("/api/:bu_code/unit/order/product/:product_id", async (ctx) => {
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
  
    const available_unit = tbUnitConversion.getOrderUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
    return {data : available_unit};
  })
  ;
