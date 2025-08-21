import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/user/cluster", ({ params, query, body, headers }) => (null))
  .post("/api-system/user/cluster", ({ params, query, body, headers }) => (null))
;

export default register;