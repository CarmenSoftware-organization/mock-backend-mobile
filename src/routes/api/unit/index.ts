import type { Elysia } from "elysia";
import { resNotFound } from "@/libs/res.error";
import jwt from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbProduct, tbUnitConversion } from "@/mockdata";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app

.use(
  jwt({
    name: "jwt",
    secret: process.env.JWT_SECRET || "secret",
  })
)

.get("/api/:bu_code/unit/available/product/:product_id", async (ctx) => {
  const { bu_code, product_id } = ctx.params;

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

  const product = tbProduct.getProductById(product_id);
  if (!product) {
    return resNotFound("Product not found");
  }

  const available_unit = tbUnitConversion.getAvailableUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
  return {data : available_unit};
}, {
  detail: {
    tags: ["unit"],
    summary: "Get available units for product",
    description: "Retrieve all available units that can be used for a specific product",
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
      },
      {
        name: "product_id",
        in: "path",
        required: true,
        description: "Product ID",
        schema: {
          type: "string",
          example: "550e8400-e29b-41d4-a716-446655440001"
        }
      }
    ],
    responses: {
      200: {
        description: "List of available units",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440002" },
                      name: { type: "string", example: "กิโลกรัม" },
                      code: { type: "string", example: "KG" },
                      symbol: { type: "string", example: "kg" },
                      conversion_factor: { type: "number", example: 1.0 }
                    }
                  }
                }
              }
            },
            example: {
              data: [
                {
                  id: "550e8400-e29b-41d4-a716-446655440002",
                  name: "กิโลกรัม",
                  code: "KG",
                  symbol: "kg",
                  conversion_factor: 1.0
                }
              ]
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
        description: "Resource not found",
        content: {
          "application/json": {
            examples: {
              businessUnitNotFound: {
                summary: "Business unit not found",
                value: { message: "Business unit not found" }
              },
              productNotFound: {
                summary: "Product not found",
                value: { message: "Product not found" }
              }
            }
          }
        }
      }
    }
  }
})

  .get("/api/:bu_code/unit/ingredient/product/:product_id", async (ctx) => {
    const { bu_code, product_id } = ctx.params;

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

    const product = tbProduct.getProductById(product_id);
    if (!product) {
      return resNotFound("Product not found");
    }

    const available_unit = tbUnitConversion.getIngredientUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
    return {data : available_unit};
  }, {
    detail: {
      tags: ["unit"],
      summary: "Get ingredient units for product",
      description: "Retrieve all ingredient units that can be used for a specific product in recipes",
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
        },
        {
          name: "product_id",
          in: "path",
          required: true,
          description: "Product ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440001"
          }
        }
      ],
      responses: {
        200: {
          description: "List of ingredient units",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440002" },
                        name: { type: "string", example: "กรัม" },
                        code: { type: "string", example: "G" },
                        symbol: { type: "string", example: "g" },
                        conversion_factor: { type: "number", example: 0.001 }
                      }
                    }
                  }
                }
              },
              example: {
                data: [
                  {
                    id: "550e8400-e29b-41d4-a716-446655440002",
                    name: "กรัม",
                    code: "G",
                    symbol: "g",
                    conversion_factor: 0.001
                  }
                ]
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
          description: "Resource not found",
          content: {
            "application/json": {
              examples: {
                businessUnitNotFound: {
                  summary: "Business unit not found",
                  value: { message: "Business unit not found" }
                },
                productNotFound: {
                  summary: "Product not found",
                  value: { message: "Product not found" }
                }
              }
            }
          }
        }
      }
    }
  })

  .get("/api/:bu_code/unit/order/product/:product_id", async (ctx) => {
    const { bu_code, product_id } = ctx.params;

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

    const product = tbProduct.getProductById(product_id);
    if (!product) {
      return resNotFound("Product not found");
    }

    const available_unit = tbUnitConversion.getOrderUnitByProductId(product_id).sort((a, b) => a.name.localeCompare(b.name));
    return {data : available_unit};
  }, {
    detail: {
      tags: ["unit"],
      summary: "Get order units for product",
      description: "Retrieve all order units that can be used for purchasing a specific product",
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
        },
        {
          name: "product_id",
          in: "path",
          required: true,
          description: "Product ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440001"
          }
        }
      ],
      responses: {
        200: {
          description: "List of order units",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440002" },
                        name: { type: "string", example: "กล่อง" },
                        code: { type: "string", example: "BOX" },
                        symbol: { type: "string", example: "box" },
                        conversion_factor: { type: "number", example: 12.0 }
                      }
                    }
                  }
                }
              },
              example: {
                data: [
                  {
                    id: "550e8400-e29b-41d4-a716-446655440002",
                    name: "กล่อง",
                    code: "BOX",
                    symbol: "box",
                    conversion_factor: 12.0
                  }
                ]
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
          description: "Resource not found",
          content: {
            "application/json": {
              examples: {
                businessUnitNotFound: {
                  summary: "Business unit not found",
                  value: { message: "Business unit not found" }
                },
                productNotFound: {
                  summary: "Product not found",
                  value: { message: "Product not found" }
                }
              }
            }
          }
        }
      }
    }
  })
  ;
