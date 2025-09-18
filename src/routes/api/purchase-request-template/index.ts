import { Elysia, t } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .get("/api/purchase-request-template", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["procurement"],
      summary: "Get purchase request templates",
      description: "Retrieve a paginated list of all purchase request templates (Not implemented)",
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
          description: "Search term for template name",
          schema: {
            type: "string"
          }
        },
        {
          name: "category",
          in: "query",
          required: false,
          description: "Filter by template category",
          schema: {
            type: "string"
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
  .post("/api/purchase-request-template", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["procurement"],
      summary: "Create purchase request template",
      description: "Create a new purchase request template (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "items"],
              properties: {
                name: {
                  type: "string",
                  description: "Template name in Thai",
                  example: "แม่แบบใบขอซื้ออุปกรณ์สำนักงาน"
                },
                name_en: {
                  type: "string",
                  description: "Template name in English",
                  example: "Office Supplies Purchase Template"
                },
                description: {
                  type: "string",
                  description: "Template description",
                  example: "แม่แบบสำหรับการขอซื้ออุปกรณ์สำนักงานทั่วไป"
                },
                category: {
                  type: "string",
                  description: "Template category",
                  example: "office-supplies"
                },
                items: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      product_id: {
                        type: "string",
                        format: "uuid",
                        description: "Product UUID"
                      },
                      quantity: {
                        type: "number",
                        description: "Default quantity"
                      },
                      unit_id: {
                        type: "string",
                        format: "uuid",
                        description: "Unit UUID"
                      },
                      notes: {
                        type: "string",
                        description: "Item notes"
                      }
                    }
                  },
                  description: "Template items",
                  example: [{
                    product_id: "550e8400-e29b-41d4-a716-446655440000",
                    quantity: 10,
                    unit_id: "660e8400-e29b-41d4-a716-446655440001",
                    notes: "สำหรับการใช้งานทั่วไป"
                  }]
                },
                is_active: {
                  type: "boolean",
                  description: "Active status",
                  default: true
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
  .get("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["procurement"],
      summary: "Get purchase request template by ID",
      description: "Retrieve detailed information about a specific purchase request template (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Purchase request template UUID",
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
  .put("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["procurement"],
      summary: "Update purchase request template",
      description: "Update all fields of an existing purchase request template (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Purchase request template UUID",
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
              required: ["name", "items"],
              properties: {
                name: {
                  type: "string",
                  description: "Template name in Thai",
                  example: "แม่แบบใบขอซื้ออุปกรณ์สำนักงาน"
                },
                name_en: {
                  type: "string",
                  description: "Template name in English",
                  example: "Office Supplies Purchase Template"
                },
                description: {
                  type: "string",
                  description: "Template description",
                  example: "แม่แบบสำหรับการขอซื้ออุปกรณ์สำนักงานทั่วไป"
                },
                category: {
                  type: "string",
                  description: "Template category",
                  example: "office-supplies"
                },
                items: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      product_id: {
                        type: "string",
                        format: "uuid",
                        description: "Product UUID"
                      },
                      quantity: {
                        type: "number",
                        description: "Default quantity"
                      },
                      unit_id: {
                        type: "string",
                        format: "uuid",
                        description: "Unit UUID"
                      },
                      notes: {
                        type: "string",
                        description: "Item notes"
                      }
                    }
                  },
                  description: "Template items",
                  example: [{
                    product_id: "550e8400-e29b-41d4-a716-446655440000",
                    quantity: 10,
                    unit_id: "660e8400-e29b-41d4-a716-446655440001",
                    notes: "สำหรับการใช้งานทั่วไป"
                  }]
                },
                is_active: {
                  type: "boolean",
                  description: "Active status"
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
  .delete("/api/purchase-request-template/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["procurement"],
      summary: "Delete purchase request template",
      description: "Delete an existing purchase request template (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Purchase request template UUID",
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