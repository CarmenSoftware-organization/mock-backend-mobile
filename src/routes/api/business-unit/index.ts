import { resNotImplemented } from "@/libs/res.error";
import type { Elysia } from "elysia";
import { t } from "elysia";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
    .post("/api/business-unit/default", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["business-unit"],
        summary: "Set default business unit",
        description: "Set the default business unit for the current user (Not implemented)",
        parameters: [PARAM_X_APP_ID],
        requestBody: {
          description: "Business unit configuration",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  business_unit_id: {
                    type: "string",
                    description: "Business unit ID",
                    example: "550e8400-e29b-41d4-a716-446655440001"
                  }
                },
                required: ["business_unit_id"]
              },
              example: {
                business_unit_id: "550e8400-e29b-41d4-a716-446655440001"
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
    .get("/api/business-unit/system-configs", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["business-unit"],
        summary: "Get business unit system configurations",
        description: "Retrieve system-level configurations for business units (Not implemented)",
        parameters: [PARAM_X_APP_ID],
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
    .get("/api/business-unit/configs/:key", ({ params, query, body, headers }) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["business-unit"],
        summary: "Get business unit configuration by key",
        description: "Retrieve a specific configuration value for business units by key (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "key",
            in: "path",
            required: true,
            description: "Configuration key",
            schema: {
              type: "string",
              example: "default_currency"
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

