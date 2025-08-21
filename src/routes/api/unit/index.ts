import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  // Merged routes from /api/unit/ingredient/product/:productId
  .get("/api/unit/ingredient/product/:productId", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/unit/order/product/:productId
  .get("/api/unit/order/product/:productId", ({ params, query, body, headers }) => (null))
;
