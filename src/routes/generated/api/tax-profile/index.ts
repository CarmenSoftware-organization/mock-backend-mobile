import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/tax-profile", ({ params, query, body, headers }) => (null))
  .get("/api/tax-profile/:id", ({ params, query, body, headers }) => (null))
;

export default register;