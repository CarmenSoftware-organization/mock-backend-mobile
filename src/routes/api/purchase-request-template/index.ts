import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/purchase-request-template", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/purchase-request-template", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }); 