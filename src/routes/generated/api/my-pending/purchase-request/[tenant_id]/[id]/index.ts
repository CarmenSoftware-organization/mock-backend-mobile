import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/my-pending/purchase-request/:tenant_id/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/my-pending/purchase-request/:tenant_id/:id", ({ params, query, body, headers }) => (null))
;

export default register;