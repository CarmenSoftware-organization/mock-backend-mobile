import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/exchange-rate", ({ params, query, body, headers }) => (null))
  .post("/api/config/exchange-rate", ({ params, query, body, headers }) => (null))
;

export default register;