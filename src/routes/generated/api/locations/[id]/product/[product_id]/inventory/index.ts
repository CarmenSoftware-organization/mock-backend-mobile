import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/locations/:id/product/:product_id/inventory", ({ params, query, body, headers }) => ({
  "on_hand_qty": 0,
  "on_order_qty": 0,
  "re_order_qty": 0,
  "re_stock_qty": 0
}))
;

export default register;