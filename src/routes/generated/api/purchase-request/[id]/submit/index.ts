import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .patch("/api/purchase-request/:id/submit", ({ params, query, body, headers }) => (null))
;

export default register;