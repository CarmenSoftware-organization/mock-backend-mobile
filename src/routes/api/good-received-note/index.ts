import type { Elysia } from "elysia";

export default (app: Elysia) =>
  app
  .get("/api/good-received-note", ({ params, query, body, headers }) => (null))
  .post("/api/good-received-note", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/good-received-note/:id
  .get("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
  .patch("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
  .delete("/api/good-received-note/:id", ({ params, query, body, headers }) => (null))
  // Merged routes from /api/good-received-note/scan-po/:qr_code
  .get("/api/good-received-note/scan-po/:qr_code", ({ params, query, body, headers }) => (null))
;