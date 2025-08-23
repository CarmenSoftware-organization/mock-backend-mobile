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
  .get("/api/credit-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/credit-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
