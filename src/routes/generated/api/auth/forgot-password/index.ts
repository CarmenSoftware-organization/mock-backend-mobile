import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/auth/forgot-password", ({ params, query, body, headers }) => (null))
;

export default register;