import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/extra-cost-type/:id", ({ params, query, body, headers }) => (null))
;

export default register;