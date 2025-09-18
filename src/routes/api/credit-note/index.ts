import { Elysia, t } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .get("/api/credit-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["financial"],
      summary: "Get credit notes",
      description: "Retrieve a paginated list of all credit notes (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "page",
          in: "query",
          required: false,
          description: "Page number for pagination",
          schema: {
            type: "integer",
            minimum: 1,
            default: 1
          }
        },
        {
          name: "limit",
          in: "query",
          required: false,
          description: "Number of items per page",
          schema: {
            type: "integer",
            minimum: 1,
            maximum: 100,
            default: 10
          }
        },
        {
          name: "search",
          in: "query",
          required: false,
          description: "Search term for credit note number or vendor",
          schema: {
            type: "string"
          }
        },
        {
          name: "status",
          in: "query",
          required: false,
          description: "Filter by credit note status",
          schema: {
            type: "string",
            enum: ["draft", "pending", "approved", "rejected", "processed"]
          }
        },
        {
          name: "vendor_id",
          in: "query",
          required: false,
          description: "Filter by vendor UUID",
          schema: {
            type: "string",
            format: "uuid"
          }
        }
      ],
      responses: {
        501: {
          description: "Not implemented",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Not implemented"
              }
            }
          }
        }
      }
    }
  })
  .post("/api/credit-note", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["financial"],
      summary: "Create credit note",
      description: "Create a new credit note (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["vendor_id", "amount", "reason_id"],
              properties: {
                vendor_id: {
                  type: "string",
                  format: "uuid",
                  description: "Vendor UUID",
                  example: "550e8400-e29b-41d4-a716-446655440000"
                },
                reference_document: {
                  type: "string",
                  description: "Reference document number",
                  example: "INV-2024-001"
                },
                amount: {
                  type: "number",
                  description: "Credit note amount",
                  example: 1500.00
                },
                currency_id: {
                  type: "string",
                  format: "uuid",
                  description: "Currency UUID",
                  example: "660e8400-e29b-41d4-a716-446655440001"
                },
                reason_id: {
                  type: "string",
                  format: "uuid",
                  description: "Credit note reason UUID",
                  example: "770e8400-e29b-41d4-a716-446655440002"
                },
                description: {
                  type: "string",
                  description: "Credit note description in Thai",
                  example: "ใบลดหนี้สำหรับสินค้าที่ไม่ถูกต้อง"
                },
                due_date: {
                  type: "string",
                  format: "date",
                  description: "Credit note due date",
                  example: "2024-12-31"
                },
                attachments: {
                  type: "array",
                  items: {
                    type: "string",
                    format: "uuid"
                  },
                  description: "Attachment file UUIDs",
                  example: ["880e8400-e29b-41d4-a716-446655440003"]
                }
              }
            }
          }
        }
      },
      responses: {
        501: {
          description: "Not implemented",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Not implemented"
              }
            }
          }
        }
      }
    }
  })
  .get("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["financial"],
      summary: "Get credit note by ID",
      description: "Retrieve detailed information about a specific credit note (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Credit note UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        }
      ],
      responses: {
        501: {
          description: "Not implemented",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Not implemented"
              }
            }
          }
        }
      }
    }
  })
  .patch("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["financial"],
      summary: "Update credit note",
      description: "Partially update an existing credit note (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Credit note UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                amount: {
                  type: "number",
                  description: "Credit note amount",
                  example: 1500.00
                },
                reason_id: {
                  type: "string",
                  format: "uuid",
                  description: "Credit note reason UUID",
                  example: "770e8400-e29b-41d4-a716-446655440002"
                },
                description: {
                  type: "string",
                  description: "Credit note description in Thai",
                  example: "ใบลดหนี้สำหรับสินค้าที่ไม่ถูกต้อง"
                },
                status: {
                  type: "string",
                  enum: ["draft", "pending", "approved", "rejected", "processed"],
                  description: "Credit note status",
                  example: "pending"
                },
                due_date: {
                  type: "string",
                  format: "date",
                  description: "Credit note due date",
                  example: "2024-12-31"
                }
              }
            }
          }
        }
      },
      responses: {
        501: {
          description: "Not implemented",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Not implemented"
              }
            }
          }
        }
      }
    }
  })
  .delete("/api/credit-note/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["financial"],
      summary: "Delete credit note",
      description: "Delete an existing credit note (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Credit note UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        }
      ],
      responses: {
        501: {
          description: "Not implemented",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Not implemented"
              }
            }
          }
        }
      }
    }
  });
