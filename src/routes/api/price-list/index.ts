import type { Elysia } from "elysia";
import { resBadRequest, resErrorWithData, resNotFound } from "@/libs/res.error";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import jwt from "@elysiajs/jwt";
import { tbBusinessUnit } from "@/mockdata";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )


    .get("/api/price-list", ({ params, query, body, headers }) => ([
      {
        "id": "string",
        "vendor_id": "string",
        "vendor_name": "string",
        "product_id": "string",
        "product_name": "string",
        "price": 0,
        "price_with_vat": 0,
        "price_without_vat": 0,
        "from_date": "2025-08-21T02:25:12.740Z",
        "to_date": "2025-08-21T02:25:12.740Z",
        "created_at": "2025-08-21T02:25:12.740Z",
        "updated_at": "2025-08-21T02:25:12.740Z"
      }
    ]))