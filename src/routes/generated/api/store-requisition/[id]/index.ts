import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
  .put("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/store-requisition/:id", ({ params, query, body, headers }) => (null))
;

export default register;