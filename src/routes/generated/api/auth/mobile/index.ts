import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/auth/mobile", ({ params, query, body, headers }) => (null))
;

export default register;