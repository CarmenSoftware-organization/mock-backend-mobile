import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/good-received-note", ({ params, query, body, headers }) => (null))
  .post("/api/good-received-note", ({ params, query, body, headers }) => (null))
;

export default register;