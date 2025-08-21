import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/tax-profile", ({ params, query, body, headers }) => (null))
  .post("/api/config/tax-profile", ({ params, query, body, headers }) => (null))
;

export default register;