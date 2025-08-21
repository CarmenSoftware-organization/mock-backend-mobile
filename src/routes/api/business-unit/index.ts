import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
    .post("/api/business-unit/default", ({ params, query, body, headers }) => (null))
    .get("/api/business-unit/system-configs", ({ params, query, body, headers }) => (null))
    .get("/api/business-unit/configs/:key", ({ params, query, body, headers }) => (null));

export default register;
