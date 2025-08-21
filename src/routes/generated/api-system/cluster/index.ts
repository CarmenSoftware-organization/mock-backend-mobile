import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/cluster", ({ params, query, body, headers }) => (null))
  .post("/api-system/cluster", ({ params, query, body, headers }) => (null))
;

export default register;