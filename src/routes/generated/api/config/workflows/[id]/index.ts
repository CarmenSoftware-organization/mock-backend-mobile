import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
  .put("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/workflows/:id", ({ params, query, body, headers }) => (null))
;

export default register;