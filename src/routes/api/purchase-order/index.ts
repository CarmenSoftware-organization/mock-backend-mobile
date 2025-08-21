import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/purchase-order", ({ params, query, body, headers }) => (null))
  .post("/api/purchase-order", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/purchase-order/:id
  .get("/api/purchase-order/:id", ({ params, query, body, headers }) => (null))
  .put("/api/purchase-order/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/purchase-order/:id", ({ params, query, body, headers }) => (null))
;