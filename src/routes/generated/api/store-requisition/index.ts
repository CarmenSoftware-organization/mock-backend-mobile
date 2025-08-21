import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/store-requisition", ({ params, query, body, headers }) => (null))
  .post("/api/store-requisition", ({ params, query, body, headers }) => (null))
;

export default register;