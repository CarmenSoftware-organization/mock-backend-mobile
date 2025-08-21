import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
    // User
    .get("/api/user", ({ params, query, body, headers }) => (null))
    
    // User Profile
    .get("/api/user/profile", ({ params, query, body, headers }) => (null));