import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-request/status/:status", ({ params, query, body, headers }) => (null))
;

export default register;