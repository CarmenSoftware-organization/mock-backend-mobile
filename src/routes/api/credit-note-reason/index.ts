import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/credit-note-reason", ({ params, query, body, headers }) => (null))
;