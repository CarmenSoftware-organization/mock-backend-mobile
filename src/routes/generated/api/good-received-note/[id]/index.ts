import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
;

export default register;