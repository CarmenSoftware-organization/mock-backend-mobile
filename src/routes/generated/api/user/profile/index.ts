import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/user/profile", ({ params, query, body, headers }) => (null))
;

export default register;