import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
  .patch("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
  .delete("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
;

export default register;