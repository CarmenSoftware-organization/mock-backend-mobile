import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/tax-profile", ({ params, query, body, headers }) => (null))
  .get("/api/tax-profile/:id", ({ params, query, body, headers }) => (null))
;