import type { Elysia } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { t } from "elysia";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import {
  tbBusinessUnit,
  tbLocation,
  tbProduct,
  tbProductLocation,
  tbStockInDetail,
} from "@/mockdata";
import { getRandomInt } from "@/libs/utils";
import { PARAM_X_APP_ID } from "@mockdata/const";

export default (app: Elysia) =>
  app

    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    .get(
      "/api/:bu_code/locations/:location_id/product/:product_id/inventory",
      async (ctx) => {
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

        const { bu_code, location_id, product_id } = ctx.params;

        const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const location = tbLocation.getLocationById(location_id);
        if (!location) {
          return resNotFound("Location not found");
        }

        const product = tbProduct.getProductById(product_id);
        if (!product) {
          return resNotFound("Product not found");
        }

        const inventory =
          tbProductLocation.getProductLocationByProductAndLocation(
            product_id,
            location_id
          );
        if (!inventory) {
          return resNotFound("Inventory not found");
        }

        const on_hand_qty = getRandomInt(10, 100);
        const on_order_qty = getRandomInt(10, 100);
        const re_order_qty = (inventory.re_order_qty as unknown as number)
          ? inventory.re_order_qty
          : getRandomInt(10, 100);
        const re_stock_qty = (inventory.par_qty as unknown as number)
          ? inventory.par_qty
          : getRandomInt(10, 100);

        const res = {
          on_hand_qty: Number(on_hand_qty),
          on_order_qty: Number(on_order_qty),
          re_order_qty: Number(re_order_qty),
          re_stock_qty: Number(re_stock_qty),
        };

        return res;
      }, {
        detail: {
          tags: ["locations"],
          summary: "Get product inventory at location",
          description: "Retrieve inventory information for a specific product at a specific location",
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
              name: "location_id",
              in: "path",
              required: true,
              description: "Location ID",
              schema: {
                type: "string",
                example: "550e8400-e29b-41d4-a716-446655440001"
              }
            },
            {
              name: "product_id",
              in: "path",
              required: true,
              description: "Product ID",
              schema: {
                type: "string",
                example: "550e8400-e29b-41d4-a716-446655440002"
              }
            }
          ],
          responses: {
            200: {
              description: "Product inventory information",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      on_hand_qty: { type: "number", example: 45 },
                      on_order_qty: { type: "number", example: 20 },
                      re_order_qty: { type: "number", example: 10 },
                      re_stock_qty: { type: "number", example: 50 }
                    }
                  },
                  example: {
                    on_hand_qty: 45,
                    on_order_qty: 20,
                    re_order_qty: 10,
                    re_stock_qty: 50
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
                    locationNotFound: {
                      summary: "Location not found",
                      value: { message: "Location not found" }
                    },
                    productNotFound: {
                      summary: "Product not found",
                      value: { message: "Product not found" }
                    },
                    inventoryNotFound: {
                      summary: "Inventory not found",
                      value: { message: "Inventory not found" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    )

    .get("/api/locations", async (ctx) => {
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

      const locations = tbLocation.getLocationsByBusinessUnitCode(bu.code);
      return locations;
    }, {
      detail: {
        tags: ["locations"],
        summary: "Get locations by business unit",
        description: "Retrieve all locations for a specific business unit",
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
            description: "List of locations",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440001" },
                      name: { type: "string", example: "คลังสินค้าหลัก" },
                      code: { type: "string", example: "WH001" },
                      address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                      is_active: { type: "boolean", example: true }
                    }
                  }
                },
                example: [
                  {
                    id: "550e8400-e29b-41d4-a716-446655440001",
                    name: "คลังสินค้าหลัก",
                    code: "WH001",
                    address: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
                    is_active: true
                  }
                ]
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
    .post("/api/locations", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["locations"],
        summary: "Create new location",
        description: "Create a new location (Not implemented)",
        parameters: [PARAM_X_APP_ID],
        requestBody: {
          description: "Location data",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "คลังสินค้าใหม่" },
                  code: { type: "string", example: "WH002" },
                  address: { type: "string", example: "456 ถนนพระราม 4 แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500" },
                  is_active: { type: "boolean", example: true }
                },
                required: ["name", "code"]
              }
            }
          }
        },
        responses: {
          501: {
            description: "Not implemented",
            content: {
              "application/json": {
                example: { message: "Not implemented" }
              }
            }
          }
        }
      }
    })
    .get("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["locations"],
        summary: "Get location by ID",
        description: "Retrieve a specific location by ID (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "id",
            in: "path",
            required: true,
            description: "Location ID",
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
                example: { message: "Not implemented" }
              }
            }
          }
        }
      }
    })
    .put("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["locations"],
        summary: "Update location",
        description: "Update an existing location (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "id",
            in: "path",
            required: true,
            description: "Location ID",
            schema: {
              type: "string",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        requestBody: {
          description: "Location data",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "คลังสินค้าหลัก (ปรับปรุง)" },
                  code: { type: "string", example: "WH001" },
                  address: { type: "string", example: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110" },
                  is_active: { type: "boolean", example: true }
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
                example: { message: "Not implemented" }
              }
            }
          }
        }
      }
    })
    .patch("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["locations"],
        summary: "Partially update location",
        description: "Partially update an existing location (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "id",
            in: "path",
            required: true,
            description: "Location ID",
            schema: {
              type: "string",
              example: "550e8400-e29b-41d4-a716-446655440001"
            }
          }
        ],
        requestBody: {
          description: "Partial location data",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "คลังสินค้าหลัก (ปรับปรุง)" },
                  is_active: { type: "boolean", example: false }
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
                example: { message: "Not implemented" }
              }
            }
          }
        }
      }
    })
    .delete("/api/locations/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    }, {
      detail: {
        tags: ["locations"],
        summary: "Delete location",
        description: "Delete a location (Not implemented)",
        parameters: [
          PARAM_X_APP_ID,
          {
            name: "id",
            in: "path",
            required: true,
            description: "Location ID",
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
                example: { message: "Not implemented" }
              }
            }
          }
        }
      }
    });
