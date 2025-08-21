import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/store-requisition", ({ params, query, body, headers }) => (null))
  .post("/api/store-requisition", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/store-requisition/:id
  .get("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
  .put("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
;