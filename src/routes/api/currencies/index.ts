import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/currencies", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/currencies/:id
  .get("/api/currencies/:id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/currencies/iso
  .get("/api/currencies/iso", ({ params, query, body, headers }) => (null))
;

export default register;