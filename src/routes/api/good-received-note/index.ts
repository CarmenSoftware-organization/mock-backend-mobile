import type { Elysia } from "elysia";
import { resBadRequest, resInternalServerError, resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { getRandomInt } from "@/libs/utils";
import { tbProduct, tbPurchaseOrder, tbPurchaseOrderDetail, tbPurchaseOrderDetailTbPurchaseRequestDetail, tbPurchaseRequestDetail } from "@/mockdata";

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

        const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
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
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
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
    .patch("/api/good-received-note/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .delete("/api/good-received-note/:id", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/good-received-note/scan-po/:qr_code", async (ctx) => {
      const { qr_code } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, bussiness_Units } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const extracted_qr_code = qr_code.split("|");
      if (extracted_qr_code.length !== 2) {
        return resBadRequest("Invalid QR code");
      }

      const bu_code = extracted_qr_code[0];
      const po_id = extracted_qr_code[1];

      //response list of po by qr_code
      const bu = bussiness_Units.find((bu) => bu.code === bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const po = tbPurchaseOrder.getPurchaseOrderByPoId(po_id);
      if (!po) {
        return resNotFound("Purchase order not found");
      }

      const po_details = tbPurchaseOrderDetail.getPurchaseOrderDetailsByOrder(po.id);
      if (!po_details) {
        return resNotFound("Purchase order details not found");
      }

      let data = [];
      for (const po_detail of po_details) {

        const order_base_qty = tbProduct.getInventoryQtyByOrderQtyByProductId(po_detail.product_id, po_detail.order_qty, po_detail.order_unit_id);
        const inventory_unit = tbProduct.getProductById(po_detail.product_id);

        const detailPrFromPo = tbPurchaseOrderDetailTbPurchaseRequestDetail.getPurchaseOrderDetailPurchaseRequestDetailsByPoDetailId(po_detail.id);

        let locationsDetail = [];

        for (const detail of detailPrFromPo) {
          const prDetail = tbPurchaseRequestDetail.getPurchaseRequestDetailById(detail.pr_detail_id);
          if (!prDetail) {
            continue;
          }

          const res = {
            location_id: prDetail.location_id,
            location_name: prDetail.location_name,

            // order_unit_id: detail.pr_detail_order_unit_id,
            // order_unit_name: detail.pr_detail_order_unit_name,
            // order_unit_conversion_factor: detail.pr_detail_unit_conversion_factor,

            order_qty: detail.pr_detail_qty,
            order_base_qty: detail.pr_detail_base_qty,

            received_remain_base_qty: detail.pr_detail_remaining_qty,
          }

          locationsDetail.push(res);
        }

       const body_detail = {
        po_id: po.id,
        po_no: po.po_no,
        purchase_order_detail_id: po_detail.id,
        sequence_no: po_detail.sequence_no,
        product_id: po_detail.product_id,
        product_name: po_detail.product_name,
        product_local_name: po_detail.product_local_name,
        sku: po_detail.sku,
        order_qty: po_detail.order_qty,
        order_unit_id: po_detail.order_unit_id,
        order_unit_name: po_detail.order_unit_name,
        order_unit_conversion_factor: po_detail.order_unit_conversion_factor,
        order_base_qty: order_base_qty,
        received_qty: po_detail.received_qty,
        received_unit_id: inventory_unit?.id,
        received_unit_name: inventory_unit?.name,
        received_unit_conversion_factor: 1,
        received_base_qty: po_detail.received_qty * 1,
        foc_qty: 0,
        foc_unit_id: "",
        foc_unit_name: "",
        foc_unit_conversion_factor: 0,
        foc_base_qty: 0,
        price: po_detail.price,
        tax_profile_id: po_detail.tax_profile_id,
        tax_profile_name: po_detail.tax_profile_name,
        tax_rate: po_detail.tax_rate,
        tax_amount: po_detail.tax_amount,
        is_tax_adjustment: po_detail.is_tax_adjustment,
        base_price: po_detail.base_price,
        base_qty: po_detail.base_qty,
        locations: locationsDetail,
       }

       data.push(body_detail);
      }

      return {
        data: data,
      };
    });
