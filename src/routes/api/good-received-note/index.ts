import type { Elysia } from "elysia";
import {
  resBadRequest,
  resInternalServerError,
  resNotFound,
  resNotImplemented,
} from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { getRandomInt } from "@/libs/utils";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )
    .get("/api/good-received-note", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get(
      "/api/good-received-note/pending",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          const { bu_code } = ctx.query;

          if (!bu_code) {
            return resBadRequest("Business unit code is required");
          }

          const bu = bussiness_Units.find((bu) => bu.code === bu_code);
          if (!bu) {
            return resNotFound("Business unit not found");
          }

          // mock data
          const res = { pending: getRandomInt(0, 20) };
          return {
            data: res,
          };
        } catch (error) {
          return resInternalServerError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
      {
        detail: {
          tags: ["good-received-note"],
          summary: "Get my pending good received notes",
          description: "Get my pending good received notes",
        },
      }
    )
    .post("/api/good-received-note", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/good-received-note/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .patch(
      "/api/good-received-note/:id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .delete(
      "/api/good-received-note/:id",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )
    .get(
      "/api/good-received-note/scan-po/:qr_code",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    );
