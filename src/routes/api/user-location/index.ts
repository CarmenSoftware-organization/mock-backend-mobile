import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/user-location", ({ params, query, body, headers }) => (null))
;