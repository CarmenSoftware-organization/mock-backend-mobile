import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/auth/register", ({ params, query, body, headers }) => (null))
;

export default register;