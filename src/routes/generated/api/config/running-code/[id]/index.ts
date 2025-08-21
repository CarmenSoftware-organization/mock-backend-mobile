import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
  .put("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/running-code/:id", ({ params, query, body, headers }) => (null))
;

export default register;