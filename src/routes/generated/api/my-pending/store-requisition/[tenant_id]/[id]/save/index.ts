import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/save", ({ params, query, body, headers }) => (null))
;

export default register;