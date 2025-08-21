import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/good-received-note/scan-po/:qr_code", ({ params, query, body, headers }) => (null))
;

export default register;