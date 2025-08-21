import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/workflow/type/:type", ({ params, query, body, headers }) => (null))
;