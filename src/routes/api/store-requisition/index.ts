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
  .get("/api/store-requisition", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/store-requisition", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  // Merged routes from /api/store-requisition/:id
  .get("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });