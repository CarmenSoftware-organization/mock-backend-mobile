import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/exchange-rate/:id", ({ params, query, body, headers }) => (null))
;

export default register;