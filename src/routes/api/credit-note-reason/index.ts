import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/credit-note-reason", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });