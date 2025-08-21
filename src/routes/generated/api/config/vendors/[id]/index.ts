import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
  .put("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/vendors/:id", ({ params, query, body, headers }) => (null))
;

export default register;