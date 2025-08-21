import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/extra-cost-type", ({ params, query, body, headers }) => (null))
  .post("/api/config/extra-cost-type", ({ params, query, body, headers }) => (null))
;

export default register;