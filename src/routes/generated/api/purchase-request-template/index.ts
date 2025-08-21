import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-request-template", ({ params, query, body, headers }) => (null))
  .post("/api/purchase-request-template", ({ params, query, body, headers }) => (null))
;

export default register;