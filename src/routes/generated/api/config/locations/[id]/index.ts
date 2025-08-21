import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/locations/:id", ({ params, query, body, headers }) => (null))
;

export default register;