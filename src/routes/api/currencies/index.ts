import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { getDefaultCurrencyByBusinessUnitId } from "@/mockdata/tb_application_config";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  .get("/api/:bu_code/currencies/default", async (ctx) => {
     const { bu_code } = ctx.params;
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

     const bu = businessUnits?.find((bu) => bu.code === bu_code);
     if (!bu) {
       return resNotFound("Business unit not found");
     }

     const defaultCurrency = getDefaultCurrencyByBusinessUnitId(bu.id);
     return {
      currency : {
        id: defaultCurrency?.id || "",
        name: defaultCurrency?.name || "",
        code: defaultCurrency?.code || "",
        symbol: defaultCurrency?.symbol || "",
        decimal_places: defaultCurrency?.decimal_places || 0,
      },
     }
  }, {
    detail: {
      tags: ["currencies"],
      summary: "Get default currency for business unit",
      description: "Retrieve the default currency configuration for a specific business unit",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "Authorization",
          in: "header",
          required: true,
          description: "Bearer JWT access token",
          schema: {
            type: "string",
            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          }
        },
        {
          name: "bu_code",
          in: "path",
          required: true,
          description: "Business unit code",
          schema: {
            type: "string",
            example: "BU001"
          }
        }
      ],
      responses: {
        200: {
          description: "Default currency information",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  currency: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440001" },
                      name: { type: "string", example: "Thai Baht" },
                      code: { type: "string", example: "THB" },
                      symbol: { type: "string", example: "฿" },
                      decimal_places: { type: "number", example: 2 }
                    }
                  }
                }
              },
              example: {
                currency: {
                  id: "550e8400-e29b-41d4-a716-446655440001",
                  name: "Thai Baht",
                  code: "THB",
                  symbol: "฿",
                  decimal_places: 2
                }
              }
            }
          }
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              example: { message: "Invalid header 'x-app-id'" }
            }
          }
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              example: { message: "Unauthorized" }
            }
          }
        },
        404: {
          description: "Business unit not found",
          content: {
            "application/json": {
              example: { message: "Business unit not found" }
            }
          }
        }
      }
    }
  })

  .get("/api/currencies", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["currencies"],
      summary: "Get all currencies",
      description: "Retrieve all available currencies (Not implemented)",
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
              example: { message: "Not implemented" }
            }
          }
        }
      }
    }
  })
  .get("/api/currencies/:id", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["currencies"],
      summary: "Get currency by ID",
      description: "Retrieve a specific currency by ID (Not implemented)",
      parameters: [
        PARAM_X_APP_ID,
        {
          name: "id",
          in: "path",
          required: true,
          description: "Currency ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440001"
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
              example: { message: "Not implemented" }
            }
          }
        }
      }
    }
  })
  .get("/api/currencies/iso", ({ params, query, body, headers }) => {
    return Response.json(resNotImplemented, { status: 501 });
  }, {
    detail: {
      tags: ["currencies"],
      summary: "Get ISO currency list",
      description: "Retrieve list of ISO standard currencies (Not implemented)",
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
              example: { message: "Not implemented" }
            }
          }
        }
      }
    }
  });