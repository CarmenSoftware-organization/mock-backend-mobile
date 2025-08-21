import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
  .put("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
  .patch("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => (null))
;

export default register;