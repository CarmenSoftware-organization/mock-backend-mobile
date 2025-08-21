import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/price-list", ({ params, query, body, headers }) => (null))
  .post("/api/config/price-list", ({ params, query, body, headers }) => (null))
;

export default register;