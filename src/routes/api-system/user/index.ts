import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  // Merged routes from /api-system/user/cluster
  .get("/api-system/user/cluster", ({ params, query, body, headers }) => (null))
  .post("/api-system/user/cluster", ({ params, query, body, headers }) => (null))
  // Merged routes from /api-system/user/cluster/:id
  .get("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
  .put("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
  .delete("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api-system/user/business-unit
  .get("/api-system/user/business-unit", ({ params, query, body, headers }) => (null))
  .post("/api-system/user/business-unit", ({ params, query, body, headers }) => (null))
  // Merged routes from /api-system/user/business-unit/:id
  .get("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
  .patch("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
  .delete("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => (null))
;
