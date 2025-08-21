import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/auth/logout", ({ params, query, body, headers }) => (null))
;

export default register;