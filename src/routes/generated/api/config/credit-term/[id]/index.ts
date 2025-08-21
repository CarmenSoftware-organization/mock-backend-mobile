import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/credit-term/:id", ({ params, query, body, headers }) => (null))
;

export default register;