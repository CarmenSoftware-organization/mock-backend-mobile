import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";

export default (app: Elysia) =>
  app
  .get("/api/unit/ingredient/product/:productId", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/unit/order/product/:productId", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  });
