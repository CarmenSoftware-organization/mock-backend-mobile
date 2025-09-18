import { Elysia, t } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .get("/api-system/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get business units list",
      description: "Retrieve a paginated list of all business units in the system (Not implemented)",
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
          description: "Search term for business unit name or code",
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
  .post("/api-system/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Create new business unit",
      description: "Create a new business unit in the system (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["code", "name"],
              properties: {
                code: {
                  type: "string",
                  description: "Business unit code",
                  example: "BU001"
                },
                name: {
                  type: "string",
                  description: "Business unit name in Thai",
                  example: "หน่วยธุรกิจหลัก"
                },
                name_en: {
                  type: "string",
                  description: "Business unit name in English",
                  example: "Main Business Unit"
                },
                description: {
                  type: "string",
                  description: "Business unit description",
                  example: "หน่วยธุรกิจหลักของบริษัท"
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
  .get("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get business unit by ID",
      description: "Retrieve detailed information about a specific business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
  .put("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Update business unit",
      description: "Update all fields of an existing business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
              required: ["code", "name"],
              properties: {
                code: {
                  type: "string",
                  description: "Business unit code",
                  example: "BU001"
                },
                name: {
                  type: "string",
                  description: "Business unit name in Thai",
                  example: "หน่วยธุรกิจหลัก"
                },
                name_en: {
                  type: "string",
                  description: "Business unit name in English",
                  example: "Main Business Unit"
                },
                description: {
                  type: "string",
                  description: "Business unit description",
                  example: "หน่วยธุรกิจหลักของบริษัท"
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
  .delete("/api-system/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Delete business unit",
      description: "Delete an existing business unit from the system (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
  .get("/api-system/business-unit/:id/system-configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get business unit system configurations",
      description: "Retrieve system-level configurations for a specific business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
  .get("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get business unit configurations",
      description: "Retrieve all configurations for a specific business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
  .put("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Replace business unit configurations",
      description: "Replace all configurations for a specific business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
              additionalProperties: {
                type: "string"
              },
              example: {
                "inventory.auto_approve_threshold": "10000",
                "procurement.require_three_quotes": "true",
                "workflow.approval_levels": "3"
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
  .patch("/api-system/business-unit/:id/configs", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Update business unit configurations",
      description: "Partially update configurations for a specific business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
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
              additionalProperties: {
                type: "string"
              },
              example: {
                "inventory.auto_approve_threshold": "15000",
                "procurement.require_three_quotes": "false"
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
  .get("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get specific business unit configuration",
      description: "Retrieve a specific configuration value for a business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        },
        {
          name: "key",
          in: "path",
          required: true,
          description: "Configuration key name",
          schema: {
            type: "string",
            example: "inventory.auto_approve_threshold"
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
  .delete("/api-system/business-unit/:id/configs/:key", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Delete specific business unit configuration",
      description: "Remove a specific configuration key for a business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        },
        {
          name: "key",
          in: "path",
          required: true,
          description: "Configuration key name to delete",
          schema: {
            type: "string",
            example: "inventory.auto_approve_threshold"
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
  .get("/api-system/business-unit/:id/configs/:key/exists", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Check if business unit configuration exists",
      description: "Check whether a specific configuration key exists for a business unit (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business unit UUID",
          schema: {
            type: "string",
            format: "uuid",
            example: "550e8400-e29b-41d4-a716-446655440000"
          }
        },
        {
          name: "key",
          in: "path",
          required: true,
          description: "Configuration key name to check",
          schema: {
            type: "string",
            example: "inventory.auto_approve_threshold"
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