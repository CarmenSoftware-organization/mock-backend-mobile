import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  // Merged routes from /api-system/user/cluster
  .get("/api-system/user/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api-system/user/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  // Merged routes from /api-system/user/cluster/:id
  .get("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  // Merged routes from /api-system/user/business-unit
  .get("/api-system/user/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api-system/user/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  // Merged routes from /api-system/user/business-unit/:id
  .get("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
