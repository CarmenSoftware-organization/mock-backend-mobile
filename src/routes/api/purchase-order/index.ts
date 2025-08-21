import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-order", ({ params, query, body, headers }) => (null))
  .post("/api/purchase-order", ({ params, query, body, headers }) => (null))
;

export default register;