import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/credit-note-reason", ({ params, query, body, headers }) => (null))
;

export default register;