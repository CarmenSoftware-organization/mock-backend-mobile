import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbGoodReceivedNote, tbGoodReceivedNoteComment, tbProduct, tbUnitConversion } from "@/mockdata";
import { PARAM_X_APP_ID } from "@mockdata/const";
import { getDateEndOnStatusIsOpen, getDateStartOnStatusIsOpen, getOpenPeriods } from "@/mockdata/tb_period";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/api/:bu_code/good-received-note/:id/comment",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const grn = tbGoodReceivedNote.getGoodReceivedNoteById(id);
        if (!grn) {
          return resNotFound("Good received note not found");
        }

        const comments = tbGoodReceivedNoteComment.getGoodReceivedNoteCommentsByGrnId(id);

        return { data: comments };
      },
      {
        detail: "Get comments for a specific good received note",
        params: t.Object({
          bu_code: t.String(),
          id: t.String(),
        }),
      }
    )

    .post(
      "/api/:bu_code/good-received-note/:id/comment",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const grn = tbGoodReceivedNote.getGoodReceivedNoteById(id);
        if (!grn) {
          return resNotFound("Good received note not found");
        }
      },
      {}
    );
