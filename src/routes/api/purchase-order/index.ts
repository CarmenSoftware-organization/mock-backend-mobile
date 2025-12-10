import type { Elysia } from "elysia";
import { resBadRequest, resNotFound } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbPurchaseOrder } from "@/mockdata";
import { resSuccessWithPaginate } from "@/libs/response.paginate";
import { PARAM_X_APP_ID, PARAM_AUTHORIZATION } from "@mockdata/const";

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

      const { bu_code, status } = ctx.query;
      if (!bu_code) {
        return resBadRequest("Bu code is required");
      }

      if (status && typeof status !== "string") {
        return resBadRequest("Invalid status");
      }

      const status_array = status ? status.split(",") : ['sent', 'partially_received', 'completed'];

      // check status_array is valid in ["sent", "partial", "completed"]
      for (const status_item of status_array) {
        if (!["sent", "partially_received", "completed"].includes(status_item)) {
          return resBadRequest("Invalid status");
        }
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const purchaseOrders = tbPurchaseOrder.getAllPurchaseOrdersIncludeStatus(status_array).map((po) => {
        const poCopy = {
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

          po_total_amount: po.total_amount,
          po_total_product_count: po.total_product_count,

          po_doc_version: po.doc_version,
          po_created_at: po.created_at,
          po_created_by_id: po.created_by_id,
          po_updated_at: po.updated_at,
          po_updated_by_id: po.updated_by_id,
          po_deleted_at: po.deleted_at,
          po_deleted_by_id: po.deleted_by_id,
        };

        console.log("PO TOTAL AMOUNT:", po.total_amount);
        console.log("PO TOTAL PRODUCT COUNT:", po.total_product_count);
        
        return poCopy;
      });

      const res = resSuccessWithPaginate(purchaseOrders, purchaseOrders.length, 1, 10, 1);
      return res;
    }, {
      detail: {
        tags: ["purchase-orders"],
        summary: "Get all purchase orders",
        description: "ดึงรายการใบสั่งซื้อทั้งหมดที่ได้รับอนุมัติแล้ว",
        parameters: [
          PARAM_X_APP_ID,
          PARAM_AUTHORIZATION,
          {
            name: "bu_code",
            in: "query",
            required: true,
            description: "รหัสหน่วยธุรกิจ",
            schema: {
              type: "string",
              example: "BU_001"
            }
          },
          {
            name: "page",
            in: "query",
            required: false,
            description: "หน้าที่",
            schema: {
              type: "integer",
              minimum: 1,
              example: 1
            }
          },
          {
            name: "limit",
            in: "query",
            required: false,
            description: "จำนวนรายการต่อหน้า",
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              example: 10
            }
          },
          {
            name: "status",
            in: "query",
            required: false,
            description: "กรองตามสถานะ",
            schema: {
              type: "string",
              enum: ["draft", "pending", "approved", "rejected", "completed", "cancelled"],
              example: "approved"
            }
          },
          {
            name: "vendor_id",
            in: "query",
            required: false,
            description: "กรองตามผู้ขาย",
            schema: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        responses: {
          200: {
            description: "รายการใบสั่งซื้อพร้อมข้อมูล pagination",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      description: "รายการใบสั่งซื้อ",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            format: "uuid",
                            description: "รหัสใบสั่งซื้อ",
                            example: "550e8400-e29b-41d4-a716-446655440001"
                          },
                          po_no: {
                            type: "string",
                            description: "เลขที่ใบสั่งซื้อ",
                            example: "PO2024-001"
                          },
                          po_date: {
                            type: "string",
                            format: "date",
                            description: "วันที่ใบสั่งซื้อ",
                            example: "2024-01-20"
                          },
                          po_delivery_date: {
                            type: "string",
                            format: "date",
                            description: "วันที่กำหนดส่งของ",
                            nullable: true,
                            example: "2024-01-25"
                          },
                          po_status: {
                            type: "string",
                            enum: ["draft", "pending", "approved", "rejected", "completed", "cancelled"],
                            description: "สถานะใบสั่งซื้อ",
                            example: "approved"
                          },
                          po_vendor_name: {
                            type: "string",
                            description: "ชื่อผู้ขาย",
                            example: "บริษัท ผลผลิตอาหาร จำกัด"
                          },
                          po_currency_code: {
                            type: "string",
                            description: "รหัสสกุลเงิน",
                            example: "THB"
                          },
                          po_exchange_rate: {
                            type: "number",
                            description: "อัตราแลกเปลี่ยน",
                            example: 35.5
                          },
                          po_buyer_name: {
                            type: "string",
                            description: "ชื่อผู้ซื้อ",
                            example: "นายสมพง ใจกว้าง"
                          },
                          po_credit_term_name: {
                            type: "string",
                            description: "ชื่อเงื่อนไขการชำระเงิน",
                            example: "เงินสด 30 วัน"
                          },
                          po_total_amount: {
                            type: "number",
                            description: "ยอดเงินรวม",
                            example: 156750.50
                          }
                        }
                      }
                    },
                    pagination: {
                      type: "object",
                      properties: {
                        total: {
                          type: "integer",
                          description: "จำนวนรายการทั้งหมด",
                          example: 150
                        },
                        page: {
                          type: "integer",
                          description: "หน้าปัจจุบัน",
                          example: 1
                        },
                        limit: {
                          type: "integer",
                          description: "จำนวนรายการต่อหน้า",
                          example: 10
                        },
                        total_pages: {
                          type: "integer",
                          description: "จำนวนหน้าทั้งหมด",
                          example: 15
                        }
                      }
                    }
                  }
                },
                example: {
                  data: [
                    {
                      id: "550e8400-e29b-41d4-a716-446655440001",
                      po_no: "PO2024-001",
                      po_date: "2024-01-20",
                      po_delivery_date: "2024-01-25",
                      po_status: "approved",
                      po_vendor_name: "บริษัท ผลผลิตอาหาร จำกัด",
                      po_currency_code: "THB",
                      po_exchange_rate: 1.0,
                      po_buyer_name: "นายสมพง ใจกว้าง",
                      po_credit_term_name: "เงินสด 30 วัน",
                      po_total_amount: 156750.50
                    }
                  ],
                  pagination: {
                    total: 150,
                    page: 1,
                    limit: 10,
                    total_pages: 15
                  }
                }
              }
            }
          },
          400: {
            description: "ข้อมูลไม่ถูกต้อง",
            content: {
              "application/json": {
                examples: {
                  missingAppId: {
                    summary: "ขาด header x-app-id",
                    value: {
                      message: "Invalid header 'x-app-id'"
                    }
                  },
                  missingBuCode: {
                    summary: "ขาดรหัสหน่วยธุรกิจ",
                    value: {
                      message: "Bu code is required"
                    }
                  }
                }
              }
            }
          },
          401: {
            description: "ไม่ได้รับอนุญาต",
            content: {
              "application/json": {
                example: {
                  message: "Unauthorized"
                }
              }
            }
          },
          404: {
            description: "ไม่พบหน่วยธุรกิจ",
            content: {
              "application/json": {
                example: {
                  message: "Business unit not found"
                }
              }
            }
          }
        }
      }
    })

