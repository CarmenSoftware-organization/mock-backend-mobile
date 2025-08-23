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
  .get("/api-system/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api-system/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api-system/business-unit/:id/system-configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api-system/business-unit/:id/configs/:key/exists", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });