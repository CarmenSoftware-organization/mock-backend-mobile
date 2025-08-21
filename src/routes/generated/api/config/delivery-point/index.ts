import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/delivery-point", ({ params, query, body, headers }) => (null))
  .post("/api/config/delivery-point", ({ params, query, body, headers }) => (null))
;

export default register;