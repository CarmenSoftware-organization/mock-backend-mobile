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
  .get("/api/my-pending/purchase-request/:tenant_id", ({ params, query, body, headers }) => ([
    {
      "id": "string",
      "pr_number": "string",
      "pr_date": "2025-08-21T02:25:12.740Z",
      "requester_id": "string",
      "requester_name": "string",
      "department_id": "string",
      "department_name": "string",
      "business_unit_id": "string",
      "business_unit_name": "string",
      "status": "string",
      "total_amount": 0,
      "currency": "string",
      "created_at": "2025-08-21T02:25:12.740Z",
      "updated_at": "2025-08-21T02:25:12.740Z"
    }
  ]))
  .post("/api/my-pending/purchase-request/:tenant_id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/my-pending/purchase-request/:tenant_id/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/my-pending/purchase-request/:tenant_id/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/purchase-request/:tenant_id/:id/submit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/purchase-request/:tenant_id/:id/approve", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/purchase-request/:tenant_id/:id/reject", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/purchase-request/:tenant_id/:id/review", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/my-pending/purchase-request/:tenant_id/:id/save", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/my-pending/purchase-request/:tenant_id/status/:status", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
