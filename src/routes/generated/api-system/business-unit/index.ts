import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/business-unit", ({ params, query, body, headers }) => (null))
  .post("/api-system/business-unit", ({ params, query, body, headers }) => (null))
;

export default register;