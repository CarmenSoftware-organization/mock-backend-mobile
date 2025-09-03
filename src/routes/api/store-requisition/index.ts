import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/store-requisition", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/store-requisition", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  // Merged routes from /api/store-requisition/:id
  .get("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/store-requisition/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });