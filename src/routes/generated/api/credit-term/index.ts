import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/credit-term", ({ params, query, body, headers }) => (null))
;

export default register;