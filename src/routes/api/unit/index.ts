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
  .get("/api/unit/ingredient/product/:productId", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/unit/order/product/:productId", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
