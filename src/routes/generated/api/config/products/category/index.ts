import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/products/category", ({ params, query, body, headers }) => (null))
  .post("/api/config/products/category", ({ params, query, body, headers }) => (null))
;

export default register;