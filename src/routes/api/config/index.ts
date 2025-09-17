import type { Elysia } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";

export default (app: Elysia) =>
  app

  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )
  
  .get("/api/:bu_code/config/currencies", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/:bu_code/config/currencies", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/:bu_code/config/currencies/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/:bu_code/config/delivery-point", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/:bu_code/config/delivery-point", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .patch("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .delete("/api/:bu_code/config/delivery-point/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/:bu_code/config/departments", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .post("/api/:bu_code/config/departments", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .get("/api/:bu_code/config/departments/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  })
  .put("/api/:bu_code/config/departments/:id", async(ctx) => {
    return Response.json(resNotImplemented, { status: 501 });
  });

