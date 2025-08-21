import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/credit-note", ({ params, query, body, headers }) => (null))
  .post("/api/credit-note", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/credit-note/:id
  .get("/api/credit-note/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/credit-note/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/credit-note/:id", ({ params, query, body, headers }) => (null))
;

export default register;