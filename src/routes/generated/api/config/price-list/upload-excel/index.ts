import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .post("/api/config/price-list/upload-excel", ({ params, query, body, headers }) => (null))
;

export default register;