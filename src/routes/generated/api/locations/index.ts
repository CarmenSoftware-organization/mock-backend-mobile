import type { Elysia } from "elysia";

const register = (app: Elysia) =>
  app
  .get("/api/locations", ({ params, query, body, headers }) => ([
  {
    "id": "string",
    "name": "string",
    "address": "string",
    "is_active": false,
    "created_at": "2025-08-21T02:25:12.740Z",
    "updated_at": "2025-08-21T02:25:12.740Z"
  }
]))
;

export default register;