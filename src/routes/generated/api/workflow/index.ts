import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/workflow/type/:type", ({ params, query, body, headers }) => (null))
;

export default register;