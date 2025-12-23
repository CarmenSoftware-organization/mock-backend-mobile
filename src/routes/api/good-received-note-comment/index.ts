import { inventoryTransactionClosingBalances } from './../../../mockdata/tb_inventory_transaction_closing_balance';
import type { Elysia } from "elysia";
import { resNotFound, resSuccessWithData } from "@/libs/res.error";
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

        return resSuccessWithData(comments);
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

        const { error: errorAccessToken, currentUser } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
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

        const { message, attachments } = ctx.body;

        const content = { message: message.trim(), attachments: attachments || null };

        const newComment = tbGoodReceivedNoteComment.createGoodReceivedNoteComment({
          good_received_note_id: id,
          ...content,
          note: message.trim(),
          created_by_id: currentUser.id,
          type: "user",
          user_id: currentUser.id,
          user_name: "",
          info: null,
          updated_by_id: currentUser.id,
          updated_at: new Date(),
          deleted_at: null,
          deleted_by_id: null,
        });

        return resSuccessWithData({ id: newComment.id });
      },
      {
        detail: "Add a comment to a specific good received note",
        params: t.Object({
          bu_code: t.String(),
          id: t.String(),
        }),
        body: t.Object({
          message: t.String(),
          attachments: t.Optional(t.Any()),
        }),
      }
    );
