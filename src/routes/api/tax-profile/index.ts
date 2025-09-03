import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/tax-profile", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/tax-profile/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });