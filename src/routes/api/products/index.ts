import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  // Merged routes from /api/products/locations/:id
  .get("/api/products/locations/:id", ({ params, query, body, headers }) => (null))
;
