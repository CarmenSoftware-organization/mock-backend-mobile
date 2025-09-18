import { Elysia, t } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  // Merged routes from /api-system/user/cluster
  .get("/api-system/user/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get user clusters",
      description: "Retrieve a list of all user clusters in the system (Not implemented)",
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
          description: "Search term for cluster name",
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
  .post("/api-system/user/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Create user cluster",
      description: "Create a new user cluster in the system (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "user_ids"],
              properties: {
                name: {
                  type: "string",
                  description: "Cluster name in Thai",
                  example: "กลุ่มผู้ใช้จัดซื้อ"
                },
                name_en: {
                  type: "string",
                  description: "Cluster name in English",
                  example: "Procurement Users"
                },
                description: {
                  type: "string",
                  description: "Cluster description",
                  example: "กลุ่มผู้ใช้ที่รับผิดชอบการจัดซื้อ"
                },
                user_ids: {
                  type: "array",
                  items: {
                    type: "string",
                    format: "uuid"
                  },
                  description: "Array of user UUIDs to include in cluster",
                  example: ["550e8400-e29b-41d4-a716-446655440000"]
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
  // Merged routes from /api-system/user/cluster/:id
  .get("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get user cluster by ID",
      description: "Retrieve detailed information about a specific user cluster (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User cluster UUID",
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
  .put("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Update user cluster",
      description: "Update all fields of an existing user cluster (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User cluster UUID",
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
              required: ["name", "user_ids"],
              properties: {
                name: {
                  type: "string",
                  description: "Cluster name in Thai",
                  example: "กลุ่มผู้ใช้จัดซื้อ"
                },
                name_en: {
                  type: "string",
                  description: "Cluster name in English",
                  example: "Procurement Users"
                },
                description: {
                  type: "string",
                  description: "Cluster description",
                  example: "กลุ่มผู้ใช้ที่รับผิดชอบการจัดซื้อ"
                },
                user_ids: {
                  type: "array",
                  items: {
                    type: "string",
                    format: "uuid"
                  },
                  description: "Array of user UUIDs to include in cluster",
                  example: ["550e8400-e29b-41d4-a716-446655440000"]
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
  .delete("/api-system/user/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Delete user cluster",
      description: "Delete an existing user cluster from the system (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User cluster UUID",
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
  // Merged routes from /api-system/user/business-unit
  .get("/api-system/user/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get user business units",
      description: "Retrieve a list of all user business unit assignments (Not implemented)",
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
          name: "user_id",
          in: "query",
          required: false,
          description: "Filter by specific user ID",
          schema: {
            type: "string",
            format: "uuid"
          }
        },
        {
          name: "bu_code",
          in: "query",
          required: false,
          description: "Filter by business unit code",
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
  .post("/api-system/user/business-unit", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Create user business unit assignment",
      description: "Assign a user to a specific business unit (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["user_id", "business_unit_id"],
              properties: {
                user_id: {
                  type: "string",
                  format: "uuid",
                  description: "User UUID",
                  example: "550e8400-e29b-41d4-a716-446655440000"
                },
                business_unit_id: {
                  type: "string",
                  format: "uuid",
                  description: "Business unit UUID",
                  example: "660e8400-e29b-41d4-a716-446655440001"
                },
                role: {
                  type: "string",
                  description: "User role in the business unit",
                  example: "manager",
                  enum: ["admin", "manager", "user", "viewer"]
                },
                permissions: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Specific permissions for this assignment",
                  example: ["read", "write", "approve"]
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
  // Merged routes from /api-system/user/business-unit/:id
  .get("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get user business unit assignment by ID",
      description: "Retrieve detailed information about a specific user business unit assignment (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User business unit assignment UUID",
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
  .patch("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Update user business unit assignment",
      description: "Partially update an existing user business unit assignment (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User business unit assignment UUID",
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
                role: {
                  type: "string",
                  description: "User role in the business unit",
                  example: "manager",
                  enum: ["admin", "manager", "user", "viewer"]
                },
                permissions: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  description: "Specific permissions for this assignment",
                  example: ["read", "write", "approve"]
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
  .delete("/api-system/user/business-unit/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Delete user business unit assignment",
      description: "Remove an existing user business unit assignment (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "User business unit assignment UUID",
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
