import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/currencies/iso", ({ params, query, body, headers }) => (null))
;

export default register;