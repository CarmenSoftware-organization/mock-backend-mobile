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
  .get("/api/good-received-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/good-received-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/good-received-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/good-received-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/good-received-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/good-received-note/scan-po/:qr_code", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });