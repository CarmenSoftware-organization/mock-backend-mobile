import type { Elysia } from "elysia";
import { t } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbInventoryTransactionDetail, tbLocation, tbProduct, tbProductLocation, tbPurchaseOrder, tbPurchaseOrderDetail, tbUnitConversion } from "@/mockdata";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app

  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )

  .get("/api/products", async (ctx) => {
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

    const { bu_code } = ctx.query;

    const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
    if (!bu) {
      return resNotFound("Business unit not found");
    }

    const products = tbProduct.getProductsByBusinessUnitCode(bu.code);
    return products;
  }, {
    detail: {
      tags: ["products"],
      summary: "Get products by business unit",
      description: "Retrieve all products for a specific business unit",
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
          in: "query",
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
          description: "List of products",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440001" },
                    sku: { type: "string", example: "PRODUCT_CODE_01" },
                    name: { type: "string", example: "Beef Tenderloin" },
                    local_name: { type: "string", example: "เนื้อสันใน" },
                    description: { type: "string", nullable: true },
                    inventory_unit_id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440002" },
                    inventory_unit_name: { type: "string", example: "KG" },
                    product_status_type: { type: "string", enum: ["active", "inactive", "discontinued"], example: "active" },
                    product_item_group_id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440003" },
                    is_used_in_recipe: { type: "boolean", example: true },
                    is_sold_directly: { type: "boolean", example: false },
                    barcode: { type: "string", nullable: true },
                    price_deviation_limit: { type: "string", example: "0.00000" },
                    qty_deviation_limit: { type: "string", example: "0.00000" }
                  }
                }
              },
              examples: {
                success: {
                  summary: "Successful response",
                  value: [
                    {
                      id: "550e8400-e29b-41d4-a716-446655440001",
                      sku: "PRODUCT_CODE_01",
                      name: "Beef Tenderloin",
                      local_name: "เนื้อสันใน",
                      description: null,
                      inventory_unit_id: "550e8400-e29b-41d4-a716-446655440002",
                      inventory_unit_name: "KG",
                      product_status_type: "active",
                      product_item_group_id: "550e8400-e29b-41d4-a716-446655440003",
                      is_used_in_recipe: true,
                      is_sold_directly: false,
                      barcode: null,
                      price_deviation_limit: "0.00000",
                      qty_deviation_limit: "0.00000"
                    }
                  ]
                }
              }
            }
          }
        },
        400: {
          description: "Bad request - Missing or invalid headers",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Invalid header 'x-app-id'"
              }
            }
          }
        },
        401: {
          description: "Unauthorized - Invalid access token",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Unauthorized"
              }
            }
          }
        },
        404: {
          description: "Business unit not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" }
                }
              },
              example: {
                message: "Business unit not found"
              }
            }
          }
        }
      }
    }
  })

  .get("/api/:bu_code/product/:product_id/on-hand", async (ctx) => {
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

    const location_id = ctx.query.location_id;

    const location = tbLocation.getLocationById(location_id);


    const on_hand = tbInventoryTransactionDetail.getProductOnHand(location_id,product_id);
    return {data : on_hand};

  }, {
    detail: {
      tags: ["products"],
      summary: "Get product on-hand quantity",
      description: "Retrieve the current on-hand quantity for a specific product at a location",
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
        },
        {
          name: "location_id",
          in: "query",
          required: true,
          description: "Location ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440004"
          }
        }
      ],
      responses: {
        200: {
          description: "Product on-hand quantity",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "number",
                    description: "Current on-hand quantity",
                    example: 150.5
                  }
                }
              },
              example: {
                data: 150.5
              }
            }
          }
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              example: {
                message: "Invalid header 'x-app-id'"
              }
            }
          }
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              example: {
                message: "Unauthorized"
              }
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
                  value: {
                    message: "Business unit not found"
                  }
                },
                productNotFound: {
                  summary: "Product not found",
                  value: {
                    message: "Product not found"
                  }
                }
              }
            }
          }
        }
      }
    }
  })

  .get("/api/:bu_code/product/:product_id/on-order", async (ctx) => {
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

    const location_id = ctx.query.location_id;

    const location = tbLocation.getLocationById(location_id);

    const on_order = tbPurchaseOrderDetail.getProductOnOrder(product_id);
    return {data : on_order};
  }, {
    detail: {
      tags: ["products"],
      summary: "Get product on-order quantity",
      description: "Retrieve the current on-order quantity for a specific product",
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
        },
        {
          name: "location_id",
          in: "query",
          required: true,
          description: "Location ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440004"
          }
        }
      ],
      responses: {
        200: {
          description: "Product on-order quantity",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "number",
                    description: "Current on-order quantity",
                    example: 75.0
                  }
                }
              },
              example: {
                data: 75.0
              }
            }
          }
        },
        400: {
          description: "Bad request",
          content: {
            "application/json": {
              example: {
                message: "Invalid header 'x-app-id'"
              }
            }
          }
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              example: {
                message: "Unauthorized"
              }
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
                  value: {
                    message: "Business unit not found"
                  }
                },
                productNotFound: {
                  summary: "Product not found",
                  value: {
                    message: "Product not found"
                  }
                }
              }
            }
          }
        }
      }
    }
  })

  // Merged routes from /api/products/locations/:id
  .get("/api/:bu_code/products/locations/:id", async (ctx) => {
    const {error: errorAppId} = CheckHeaderHasAppId(ctx.headers);
    if (errorAppId) {
      return errorAppId;
    }

    const {error: errorAccessToken} = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
    if (errorAccessToken) {
      return errorAccessToken;
    }

    const {bu_code, id} = ctx.params;

    const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
    if (!bu) {
      return resNotFound("Business unit not found");
    }

    const products = tbProductLocation.getProductsByLocation(id);
    return products;
  }, {
    detail: {
      tags: ["products"],
      summary: "Get products by location",
      description: "Retrieve products available at a specific location (Not implemented)",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Location ID",
          schema: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440004"
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
