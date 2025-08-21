import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/running-code/result/:type", ({ params, query, body, headers }) => (null))
;

export default register;