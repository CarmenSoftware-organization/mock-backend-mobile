import { Elysia, t } from "elysia";
import { resNotImplemented } from "@/libs/res.error";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .get("/api-system/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get clusters list",
      description: "Retrieve a paginated list of all clusters in the system (Not implemented)",
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
          description: "Search term for cluster name or code",
          schema: {
            type: "string"
          }
        },
        {
          name: "type",
          in: "query",
          required: false,
          description: "Filter by cluster type",
          schema: {
            type: "string",
            enum: ["department", "location", "function", "project"]
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
  .post("/api-system/cluster", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Create new cluster",
      description: "Create a new cluster in the system (Not implemented)",
      parameters: [PARAM_X_APP_ID],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["code", "name", "type"],
              properties: {
                code: {
                  type: "string",
                  description: "Cluster code",
                  example: "CLS001"
                },
                name: {
                  type: "string",
                  description: "Cluster name in Thai",
                  example: "กลุ่มจัดซื้อ"
                },
                name_en: {
                  type: "string",
                  description: "Cluster name in English",
                  example: "Procurement Cluster"
                },
                type: {
                  type: "string",
                  description: "Cluster type",
                  enum: ["department", "location", "function", "project"],
                  example: "department"
                },
                description: {
                  type: "string",
                  description: "Cluster description",
                  example: "กลุ่มงานที่เกี่ยวข้องกับการจัดซื้อ"
                },
                parent_id: {
                  type: "string",
                  format: "uuid",
                  description: "Parent cluster UUID (for hierarchical clusters)",
                  example: "550e8400-e29b-41d4-a716-446655440000"
                },
                business_unit_id: {
                  type: "string",
                  format: "uuid",
                  description: "Associated business unit UUID",
                  example: "660e8400-e29b-41d4-a716-446655440001"
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
  .get("/api-system/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Get cluster by ID",
      description: "Retrieve detailed information about a specific cluster (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Cluster UUID",
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
  .put("/api-system/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Update cluster",
      description: "Update all fields of an existing cluster (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Cluster UUID",
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
              required: ["code", "name", "type"],
              properties: {
                code: {
                  type: "string",
                  description: "Cluster code",
                  example: "CLS001"
                },
                name: {
                  type: "string",
                  description: "Cluster name in Thai",
                  example: "กลุ่มจัดซื้อ"
                },
                name_en: {
                  type: "string",
                  description: "Cluster name in English",
                  example: "Procurement Cluster"
                },
                type: {
                  type: "string",
                  description: "Cluster type",
                  enum: ["department", "location", "function", "project"],
                  example: "department"
                },
                description: {
                  type: "string",
                  description: "Cluster description",
                  example: "กลุ่มงานที่เกี่ยวข้องกับการจัดซื้อ"
                },
                parent_id: {
                  type: "string",
                  format: "uuid",
                  description: "Parent cluster UUID (for hierarchical clusters)",
                  example: "550e8400-e29b-41d4-a716-446655440000"
                },
                business_unit_id: {
                  type: "string",
                  format: "uuid",
                  description: "Associated business unit UUID",
                  example: "660e8400-e29b-41d4-a716-446655440001"
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
  .delete("/api-system/cluster/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["system"],
      summary: "Delete cluster",
      description: "Delete an existing cluster from the system (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Cluster UUID",
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