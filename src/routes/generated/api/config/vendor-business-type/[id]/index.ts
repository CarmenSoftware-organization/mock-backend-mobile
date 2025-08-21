import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/config/vendor-business-type/:id", ({ params, query, body, headers }) => (null))
;

export default register;