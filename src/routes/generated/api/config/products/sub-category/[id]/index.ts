import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
  .put("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/products/sub-category/:id", ({ params, query, body, headers }) => (null))
;

export default register;