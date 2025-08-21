import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
    // Cluster
    .get("/api-system/cluster", ({ params, query, body, headers }) => (null))
    .post("/api-system/cluster", ({ params, query, body, headers }) => (null))
    
    // Cluster by ID
    .get("/api-system/cluster/:id", ({ params, query, body, headers }) => (null))
    .put("/api-system/cluster/:id", ({ params, query, body, headers }) => (null))
    .delete("/api-system/cluster/:id", ({ params, query, body, headers }) => (null));

export default register;