import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  // Merged routes from /api/my-pending/store-requisition/:tenant_id
  .get("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => (null))
  .post("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id
  .get("/api/my-pending/store-requisition/:tenant_id/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/my-pending/store-requisition/:tenant_id/:id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id/save
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/save", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id/submit
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/submit", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id/approve
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/approve", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id/reject
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/reject", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/:id/review
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/review", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/my-pending/store-requisition/:tenant_id/status/:status
  .get("/api/my-pending/store-requisition/:tenant_id/status/:status", ({ params, query, body, headers }) => (null))
;

export default register;
