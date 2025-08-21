import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
  .put("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
  .delete("/api-system/user/cluster/:id", ({ params, query, body, headers }) => (null))
;

export default register;