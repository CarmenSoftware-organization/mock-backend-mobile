import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/credit-note", ({ params, query, body, headers }) => (null))
  .post("/api/credit-note", ({ params, query, body, headers }) => (null))
;

export default register;