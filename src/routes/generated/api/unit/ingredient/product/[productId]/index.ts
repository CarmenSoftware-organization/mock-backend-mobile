import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/unit/ingredient/product/:productId", ({ params, query, body, headers }) => (null))
;

export default register;