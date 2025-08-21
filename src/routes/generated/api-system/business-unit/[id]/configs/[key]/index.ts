import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => (null))
  .delete("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => (null))
;

export default register;