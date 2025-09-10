import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import {
  tbBusinessUnit,
  tbLocation,
  tbProduct,
  tbProductLocation,
  tbStockInDetail,
} from "@/mockdata";
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
      "/api/:bu_code/locations/:location_id/product/:product_id/inventory",
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

        const { bu_code, location_id, product_id } = ctx.params;

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const location = tbLocation.getLocationById(location_id);
        if (!location) {
          return resNotFound("Location not found");
        }

        const product = tbProduct.getProductById(product_id);
        if (!product) {
          return resNotFound("Product not found");
        }

        const inventory =
          tbProductLocation.getProductLocationByProductAndLocation(
            product_id,
            location_id
          );
        if (!inventory) {
          return resNotFound("Inventory not found");
        }

        const on_hand_qty = getRandomInt(10, 100);
        const on_order_qty = getRandomInt(10, 100);
        const re_order_qty = (inventory.re_order_qty as unknown as number)
          ? inventory.re_order_qty
          : getRandomInt(10, 100);
        const re_stock_qty = (inventory.par_qty as unknown as number)
          ? inventory.par_qty
          : getRandomInt(10, 100);

        const res = {
          on_hand_qty: Number(on_hand_qty),
          on_order_qty: Number(on_order_qty),
          re_order_qty: Number(re_order_qty),
          re_stock_qty: Number(re_stock_qty),
        };

        return res;
      }
    )

    .get("/api/locations", async (ctx) => {
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

      const locations = tbLocation.getLocationsByBusinessUnitCode(bu.code);
      return locations;
    })
    .post("/api/locations", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .put("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .patch("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .delete("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    });
