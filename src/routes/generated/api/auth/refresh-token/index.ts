import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/auth/refresh-token", ({ params, query, body, headers }) => (null))
;

export default register;