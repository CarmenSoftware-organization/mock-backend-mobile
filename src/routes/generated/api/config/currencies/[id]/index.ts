import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
  .put("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/currencies/:id", ({ params, query, body, headers }) => (null))
;

export default register;