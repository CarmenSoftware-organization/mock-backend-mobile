import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/workflow/type/:type", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });