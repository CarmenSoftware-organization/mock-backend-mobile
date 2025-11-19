import type { Elysia } from "elysia";
import { resBadRequest, resInternalServerError, resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { getRandomInt } from "@/libs/utils";
import {
  tbGoodReceivedNote,
  tbGoodReceivedNoteDetail,
  tbProduct,
  tbPurchaseOrder,
  tbPurchaseOrderDetail,
  tbPurchaseOrderDetailTbPurchaseRequestDetail,
  tbPurchaseRequestDetail,
} from "@/mockdata";
import { resSuccessWithPaginate } from "@/libs/response.paginate";

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

        const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
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

    .get(
      "/api/good-received-note/draft",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          const { bu_code } = ctx.query;

          if (!bu_code) {
            return resBadRequest("Business unit code is required");
          }

          const bu = businessUnits.find((bu) => bu.code === bu_code);
          if (!bu) {
            return resNotFound("Business unit not found");
          }

          const draftGoodReceivedNotes = tbGoodReceivedNote.getDraftGoodReceivedNotes();

          const res = resSuccessWithPaginate(draftGoodReceivedNotes, draftGoodReceivedNotes.length, 1, 10, 1);
          return res;
        } catch (error) {
          return resInternalServerError(error instanceof Error ? error.message : "Unknown error");
        }
      },
      {
        detail: {
          tags: ["good-received-note"],
        },
      }
    )

    .get("/api/good-received-note/scan-po/:qr_code", async (ctx) => {
      const { qr_code } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const extracted_qr_code = qr_code.split("|");
      if (extracted_qr_code.length !== 2) {
        return resBadRequest("Invalid QR code");
      }

      const bu_code = extracted_qr_code[0];
      const po_no = extracted_qr_code[1];

      //response list of po by qr_code
      const bu = businessUnits.find((bu) => bu.code === bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const po = tbPurchaseOrder.getPurchaseOrderByPoNo(po_no);
      if (!po) {
        return resNotFound("Purchase order not found");
      }

      const po_details = tbPurchaseOrderDetail.getPurchaseOrderDetailsByOrder(po.id);
      if (!po_details) {
        return resNotFound("Purchase order details not found");
      }

      return getNewGrnFromPO(po_details, po);
    })

    .get("/api/:bu_code/good-received-note/manual-po/:po_no", async (ctx) => {
      const { bu_code, po_no } = ctx.params;

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      //response list of po by qr_code
      const bu = businessUnits.find((bu) => bu.code === bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const po = tbPurchaseOrder.getPurchaseOrderByPoNo(po_no);
      if (!po) {
        return resNotFound("Purchase order not found");
      }

      const po_details = tbPurchaseOrderDetail.getPurchaseOrderDetailsByOrder(po.id);
      if (!po_details) {
        return resNotFound("Purchase order details not found");
      }

      return getNewGrnFromPO(po_details, po);
    })

    .get(
      "/api/:bu_code/good-received-note/:id",
      async (ctx) => {
        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits.find((bu) => bu.code === ctx.params.bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const goodReceivedNote = tbGoodReceivedNote.getGoodReceivedNoteById(ctx.params.id);
        if (!goodReceivedNote) {
          return resNotFound("Good received note not found");
        }

        const goodReceivedNoteDetails = tbGoodReceivedNoteDetail.getGoodReceivedNoteDetailsByGoodReceivedNoteId(
          ctx.params.id
        );
        if (!goodReceivedNoteDetails) {
          return resNotFound("Good received note details not found");
        }

        return {
          data: goodReceivedNote,
          details: goodReceivedNoteDetails,
        };
      },
      {
        detail: {
          tags: ["good-received-note"],
          summary: "Get good received note by id",
          description: "Get good received note by id",
        },
      }
    );
function getNewGrnFromPO(po_details: tbPurchaseOrderDetail.PurchaseOrderDetail[], po: tbPurchaseOrder.PurchaseOrder) {
  let data = [];
  for (const po_detail of po_details) {
    const order_base_qty = tbProduct.getInventoryQtyByOrderQtyByProductId(
      po_detail.product_id,
      po_detail.order_qty,
      po_detail.order_unit_id
    );
    const inventory_unit = tbProduct.getProductById(po_detail.product_id);

    const detailPrFromPo =
      tbPurchaseOrderDetailTbPurchaseRequestDetail.getPurchaseOrderDetailPurchaseRequestDetailsByPoDetailId(
        po_detail.id
      );

    let locationsDetail = [];

    for (const detail of detailPrFromPo) {
      const prDetail = tbPurchaseRequestDetail.getPurchaseRequestDetailById(detail.pr_detail_id);
      if (!prDetail) {
        continue;
      }

      const res = {
        location_id: prDetail.location_id,
        location_name: prDetail.location_name,

        delivery_point_id: prDetail.delivery_point_id,
        delivery_point_name: prDetail.delivery_point_name,

        pr_detail_id: detail.pr_detail_id,

        order_unit_id: detail.pr_detail_order_unit_id,
        order_unit_name: detail.pr_detail_order_unit_name,
        order_unit_conversion_factor: detail.pr_detail_unit_conversion_factor,

        order_qty: detail.pr_detail_qty,
        order_base_qty: detail.pr_detail_base_qty,

        received_remain_base_qty: detail.pr_detail_remaining_qty,

        info: prDetail.info,
        dimension: prDetail.dimension,
      };

      locationsDetail.push(res);
    }

    const product = tbProduct.getProductById(po_detail.product_id);

    const body_detail = {
      po_id: po.id,
      po_no: po.po_no,
      purchase_order_detail_id: po_detail.id,
      sequence_no: po_detail.sequence_no,
      // currency_id: po.currency_id,
      // currency_name: po.currency_name,
      // currency_code: po.currency_code,
      // exchange_rate: po.exchange_rate,
      product_id: po_detail.product_id,
      product_name: po_detail.product_name,
      product_local_name: po_detail.product_local_name,
      product_description: product?.description,
      sku: po_detail.sku,
      order_unit_id: po_detail.order_unit_id,
      order_unit_name: po_detail.order_unit_name,
      order_unit_conversion_factor: po_detail.order_unit_conversion_factor,
      foc_qty: 0,
      foc_unit_id: "",
      foc_unit_name: "",
      foc_unit_conversion_factor: 0,
      foc_base_qty: 0,
      price: po_detail.price,
      base_price: po_detail.base_price,
      tax_profile_id: po_detail.tax_profile_id,
      tax_profile_name: po_detail.tax_profile_name,
      discount_rate: po_detail.discount_rate,
      is_discount_adjustment: po_detail.is_discount_adjustment,
      tax_rate: po_detail.tax_rate,
      is_tax_adjustment: po_detail.is_tax_adjustment,
      // base_qty: po_detail.base_qty,
      locations: locationsDetail,
    };

    data.push(body_detail);
  }

  const response = {
    data: {
      vendor_id: po.vendor_id,
      vendor_code: po.vendor_code,
      vendor_name: po.vendor_name,

      currency_id: po.currency_id,
      currency_code: po.currency_code,
      currency_name: po.currency_name,
      exchange_rate: po.exchange_rate,

      details: data.sort((a, b) => a.sequence_no - b.sequence_no),
    },
  };

  return response;
}
