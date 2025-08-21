import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => (null))
  .post("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => (null))
;

export default register;