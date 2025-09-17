import type { Elysia } from "elysia";
import { resBadRequest, resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseOrder } from "@/mockdata";
import { resSuccessWithPaginate } from "@/libs/response.paginate";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get("/api/purchase-order", async (ctx) => {
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

      const { bu_code } = ctx.query;
      if (!bu_code) {
        return resBadRequest("Bu code is required");
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const purchaseOrders = tbPurchaseOrder.getAllPurchaseOrders().map((po) => {
        return {
          id: po.id,
          po_no: po.po_no,
          po_date: po.approval_date,
          po_delivery_date: po.delivery_date,
          po_status: po.po_status,
          po_description: po.description,
          po_vendor_id: po.vendor_id,
          po_vendor_name: po.vendor_name,
          po_currency_id: po.currency_id,
          po_currency_name: po.currency_name,
          po_currency_code: po.currency_code,
          po_exchange_rate: po.exchange_rate,
          po_approval_date: po.approval_date,
          po_email: po.email,
          po_buyer_id: po.buyer_id,
          po_buyer_name: po.buyer_name,
          po_credit_term_id: po.credit_term_id,
          po_credit_term_name: po.credit_term_name,
          po_credit_term_value: po.credit_term_value,
          po_remarks: po.remarks,
          po_note: po.note,
          po_doc_version: po.doc_version,
          po_created_at: po.created_at,
          po_created_by_id: po.created_by_id,
          po_updated_at: po.updated_at,
          po_updated_by_id: po.updated_by_id,
          po_deleted_at: po.deleted_at,
          po_deleted_by_id: po.deleted_by_id,
        };
      });

      const res = resSuccessWithPaginate(purchaseOrders, purchaseOrders.length, 1, 10, 1);
      return res;
    })
    .post("/api/:bu_code/purchase-order", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/:bu_code/purchase-order/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .put("/api/:bu_code/purchase-order/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .delete("/api/:bu_code/purchase-order/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    });
