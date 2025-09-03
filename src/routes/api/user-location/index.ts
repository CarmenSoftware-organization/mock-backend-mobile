import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/user-location", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });