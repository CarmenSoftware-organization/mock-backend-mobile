import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/auth/invite-user", ({ params, query, body, headers }) => (null))
;

export default register;