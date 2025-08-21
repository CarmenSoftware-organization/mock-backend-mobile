import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/business-unit/system-configs", ({ params, query, body, headers }) => (null))
;

export default register;