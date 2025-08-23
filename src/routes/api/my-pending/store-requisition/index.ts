import type { Elysia } from "elysia";

// Utility function for not implemented endpoints
const resNotImplemented = {
  success: false,
  error: "Not Implemented",
  message: "This endpoint is not implemented yet",
  timestamp: new Date().toISOString()
};

export default (app: Elysia) =>
  app
  .get("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/my-pending/store-requisition/:tenant_id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/my-pending/store-requisition/:tenant_id/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/my-pending/store-requisition/:tenant_id/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/submit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/approve", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/reject", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/review", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/store-requisition/:tenant_id/:id/save", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/my-pending/store-requisition/:tenant_id/status/:status", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
