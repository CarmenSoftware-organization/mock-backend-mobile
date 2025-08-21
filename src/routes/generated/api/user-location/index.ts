import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/user-location", ({ params, query, body, headers }) => (null))
;

export default register;