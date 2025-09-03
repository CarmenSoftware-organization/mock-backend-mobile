import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
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
.get("/api/price-list/:id", ({ params, query, body, headers }) => {
  return Response.json(resNotImplemented, { status: 501 });
});