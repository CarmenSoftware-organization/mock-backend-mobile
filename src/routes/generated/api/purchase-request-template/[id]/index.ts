import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
  .put("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
;

export default register;