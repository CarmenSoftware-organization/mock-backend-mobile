import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/department", ({ params, query, body, headers }) => (null))
  .get("/api/department/:id", ({ params, query, body, headers }) => (null))
;