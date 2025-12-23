import type { Elysia } from "elysia";
import { resBadRequest, resInternalServerError, resNotFound, resSuccessWithData } from "@/libs/res.error";
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
import { uuidv4 } from "zod";
import { good_received_note_create, GoodReceivedNote } from "@/mockdata/tb_good_received_note";
import { generateRunningCode } from "@/mockdata/tb_config_running_code";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )


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
          return resSuccessWithData(res);
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

      const res = getNewGrnFromPO(po_details, po);
      if (!res) {
        return resNotFound("Purchase order details not found");
      }

      return resSuccessWithData(res.data);
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

      const res = getNewGrnFromPO(po_details, po);
      if (!res) {
        return resNotFound("Purchase order details not found");
      }

      return resSuccessWithData(res.data);
    })

    .get("/api/:bu_code/good-received-note/:id",
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


        //

        let data = [];
        for (const detail of goodReceivedNoteDetails) {
          const order_base_qty = tbProduct.getInventoryQtyByOrderQtyByProductId(
            detail.product_id,
            detail.order_qty,
            detail.order_unit_id
          );
          const inventory_unit = tbProduct.getProductById(detail.product_id);

          const detailPrFromPo =
            tbPurchaseOrderDetailTbPurchaseRequestDetail.getPurchaseOrderDetailPurchaseRequestDetailsByPoDetailId(
              detail.id
            );

          let locationsDetail = [];

          for (const detail of detailPrFromPo) {
            const prDetail = tbPurchaseRequestDetail.getPurchaseRequestDetailById(detail.pr_detail_id);
            if (!prDetail) {
              continue;
            }

            const res = {
              location_id: detail.location_id,
              location_name: prDetail.location_name,

              // delivery_point_id: prDetail.delivery_point_id,
              // delivery_point_name: prDetail.delivery_point_name,

              // pr_detail_id: detail.pr_detail_id,

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
            // order_unit_id: po_detail.order_unit_id,
            // order_unit_name: po_detail.order_unit_name,
            // order_unit_conversion_factor: po_detail.order_unit_conversion_factor,
            // foc_qty: 0,
            // foc_unit_id: "",
            // foc_unit_name: "",
            // foc_unit_conversion_factor: 0,
            // foc_base_qty: 0,
            // price: po_detail.price,
            // base_price: po_detail.base_price,
            // tax_profile_id: po_detail.tax_profile_id,
            // tax_profile_name: po_detail.tax_profile_name,
            // discount_rate: po_detail.discount_rate,
            // is_discount_adjustment: po_detail.is_discount_adjustment,
            // tax_rate: po_detail.tax_rate,
            // is_tax_adjustment: po_detail.is_tax_adjustment,
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
        //








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
    )

    .post("/api/:bu_code/good-received-note", async (ctx) => {
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

      // example body
      /*
      {
        "grn_date": "2024-01-15",
        "invoice_no": "INV-2024-001",
        "invoice_date": "2024-01-15",
        "description": "Laptop computers delivery",
        "doc_status": "draft",
        "doc_type": "purchase_order",
        "vendor_id": "550e8400-e29b-41d4-a716-446655440001",
        "currency_id": "cur1a2b3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
        "currency_name": "THB",
        "currency_rate": 1,
        "is_consignment": false,
        "is_cash": false,
        "received_at": "2024-01-15T10:30:00Z",
        "credit_term_id": "550e8400-e29b-41d4-a716-446655440001",
        "is_active": true,
        "note": "Standard delivery received",
        "doc_version": "1.0",
        "details": {
            "add": [
                {
                    "purchase_order_detail_id": "550e8400-e29b-41d4-a716-446655440001",
                    "po_id": "550e8400-e29b-41d4-a716-446655440001",
                    "sequence_no": 1,
                    "location_id": "550e8400-e29b-41d4-a716-446655440001",
                    "product_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                    "received_qty": 10,
                    "received_unit_id": "550e8400-e29b-41d4-a716-446655440001",
                    "received_unit_conversion_factor": 1,
                    "received_base_qty": 10,
                    "foc_qty": 0,
                    "foc_unit_id": "550e8400-e29b-41d4-a716-446655440001",
                    "foc_unit_conversion_factor": 1,
                    "foc_base_qty": 0,
                    "price": 15000,
                    "tax_profile_id": "550e8400-e29b-41d4-a716-446655440001",
                    "tax_profile_name": "VAT 7%",
                    "tax_rate": 7,
                    "tax_amount": 1050,
                    "is_tax_adjustment": false,
                    "total_amount": 16050,
                    "base_price": 15000,
                    "base_qty": 10,
                    "extra_cost": 0,
                    "total_cost": 16050,
                    "discount_rate": 0,
                    "discount_amount": 0,
                    "is_discount_adjustment": false,
                    "expired_date": "2025-12-31",
                    "note": "Standard laptop delivery",
                    "info": {
                        "brand": "Dell",
                        "model": "Latitude 5520",
                        "warranty": "3 years"
                    },
                    "dimension": {
                        "job code": "DIM-001",
                        "event": "Standard",
                        "market segment": "Electronics"
                    }
                }
            ]
        }
      */

      const body = ctx.body as good_received_note_create;

      let last_grn_no = "000";
      // get last grn no
      last_grn_no = tbGoodReceivedNote.getAllGoodReceivedNotes().sort((a, b) => {
        return b.grn_no.localeCompare(a.grn_no);
      })[0]?.grn_no;
      if (!last_grn_no) {
        last_grn_no = "000";
      } else {
        last_grn_no = last_grn_no.substring(last_grn_no.length - 3);
      }

      const last_grn_no_int = parseInt(last_grn_no);
      const new_grn_no = last_grn_no_int + 1;

      const new_grn: GoodReceivedNote = {
        id: uuidv4(),
        grn_no: "GRN-2024-" + new_grn_no.toString().padStart(3, "0"),
        bu_code: bu.code,
        grn_date: body.grn_date,
        invoice_no: body.invoice_no,
        invoice_date: body.invoice_date,
        description: body.description,
        doc_status: "draft",
        doc_type: "purchase_order",
        vendor_id: body.vendor_id,
        currency_id: body.currency_id,
        currency_name: body.currency_name,
        currency_rate: body.currency_rate,
        is_consignment: body.is_consignment,
        is_cash: body.is_cash,
        received_at: body.received_at,
        credit_term_id: body.credit_term_id,
        is_active: body.is_active,
        note: body.note,
        doc_version: body.doc_version,
      };


      const goodReceivedNote = tbGoodReceivedNote.createGoodReceivedNote(new_grn);
      if (!goodReceivedNote) {
        return resNotFound("Good received note not found");
      }

      return {
        data: goodReceivedNote.id,
      };

    }, {
      detail: {
        tags: ["good-received-note"],
        summary: "Create good received note",
        description: "Create good received note",
      },
    })

    .patch("/api/:bu_code/good-received-note/:id", async (ctx) => {
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

      const body = ctx.body as good_received_note_update;

      const updatedGoodReceivedNote = tbGoodReceivedNote.updateGoodReceivedNote(ctx.params.id, body);
      if (!updatedGoodReceivedNote) {
        return resNotFound("Good received note not found");
      }

      return {
        data: updatedGoodReceivedNote.id,
      };
    }, {
      detail: {
        tags: ["good-received-note"],
        summary: "Update good received note",
        description: "Update good received note",
      },
    })

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

        // delivery_point_id: prDetail.delivery_point_id,
        // delivery_point_name: prDetail.delivery_point_name,

        // pr_detail_id: detail.pr_detail_id,

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
      // order_unit_id: po_detail.order_unit_id,
      // order_unit_name: po_detail.order_unit_name,
      // order_unit_conversion_factor: po_detail.order_unit_conversion_factor,
      // foc_qty: 0,
      // foc_unit_id: "",
      // foc_unit_name: "",
      // foc_unit_conversion_factor: 0,
      // foc_base_qty: 0,
      // price: po_detail.price,
      // base_price: po_detail.base_price,
      // tax_profile_id: po_detail.tax_profile_id,
      // tax_profile_name: po_detail.tax_profile_name,
      // discount_rate: po_detail.discount_rate,
      // is_discount_adjustment: po_detail.is_discount_adjustment,
      // tax_rate: po_detail.tax_rate,
      // is_tax_adjustment: po_detail.is_tax_adjustment,
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



