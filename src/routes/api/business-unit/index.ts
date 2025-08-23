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
    .post("/api/business-unit/default", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/business-unit/system-configs", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/business-unit/configs/:key", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    });

