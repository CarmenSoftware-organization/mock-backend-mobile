import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/products/locations/:id", ({ params, query, body, headers }) => (null))
;

export default register;