import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/locations", ({ params, query, body, headers }) => ([
  {
    "id": "string",
    "name": "string",
    "address": "string",
    "is_active": false,
    "created_at": "2025-08-21T02:25:12.740Z",
    "updated_at": "2025-08-21T02:25:12.740Z"
  }
]))
  // Merged routes from /api/locations/:id
  .get("/api/locations/:id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/locations/:id/product/:product_id/inventory
  .get("/api/locations/:id/product/:product_id/inventory", ({ params, query, body, headers }) => ({
  "on_hand_qty": 0,
  "on_order_qty": 0,
  "re_order_qty": 0,
  "re_stock_qty": 0
}))
;