import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/vendor-business-type", ({ params, query, body, headers }) => (null))
  .post("/api/config/vendor-business-type", ({ params, query, body, headers }) => (null))
;

export default register;