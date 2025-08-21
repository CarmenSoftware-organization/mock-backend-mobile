import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-request", ({ params, query, body, headers }) => (null))
  .post("/api/purchase-request", ({ params, query, body, headers }) => (null))
  .get("/api/purchase-request/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/purchase-request/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/purchase-request/:id/submit", ({ params, query, body, headers }) => (null))
  .patch("/api/purchase-request/:id/approve", ({ params, query, body, headers }) => (null))
  .patch("/api/purchase-request/:id/reject", ({ params, query, body, headers }) => (null))
  .patch("/api/purchase-request/:id/review", ({ params, query, body, headers }) => (null))
  .patch("/api/purchase-request/:id/save", ({ params, query, body, headers }) => (null))
  .get("/api/purchase-request/status/:status", ({ params, query, body, headers }) => (null))
;

export default register;