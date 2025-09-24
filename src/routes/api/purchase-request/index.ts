import {
  resBadRequest,
  resError,
  resErrorWithData,
  resNotFound,
  resNotImplemented,
  resSuccess,
} from "@/libs/res.error";
import type { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import {
  tbBusinessUnit,
  tbPurchaseRequest,
  tbPurchaseRequestDetail,
} from "@/mockdata";
import { t } from "elysia";
import {
  CalculatePurchaseRequestDetail,
  PurchaseRequestApproval,
} from "@/mockdata/tb_purchase_request";
import { getCalculatePriceInfo } from "@/libs/calculate.priceinfo";
import { PARAM_X_APP_ID, PARAM_AUTHORIZATION } from "@mockdata/const";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    // create model from PurchaseRequestApproval
    .model({
      PurchaseRequestApproval: t.Object({
        state_role: t.Enum({
          approve: "approve",
          create: "create",
          purchase: "purchase",
          view_only: "view_only",
        }),
      }),
      PurchaseRequestApprovalItem: t.Object({
        id: t.String({
          description: "Purchase request detail id",
          required: true,
        }),
        state_status: t.Enum(
          {
            approve: "approve",
            reject: "reject",
            review: "review",
          },
          {
            required: true,
          }
        ),
        state_message: t.String({
          description: "State message",
          required: false,
        }),
        description: t.String({
          description: "Description",
          required: false,
        }),
        approved_qty: t.Number({
          description: "Approved quantity",
          required: false,
        }),
        approved_unit_id: t.String({
          required: false,
          description: "Approved unit id",
        }),
        approved_unit_conversion_factor: t.Number({
          required: false,
          description: "Approved unit conversion factor",
        }),
        approved_base_qty: t.Number({
          required: false,
          description: "Approved base quantity",
        }),
      }),
    })

    .post(
      "/api/:bu_code/purchase-request",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      },
      {
        detail: {
          tags: ["purchase-requests"],
          summary: "Create purchase request",
          description: "สร้างใบขอซื้อใหม่ (Not implemented)",
          parameters: [
            PARAM_X_APP_ID,
            PARAM_AUTHORIZATION,
            {
              name: "bu_code",
              in: "path",
              required: true,
              description: "รหัสหน่วยธุรกิจ",
              schema: {
                type: "string",
                example: "BU_001"
              }
            }
          ],
          requestBody: {
            description: "ข้อมูลใบขอซื้อที่ต้องการสร้าง",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    document_no: {
                      type: "string",
                      description: "เลขที่เอกสารใบขอซื้อ",
                      example: "PR2024-001"
                    },
                    request_date: {
                      type: "string",
                      format: "date",
                      description: "วันที่ขอซื้อ",
                      example: "2024-01-15"
                    },
                    request_by: {
                      type: "string",
                      description: "ผู้ขอซื้อ (User ID)",
                      example: "550e8400-e29b-41d4-a716-446655440001"
                    },
                    department_id: {
                      type: "string",
                      description: "รหัสแผนก",
                      example: "550e8400-e29b-41d4-a716-446655440002"
                    },
                    location_id: {
                      type: "string",
                      description: "รหัสสถานที่",
                      example: "550e8400-e29b-41d4-a716-446655440003"
                    },
                    priority: {
                      type: "string",
                      enum: ["low", "medium", "high", "urgent"],
                      description: "ระดับความสำคัญ",
                      example: "medium"
                    },
                    remark: {
                      type: "string",
                      description: "หมายเหตุ",
                      example: "ขอซื้อวัตถุดิบสำหรับการผลิต"
                    },
                    items: {
                      type: "array",
                      description: "รายการสินค้าที่ขอซื้อ",
                      items: {
                        type: "object",
                        properties: {
                          product_id: {
                            type: "string",
                            description: "รหัสสินค้า",
                            example: "550e8400-e29b-41d4-a716-446655440004"
                          },
                          qty: {
                            type: "number",
                            description: "จำนวนที่ขอ",
                            example: 10.5
                          },
                          unit_id: {
                            type: "string",
                            description: "รหัสหน่วยนับ",
                            example: "550e8400-e29b-41d4-a716-446655440005"
                          },
                          remark: {
                            type: "string",
                            description: "หมายเหตุรายการ",
                            example: "ขอเพิ่มเติม 20%"
                          }
                        },
                        required: ["product_id", "qty", "unit_id"]
                      }
                    }
                  },
                  required: ["document_no", "request_date", "request_by", "department_id", "location_id", "items"]
                }
              }
            }
          },
          responses: {
            201: {
              description: "สร้างใบขอซื้อสำเร็จ",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        description: "รหัสใบขอซื้อที่สร้าง",
                        example: "550e8400-e29b-41d4-a716-446655440006"
                      },
                      document_no: {
                        type: "string",
                        example: "PR2024-001"
                      },
                      status: {
                        type: "string",
                        example: "draft"
                      }
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
                    invalidData: {
                      summary: "ข้อมูลไม่ครบถ้วน",
                      value: {
                        message: "Invalid body"
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
              description: "ไม่พบข้อมูล",
              content: {
                "application/json": {
                  example: {
                    message: "Business unit not found"
                  }
                }
              }
            },
            501: {
              description: "ยังไม่ได้พัฒนาฟีเจอร์นี้",
              content: {
                "application/json": {
                  example: {
                    message: "Not implemented"
                  }
                }
              }
            }
          }
        }
      }
    )

    .get("/api/:bu_code/purchase-request/:id", async (ctx) => {
      const { bu_code, id } = ctx.params;

      // check x-app-id
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
        ctx.headers,
        ctx.jwt
      );
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const pr = tbPurchaseRequest.getPurchaseRequestById(id);
      if (!pr) {
        return resNotFound("Purchase request not found");
      }

      let purchaseRequestDetail = [];

      const prdByPrId =
        tbPurchaseRequestDetail.getPurchaseRequestDetailsByPurchaseRequestId(
          pr.id
        );

      for (const prd of prdByPrId) {
        purchaseRequestDetail.push(prd);
      }

      let prWithDetail = {
        ...pr,
        purchase_request_detail: purchaseRequestDetail,
      };

      const res = {
        bu_code: bu_code,
        bu_name: bu.name,
        data: prWithDetail,
      };

      return res;
    }, {
      detail: {
        tags: ["purchase-requests"],
        summary: "Get purchase request by ID",
        description: "ดึงข้อมูลใบขอซื้อตาม ID พร้อมรายละเอียดสินค้า",
        parameters: [
          PARAM_X_APP_ID,
          PARAM_AUTHORIZATION,
          {
            name: "bu_code",
            in: "path",
            required: true,
            description: "รหัสหน่วยธุรกิจ",
            schema: {
              type: "string",
              example: "BU_001"
            }
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "รหัสใบขอซื้อ",
            schema: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        responses: {
          200: {
            description: "ดึงข้อมูลใบขอซื้อสำเร็จ",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    bu_code: {
                      type: "string",
                      description: "รหัสหน่วยธุรกิจ",
                      example: "BU_001"
                    },
                    bu_name: {
                      type: "string",
                      description: "ชื่อหน่วยธุรกิจ",
                      example: "หน่วยงานจัดซื้อ"
                    },
                    data: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                          example: "550e8400-e29b-41d4-a716-446655440001"
                        },
                        document_no: {
                          type: "string",
                          description: "เลขที่เอกสาร",
                          example: "PR2024-001"
                        },
                        request_date: {
                          type: "string",
                          format: "date",
                          description: "วันที่ขอซื้อ",
                          example: "2024-01-15"
                        },
                        status: {
                          type: "string",
                          enum: ["draft", "pending", "approved", "rejected", "completed"],
                          description: "สถานะใบขอซื้อ",
                          example: "pending"
                        },
                        priority: {
                          type: "string",
                          enum: ["low", "medium", "high", "urgent"],
                          description: "ระดับความสำคัญ",
                          example: "medium"
                        },
                        request_by: {
                          type: "string",
                          description: "ผู้ขอซื้อ",
                          example: "550e8400-e29b-41d4-a716-446655440002"
                        },
                        request_by_name: {
                          type: "string",
                          description: "ชื่อผู้ขอซื้อ",
                          example: "สมชาย ใจดี"
                        },
                        department_name: {
                          type: "string",
                          description: "ชื่อแผนก",
                          example: "แผนกจัดซื้อ"
                        },
                        location_name: {
                          type: "string",
                          description: "ชื่อสถานที่",
                          example: "คลังสินค้าหลัก"
                        },
                        total_amount: {
                          type: "number",
                          description: "ยอดรวม",
                          example: 25750.50
                        },
                        remark: {
                          type: "string",
                          description: "หมายเหตุ",
                          example: "ขอซื้อวัตถุดิบสำหรับการผลิตเดือนมกราคม"
                        },
                        purchase_request_detail: {
                          type: "array",
                          description: "รายละเอียดสินค้าที่ขอซื้อ",
                          items: {
                            type: "object",
                            properties: {
                              id: {
                                type: "string",
                                format: "uuid",
                                example: "550e8400-e29b-41d4-a716-446655440003"
                              },
                              product_id: {
                                type: "string",
                                format: "uuid",
                                example: "550e8400-e29b-41d4-a716-446655440004"
                              },
                              product_name: {
                                type: "string",
                                description: "ชื่อสินค้า",
                                example: "เนื้อสันใน A"
                              },
                              product_sku: {
                                type: "string",
                                description: "รหัสสินค้า",
                                example: "BEEF_TENDERLOIN_A"
                              },
                              qty: {
                                type: "number",
                                description: "จำนวนที่ขอ",
                                example: 10.5
                              },
                              unit_name: {
                                type: "string",
                                description: "หน่วยนับ",
                                example: "กิโลกรัม"
                              },
                              unit_price: {
                                type: "number",
                                description: "ราคาต่อหน่วย",
                                example: 850.00
                              },
                              total_price: {
                                type: "number",
                                description: "ราคารวม",
                                example: 8925.00
                              },
                              remark: {
                                type: "string",
                                description: "หมายเหตุรายการ",
                                example: "สำหรับเมนูพิเศษ"
                              },
                              status: {
                                type: "string",
                                enum: ["pending", "approved", "rejected", "review"],
                                description: "สถานะรายการ",
                                example: "pending"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                example: {
                  bu_code: "BU_001",
                  bu_name: "หน่วยงานจัดซื้อ",
                  data: {
                    id: "550e8400-e29b-41d4-a716-446655440001",
                    document_no: "PR2024-001",
                    request_date: "2024-01-15",
                    status: "pending",
                    priority: "medium",
                    request_by: "550e8400-e29b-41d4-a716-446655440002",
                    request_by_name: "สมชาย ใจดี",
                    department_name: "แผนกจัดซื้อ",
                    location_name: "คลังสินค้าหลัก",
                    total_amount: 25750.50,
                    remark: "ขอซื้อวัตถุดิบสำหรับการผลิตเดือนมกราคม",
                    purchase_request_detail: [
                      {
                        id: "550e8400-e29b-41d4-a716-446655440003",
                        product_id: "550e8400-e29b-41d4-a716-446655440004",
                        product_name: "เนื้อสันใน A",
                        product_sku: "BEEF_TENDERLOIN_A",
                        qty: 10.5,
                        unit_name: "กิโลกรัม",
                        unit_price: 850.00,
                        total_price: 8925.00,
                        remark: "สำหรับเมนูพิเศษ",
                        status: "pending"
                      }
                    ]
                  }
                }
              }
            }
          },
          400: {
            description: "ข้อมูลไม่ถูกต้อง",
            content: {
              "application/json": {
                example: {
                  message: "Invalid header 'x-app-id'"
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
            description: "ไม่พบข้อมูล",
            content: {
              "application/json": {
                examples: {
                  businessUnitNotFound: {
                    summary: "ไม่พบหน่วยธุรกิจ",
                    value: {
                      message: "Business unit not found"
                    }
                  },
                  purchaseRequestNotFound: {
                    summary: "ไม่พบใบขอซื้อ",
                    value: {
                      message: "Purchase request not found"
                    }
                  }
                }
              }
            }
          }
        }
      }
    })

    .delete("/api/:bu_code/purchase-request/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["purchase-requests"],
        summary: "Delete purchase request",
        description: "ลบใบขอซื้อ (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          PARAM_AUTHORIZATION,
          {
            name: "bu_code",
            in: "path",
            required: true,
            description: "รหัสหน่วยธุรกิจ",
            schema: {
              type: "string",
              example: "BU_001"
            }
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "รหัสใบขอซื้อ",
            schema: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        responses: {
          204: {
            description: "ลบใบขอซื้อสำเร็จ"
          },
          400: {
            description: "ข้อมูลไม่ถูกต้อง",
            content: {
              "application/json": {
                example: {
                  message: "Invalid header 'x-app-id'"
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
            description: "ไม่พบข้อมูล",
            content: {
              "application/json": {
                example: {
                  message: "Purchase request not found"
                }
              }
            }
          },
          501: {
            description: "ยังไม่ได้พัฒนาฟีเจอร์นี้",
            content: {
              "application/json": {
                example: {
                  message: "Not implemented"
                }
              }
            }
          }
        }
      }
    })

    .patch("/api/:bu_code/purchase-request/:id/submit", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["purchase-requests"],
        summary: "Submit purchase request",
        description: "ส่งใบขอซื้อเพื่อขออนุมัติ (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          PARAM_AUTHORIZATION,
          {
            name: "bu_code",
            in: "path",
            required: true,
            description: "รหัสหน่วยธุรกิจ",
            schema: {
              type: "string",
              example: "BU_001"
            }
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "รหัสใบขอซื้อ",
            schema: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        responses: {
          200: {
            description: "ส่งใบขอซื้อสำเร็จ",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      description: "รหัสใบขอซื้อ",
                      example: "550e8400-e29b-41d4-a716-446655440001"
                    },
                    status: {
                      type: "string",
                      description: "สถานะใหม่",
                      example: "pending"
                    },
                    submitted_at: {
                      type: "string",
                      format: "date-time",
                      description: "วันเวลาที่ส่ง",
                      example: "2024-01-15T10:30:00Z"
                    }
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
                  invalidStatus: {
                    summary: "สถานะไม่ถูกต้อง",
                    value: {
                      message: "Cannot submit purchase request in current status"
                    }
                  },
                  missingItems: {
                    summary: "ไม่มีรายการสินค้า",
                    value: {
                      message: "Purchase request must have at least one item"
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
            description: "ไม่พบข้อมูล",
            content: {
              "application/json": {
                example: {
                  message: "Purchase request not found"
                }
              }
            }
          },
          501: {
            description: "ยังไม่ได้พัฒนาฟีเจอร์นี้",
            content: {
              "application/json": {
                example: {
                  message: "Not implemented"
                }
              }
            }
          }
        }
      }
    })

    .patch(
      "/api/:bu_code/purchase-request/:id/approve",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
          ctx.headers,
          ctx.jwt
        );
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        body: "PurchaseRequestApproval",
        detail: {
          tags: ["purchase-requests"],
          summary: "Approve purchase request",
          description: "อนุมัติใบขอซื้อและรายการสินค้า",
          parameters: [
            PARAM_X_APP_ID,
            PARAM_AUTHORIZATION,
            {
              name: "bu_code",
              in: "path",
              required: true,
              description: "รหัสหน่วยธุรกิจ",
              schema: {
                type: "string",
                example: "BU_001"
              }
            },
            {
              name: "id",
              in: "path",
              required: true,
              description: "รหัสใบขอซื้อ",
              schema: {
                type: "string",
                format: "uuid",
                example: "550e8400-e29b-41d4-a716-446655440001"
              }
            }
          ],
          requestBody: {
            description: "ข้อมูลการอนุมัติใบขอซื้อ",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    state_role: {
                      type: "string",
                      enum: ["approve"],
                      description: "บทบาทการดำเนินการ",
                      example: "approve"
                    },
                    body: {
                      type: "array",
                      description: "รายการสินค้าที่ต้องการอนุมัติ",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description: "รหัสรายการสินค้า",
                            example: "550e8400-e29b-41d4-a716-446655440003"
                          },
                          state_status: {
                            type: "string",
                            enum: ["approve"],
                            description: "สถานะการอนุมัติ",
                            example: "approve"
                          },
                          state_message: {
                            type: "string",
                            description: "ข้อความการอนุมัติ",
                            example: "อนุมัติตามที่ขอ"
                          },
                          approved_qty: {
                            type: "number",
                            description: "จำนวนที่อนุมัติ",
                            example: 10.5
                          },
                          approved_unit_id: {
                            type: "string",
                            description: "รหัสหน่วยที่อนุมัติ",
                            example: "550e8400-e29b-41d4-a716-446655440005"
                          }
                        },
                        required: ["id", "state_status"]
                      }
                    }
                  },
                  required: ["state_role", "body"]
                }
              }
            }
          },
          responses: {
            200: {
              description: "อนุมัติใบขอซื้อสำเร็จ",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "string",
                        description: "รหัสใบขอซื้อที่อนุมัติ",
                        example: "550e8400-e29b-41d4-a716-446655440001"
                      }
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
                    invalidRole: {
                      summary: "บทบาทไม่ถูกต้อง",
                      value: {
                        message: "Invalid state role"
                      }
                    },
                    invalidBody: {
                      summary: "ข้อมูลไม่ครบถ้วน",
                      value: {
                        message: "Invalid body"
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
              description: "ไม่พบข้อมูล",
              content: {
                "application/json": {
                  examples: {
                    purchaseRequestNotFound: {
                      summary: "ไม่พบใบขอซื้อ",
                      value: {
                        message: "Purchase request not found"
                      }
                    },
                    itemNotFound: {
                      summary: "ไม่พบรายการสินค้า",
                      value: {
                        message: "Purchase request detail not found"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/reject",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
          ctx.headers,
          ctx.jwt
        );
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
          if (item.state_status !== "reject") {
            return resBadRequest(
              "Invalid state status (" + item.state_status + ")"
            );
          }
          if (!item.state_message) {
            return resBadRequest("State message is required");
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        body: "PurchaseRequestApproval",
        detail: {
          tags: ["purchase-requests"],
          summary: "Reject purchase request",
          description: "ปฏิเสธใบขอซื้อและรายการสินค้า",
          parameters: [
            PARAM_X_APP_ID,
            PARAM_AUTHORIZATION,
            {
              name: "bu_code",
              in: "path",
              required: true,
              description: "รหัสหน่วยธุรกิจ",
              schema: {
                type: "string",
                example: "BU_001"
              }
            },
            {
              name: "id",
              in: "path",
              required: true,
              description: "รหัสใบขอซื้อ",
              schema: {
                type: "string",
                format: "uuid",
                example: "550e8400-e29b-41d4-a716-446655440001"
              }
            }
          ],
          requestBody: {
            description: "ข้อมูลการปฏิเสธใบขอซื้อ",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    state_role: {
                      type: "string",
                      enum: ["approve"],
                      description: "บทบาทการดำเนินการ",
                      example: "approve"
                    },
                    body: {
                      type: "array",
                      description: "รายการสินค้าที่ต้องการปฏิเสธ",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description: "รหัสรายการสินค้า",
                            example: "550e8400-e29b-41d4-a716-446655440003"
                          },
                          state_status: {
                            type: "string",
                            enum: ["reject"],
                            description: "สถานะการปฏิเสธ",
                            example: "reject"
                          },
                          state_message: {
                            type: "string",
                            description: "เหตุผลการปฏิเสธ (จำเป็น)",
                            example: "ราคาสูงเกินไป กรุณาหาผู้จำหน่ายราคาดีกว่า"
                          }
                        },
                        required: ["id", "state_status", "state_message"]
                      }
                    }
                  },
                  required: ["state_role", "body"]
                }
              }
            }
          },
          responses: {
            200: {
              description: "ปฏิเสธใบขอซื้อสำเร็จ",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "string",
                        description: "รหัสใบขอซื้อที่ปฏิเสธ",
                        example: "550e8400-e29b-41d4-a716-446655440001"
                      }
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
                    invalidRole: {
                      summary: "บทบาทไม่ถูกต้อง",
                      value: {
                        message: "Invalid state role"
                      }
                    },
                    missingMessage: {
                      summary: "ขาดเหตุผลการปฏิเสธ",
                      value: {
                        message: "State message is required"
                      }
                    },
                    invalidStatus: {
                      summary: "สถานะไม่ถูกต้อง",
                      value: {
                        message: "Invalid state status"
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
              description: "ไม่พบข้อมูล",
              content: {
                "application/json": {
                  examples: {
                    purchaseRequestNotFound: {
                      summary: "ไม่พบใบขอซื้อ",
                      value: {
                        message: "Purchase request not found"
                      }
                    },
                    itemNotFound: {
                      summary: "ไม่พบรายการสินค้า",
                      value: {
                        message: "Purchase request detail not found"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/review",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken } = await CheckHeaderHasAccessToken(
          ctx.headers,
          ctx.jwt
        );
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        const destination = body.destination;
        if (!destination) {
          return resBadRequest("Destination is required");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        body: "PurchaseRequestApproval",
        detail: {
          tags: ["purchase-requests"],
          summary: "Review purchase request",
          description: "ส่งกลับใบขอซื้อเพื่อพิจารณาเพิ่มเติม",
          parameters: [
            PARAM_X_APP_ID,
            PARAM_AUTHORIZATION,
            {
              name: "bu_code",
              in: "path",
              required: true,
              description: "รหัสหน่วยธุรกิจ",
              schema: {
                type: "string",
                example: "BU_001"
              }
            },
            {
              name: "id",
              in: "path",
              required: true,
              description: "รหัสใบขอซื้อ",
              schema: {
                type: "string",
                format: "uuid",
                example: "550e8400-e29b-41d4-a716-446655440001"
              }
            }
          ],
          requestBody: {
            description: "ข้อมูลการส่งกลับเพื่อพิจารณา",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    state_role: {
                      type: "string",
                      enum: ["approve"],
                      description: "บทบาทการดำเนินการ",
                      example: "approve"
                    },
                    destination: {
                      type: "string",
                      description: "ปลายทางที่ต้องการส่งกลับไป (จำเป็น)",
                      example: "requester"
                    },
                    body: {
                      type: "array",
                      description: "รายการสินค้าที่ต้องการพิจารณา",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description: "รหัสรายการสินค้า",
                            example: "550e8400-e29b-41d4-a716-446655440003"
                          },
                          state_status: {
                            type: "string",
                            enum: ["review"],
                            description: "สถานะส่งกลับเพื่อพิจารณา",
                            example: "review"
                          },
                          state_message: {
                            type: "string",
                            description: "ข้อความส่งกลับเพื่อพิจารณา",
                            example: "กรุณาระบุรายละเอียดการใช้งานและเหตุผลความจำเป็นเพิ่มเติม"
                          }
                        },
                        required: ["id", "state_status"]
                      }
                    }
                  },
                  required: ["state_role", "destination", "body"]
                }
              }
            }
          },
          responses: {
            200: {
              description: "ส่งกลับเพื่อพิจารณาสำเร็จ",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "string",
                        description: "รหัสใบขอซื้อที่ส่งกลับ",
                        example: "550e8400-e29b-41d4-a716-446655440001"
                      }
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
                    invalidRole: {
                      summary: "บทบาทไม่ถูกต้อง",
                      value: {
                        message: "Invalid state role"
                      }
                    },
                    missingDestination: {
                      summary: "ขาดปลายทาง",
                      value: {
                        message: "Destination is required"
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
              description: "ไม่พบข้อมูล",
              content: {
                "application/json": {
                  examples: {
                    purchaseRequestNotFound: {
                      summary: "ไม่พบใบขอซื้อ",
                      value: {
                        message: "Purchase request not found"
                      }
                    },
                    itemNotFound: {
                      summary: "ไม่พบรายการสินค้า",
                      value: {
                        message: "Purchase request detail not found"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
    .patch("/api/:bu_code/purchase-request/:id/save", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["purchase-requests"],
        summary: "Save purchase request as draft",
        description: "บันทึกใบขอซื้อเป็นแบบร่าง (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          PARAM_AUTHORIZATION,
          {
            name: "bu_code",
            in: "path",
            required: true,
            description: "รหัสหน่วยธุรกิจ",
            schema: {
              type: "string",
              example: "BU_001"
            }
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "รหัสใบขอซื้อ",
            schema: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        responses: {
          501: {
            description: "ยังไม่ได้พัฒนาฟีเจอร์นี้",
            content: {
              "application/json": {
                example: {
                  message: "Not implemented"
                }
              }
            }
          }
        }
      }
    })
    .get("/api/:bu_code/purchase-request/status/:status", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .get(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/dimension",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          userProfile,
          businessUnits,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          const bu = businessUnits?.find((bu) => bu.code === bu_code);
          if (!bu) {
            return resNotFound("Business unit not found");
          }
          const prd =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
          if (!prd) {
            return resNotFound("Purchase request detail not found");
          }
          const dimension = prd.dimension;
          const res = {
            data: dimension,
          };
          return res;
        } catch (error) {
          return resErrorWithData(500, "error", error);
        }
      }
    )

    .model({
      CalculatePurchaseRequestDetail: t.Object({
        qty: t.Number({
          required: true,
        }),
      }),
    })
    .post(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/calculate",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const body = (await ctx.body) as
          | CalculatePurchaseRequestDetail
          | undefined;

        if (!body) {
          return resBadRequest("Invalid body");
        }

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits?.find((bu) => bu.code === bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }
        const prd =
          tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
        if (!prd) {
          return resNotFound("Purchase request detail not found");
        }

        const qty = body.qty;

        if (!qty) {
          return resBadRequest("Qty is required");
        }

        const currency_rate = 35.5;

        // mock simple data
        const pricelist = {
          price: prd.pricelist_price || 0,
          unit: prd.pricelist_unit,
          tax_rate: prd.tax_rate || 0,
          is_tax_adjustment: prd.is_tax_adjustment,
          discount_rate: prd.discount_rate || 0,
          is_discount_adjustment: prd.is_discount_adjustment,
        };

        // const sub_total_price = qty * pricelist.price;
        // const discount_amount =
        //   (qty * pricelist.price * pricelist.discount_rate) / 100;
        // const net_amount = qty * pricelist.price - discount_amount;
        // const tax_amount = (qty * pricelist.price * pricelist.tax_rate) / 100;
        // const total_amount = sub_total_price + tax_amount - discount_amount;
        // const base_total_amount =
        //   (sub_total_price + tax_amount - discount_amount) * currency_rate;

        // const res = {
        //   sub_total_price: sub_total_price,
        //   discount_percentage: pricelist.discount_rate,
        //   discount_amount: discount_amount,

        //   net_amount: net_amount,

        //   tax_percentage: pricelist.tax_rate,
        //   tax_amount: tax_amount,

        //   total_amount: total_amount,
        //   base_total_amount: base_total_amount,
        //   currency_rate,
        // };

        const res = getCalculatePriceInfo(
          qty,
          pricelist.price,
          currency_rate,
          pricelist.tax_rate,
          pricelist.is_tax_adjustment,
          0,
          pricelist.discount_rate,
          pricelist.is_discount_adjustment,
          0,
        );
        return { data: res };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Calculate a purchase request detail",
      }
    )
    .get(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/history",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, businessUnits } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = businessUnits?.find((bu) => bu.code === bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const prd =
          tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
        if (!prd) {
          return resNotFound("Purchase request detail not found");
        }

        const history = prd.history;
        const res = {
          data: history,
        };
        return res;
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Get a purchase request detail history",
      }
    );
