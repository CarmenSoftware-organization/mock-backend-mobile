import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/price-list/:id", ({ params, query, body, headers }) => (null))
;

export default register;