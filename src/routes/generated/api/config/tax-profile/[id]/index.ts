import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/tax-profile/:id", ({ params, query, body, headers }) => (null))
;

export default register;