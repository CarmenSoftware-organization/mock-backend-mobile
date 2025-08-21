import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/purchase-request-template", ({ params, query, body, headers }) => (null))
  .post("/api/purchase-request-template", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/purchase-request-template/:id
  .get("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
  .put("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/purchase-request-template/:id", ({ params, query, body, headers }) => (null))
;

export default register;