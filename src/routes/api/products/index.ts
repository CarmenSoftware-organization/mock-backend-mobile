import type { Elysia } from "elysia";
import { t } from "elysia";
import { resNotFound, resNotImplemented } from "@/libs/res.error";
import { jwt } from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import { tbBusinessUnit, tbCurrency, tbExchangeRate, tbGoodReceivedNote, tbGoodReceivedNoteDetail, tbInventoryTransactionDetail, tbLocation, tbPricelist, tbPricelistDetail, tbProduct, tbProductLocation, tbPurchaseOrder, tbPurchaseOrderDetail, tbUnitConversion } from "@/mockdata";
import { PARAM_X_APP_ID } from "@mockdata/const";
import { LastPurchaseByProductId, PriceListByProductId } from "@/mockdata/tb_product";

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


      const on_hand = tbInventoryTransactionDetail.getProductOnHand(location_id, product_id);
      return { data: on_hand };

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
      return { data: on_order };
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
      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        return errorAccessToken;
      }

      const { bu_code, id } = ctx.params;

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
    })

    .get("/api/:bu_code/product/:product_id/last-purchase/:at_date", async (ctx) => {

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const { bu_code, product_id } = ctx.params;

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const product = tbProduct.getProductById(product_id);
      if (!product) {
        return resNotFound("Product not found");
      }

      let res: LastPurchaseByProductId = {
        at_date: new Date(ctx.params.at_date),
        vendor_id: "",
        vendor_name: "",
        last_purchase_price: 0.00,
        last_purchase_date: null,
        currency_id: "",
        currency_name: "",
        exchange_rate: 1.00000
      };

      // find last good received note that contains this product
      const grnDetail = tbGoodReceivedNoteDetail.getLastGoodReceivedNoteDetailsByProductId(product_id);
      if (!grnDetail && grnDetail.length === 0) {
        return res;
      }

      console.log("grnDetail", grnDetail);

      const grn = tbGoodReceivedNote.getGoodReceivedNoteById(grnDetail[0].good_received_note_id);
      if (!grn) {
        return res;
      }

      res.at_date = new Date(ctx.params.at_date).toISOString();
      res.last_purchase_price = (grnDetail[0].price);
      res.last_purchase_date = grn.grn_date;
      res.vendor_id = grn.vendor_id;
      res.vendor_name = grn.vendor_name;
      res.currency_id = grn.currency_id;
      res.currency_name = grn.currency_name;
      res.exchange_rate = grn.currency_rate;

      return res;

    }, {
      detail: {
        tags: ["products"],
        summary: "Get last purchase info for a product",
        description: "Retrieve the last purchase details for a specific product",
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
            description: "Last purchase details",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    vendor_name: { type: "string", nullable: true, example: "Dell Technologies" },
                    last_purchase_price: { type: "number", nullable: true, example: 1500.00 },
                    last_purchase_date: { type: "string", format: "date-time", nullable: true, example: "2023-10-01T10:00:00Z" },
                    currency_id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440003" },
                    currency_name: { type: "string", example: "Thai Baht" },
                    exchange_rate: { type: "number", example: 1.00000 }
                  }
                },
                example: {
                  vendor_name: "Dell Technologies",
                  last_purchase_price: 1500.00,
                  last_purchase_date: "2023-10-01T10:00:00Z",
                  currency_id: "550e8400-e29b-41d4-a716-446655440003",
                  currency_name: "Thai Baht",
                  exchange_rate: 1.00000
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

    .get("/api/:bu_code/product/:product_id/price-list/:at_date", async (ctx) => {

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const { error: errorAccessToken } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
      if (errorAccessToken) {
        ctx.set.status = 401;
        return errorAccessToken;
      }

      const { bu_code, product_id } = ctx.params;

      const bu = tbBusinessUnit.getBusinessUnitByCode(bu_code);
      if (!bu) {
        return resNotFound("Business unit not found");
      }

      const product = tbProduct.getProductById(product_id);
      if (!product) {
        return resNotFound("Product not found");
      }

      let res: PriceListByProductId = {
        at_date: new Date(ctx.params.at_date),
        pricelist: []
      };

      // get product pricelist 
      const pricelistDetail = tbPricelistDetail.getPricelistDetailsByProductId(product_id);
      if (!pricelistDetail || pricelistDetail.length === 0) {
        return res;
      }

      // for (const pl in pricelistDetail) {
      //   const h = tbPricelist.getPricelistById(pl.pricelist_id);
      //   if (h) {
      //     res.pricelist.push({
      //       vendor_id: h ? h.vendor_id : null,
      //       vendor_name: h ? h.vendor_name : null,
      //       price: pl ? pl.price : null,
      //       currency_id: h ? h.currency_id : null,
      //       currency_name: h ? h.currency_name : null,
      //       exchange_rate: h ? h.currency_rate : null
      //     });
      //   }
      // }

      // mock data random 5 loop data from pricelistDetail

      for (let i = 0; i < 5; i++)
      {
        const pl = pricelistDetail[Math.floor(Math.random() * pricelistDetail.length)];
        const h = tbPricelist.getPricelistById(pl.pricelist_id);
        if (h) {
          const rate = tbExchangeRate.getActiveExchangeRateByCurrencyId(h.currency_id);
          const data = {
            vendor_id: h ? h.vendor_id : "",
            vendor_name: h ? h.vendor_name : "",
            price: pl ? pl.price : 0.00,
            currency_id: h ? h.currency_id : "",
            currency_name: h ? h.currency_name : "",
            exchange_rate: h ? rate?.exchange_rate : 1.00000
          };
          res.pricelist.push(data);
        }
        i++;
      }

      const uniqueArray = [...new Set(res.pricelist.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));
      res.pricelist = uniqueArray.sort((a, b) => a.price - b.price);
      return res;

    }, {
      detail: {
        tags: ["products"],
        summary: "Get price list for a product",
        description: "Retrieve the price list details for a specific product",
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
            description: "Price list details",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    at_date: { type: "string", format: "date-time", example: "2023-10-01T00:00:00Z" },
                    pricelist: {
                      type: "array", items: {
                        type: "object", properties: {
                          price_list_name: { type: "string", example: "Standard Price List" },
                          price: { type: "number", example: 2000.00 },
                          currency_id: { type: "string", example: "550e8400-e29b-41d4-a716-446655440003" },
                          currency_name: { type: "string", example: "Thai Baht" },
                          exchange_rate: { type: "number", example: 1.00000 }
                        }
                      }
                    }
                  }
                },
                example: {
                  at_date: "2023-10-01T00:00:00Z",
                  pricelist: [
                    {
                      price_list_name: "Standard Price List",
                      price: 2000.00,
                      currency_id: "550e8400-e29b-41d4-a716-446655440003",
                      currency_name: "Thai Baht",
                      exchange_rate: 1.00000
                    }
                  ]
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
  ;
