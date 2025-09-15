import {
  resBadRequest,
  resError,
  resErrorWithData,
  resNotFound,
  resNotImplemented,
  resSuccess,
} from "@/libs/res.error";
import type { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { CheckHeaderHasAccessToken, CheckHeaderHasAppId } from "@/libs/header";
import {
  tbBusinessUnit,
  tbPurchaseRequest,
  tbPurchaseRequestDetail,
} from "@/mockdata";
import { t } from "elysia";
import {
  CalculatePurchaseRequestDetail,
  PurchaseRequestApproval,
} from "@/mockdata/tb_purchase_request";
import { getCalculatePriceInfo } from "@/libs/calculate.priceinfo";

export default (app: Elysia) =>
  app
    .use(
      jwt({
        name: "jwt",
        secret: process.env.JWT_SECRET || "secret",
      })
    )

    // create model from PurchaseRequestApproval
    .model({
      PurchaseRequestApproval: t.Object({
        state_role: t.Enum({
          approve: "approve",
          create: "create",
          purchase: "purchase",
          view_only: "view_only",
        }),
      }),
      PurchaseRequestApprovalItem: t.Object({
        id: t.String({
          description: "Purchase request detail id",
          required: true,
        }),
        state_status: t.Enum(
          {
            approve: "approve",
            reject: "reject",
            review: "review",
          },
          {
            required: true,
          }
        ),
        state_message: t.String({
          description: "State message",
          required: false,
        }),
        description: t.String({
          description: "Description",
          required: false,
        }),
        approved_qty: t.Number({
          description: "Approved quantity",
          required: false,
        }),
        approved_unit_id: t.String({
          required: false,
          description: "Approved unit id",
        }),
        approved_unit_conversion_factor: t.Number({
          required: false,
          description: "Approved unit conversion factor",
        }),
        approved_base_qty: t.Number({
          required: false,
          description: "Approved base quantity",
        }),
      }),
    })

    .post(
      "/api/:bu_code/purchase-request",
      ({ params, query, body, headers }) => {
        return Response.json(resNotImplemented, { status: 501 });
      }
    )

    .get("/api/:bu_code/purchase-request/:id", async (ctx) => {
      const { bu_code, id } = ctx.params;

      // check x-app-id
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

      const pr = tbPurchaseRequest.getPurchaseRequestById(id);
      if (!pr) {
        return resNotFound("Purchase request not found");
      }

      let purchaseRequestDetail = [];

      const prdByPrId =
        tbPurchaseRequestDetail.getPurchaseRequestDetailsByPurchaseRequestId(
          pr.id
        );

      for (const prd of prdByPrId) {
        purchaseRequestDetail.push(prd);
      }

      let prWithDetail = {
        ...pr,
        purchase_request_detail: purchaseRequestDetail,
      };

      const res = {
        bu_code: bu_code,
        bu_name: bu.name,
        data: prWithDetail,
      };

      return res;
    })

    .delete("/api/:bu_code/purchase-request/:id", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .patch("/api/:bu_code/purchase-request/:id/submit", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .patch(
      "/api/:bu_code/purchase-request/:id/approve",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Approve a purchase request",
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/reject",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
          if (item.state_status !== "reject") {
            return resBadRequest(
              "Invalid state status (" + item.state_status + ")"
            );
          }
          if (!item.state_message) {
            return resBadRequest("State message is required");
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Reject a purchase request",
      }
    )

    .patch(
      "/api/:bu_code/purchase-request/:id/review",
      async (ctx) => {
        const { bu_code, id } = ctx.params;

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

        const purchaseRequest = tbPurchaseRequest.getPurchaseRequestById(id);
        if (!purchaseRequest) {
          return resNotFound("Purchase request not found");
        }

        const body = (await ctx.body) as PurchaseRequestApproval | undefined;
        if (!body) {
          return resBadRequest("Invalid body");
        }

        if (body.state_role !== "approve") {
          return resBadRequest("Invalid state role");
        }

        const destination = body.destination;
        if (!destination) {
          return resBadRequest("Destination is required");
        }

        for (const item of body.body) {
          const purchaseRequestDetail =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(item.id);
          if (!purchaseRequestDetail) {
            return resNotFound(
              "Purchase request detail " + item.id + " not found"
            );
          }
        }

        return { data: purchaseRequest.id };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Review a purchase request",
      }
    )
    .patch("/api/:bu_code/purchase-request/:id/save", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })
    .get("/api/:bu_code/purchase-request/status/:status", (ctx) => {
      return Response.json(resNotImplemented, { status: 501 });
    })

    .get(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/dimension",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const {
          error: errorAccessToken,
          userProfile,
          bussiness_Units,
        } = await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        try {
          const bu = bussiness_Units?.find((bu) => bu.code === bu_code);
          if (!bu) {
            return resNotFound("Business unit not found");
          }
          const prd =
            tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
          if (!prd) {
            return resNotFound("Purchase request detail not found");
          }
          const dimension = prd.dimension;
          const res = {
            data: dimension,
          };
          return res;
        } catch (error) {
          return resErrorWithData(500, "error", error);
        }
      }
    )

    .model({
      CalculatePurchaseRequestDetail: t.Object({
        qty: t.Number({
          required: true,
        }),
      }),
    })
    .post(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/calculate",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const body = (await ctx.body) as
          | CalculatePurchaseRequestDetail
          | undefined;

        if (!body) {
          return resBadRequest("Invalid body");
        }

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = bussiness_Units?.find((bu) => bu.code === bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }
        const prd =
          tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
        if (!prd) {
          return resNotFound("Purchase request detail not found");
        }

        const qty = body.qty;

        if (!qty) {
          return resBadRequest("Qty is required");
        }

        const currency_rate = 35.5;

        // mock simple data
        const pricelist = {
          price: prd.pricelist_price || 0,
          unit: prd.pricelist_unit,
          tax_rate: prd.tax_rate || 0,
          is_tax_adjustment: prd.is_tax_adjustment,
          discount_rate: prd.discount_rate || 0,
          is_discount_adjustment: prd.is_discount_adjustment,
        };

        // const sub_total_price = qty * pricelist.price;
        // const discount_amount =
        //   (qty * pricelist.price * pricelist.discount_rate) / 100;
        // const net_amount = qty * pricelist.price - discount_amount;
        // const tax_amount = (qty * pricelist.price * pricelist.tax_rate) / 100;
        // const total_amount = sub_total_price + tax_amount - discount_amount;
        // const base_total_amount =
        //   (sub_total_price + tax_amount - discount_amount) * currency_rate;

        // const res = {
        //   sub_total_price: sub_total_price,
        //   discount_percentage: pricelist.discount_rate,
        //   discount_amount: discount_amount,

        //   net_amount: net_amount,

        //   tax_percentage: pricelist.tax_rate,
        //   tax_amount: tax_amount,

        //   total_amount: total_amount,
        //   base_total_amount: base_total_amount,
        //   currency_rate,
        // };

        const res = getCalculatePriceInfo(
          qty,
          pricelist.price,
          currency_rate,
          pricelist.tax_rate,
          pricelist.is_tax_adjustment,
          0,
          pricelist.discount_rate,
          pricelist.is_discount_adjustment,
          0,
        );
        return { data: res };
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Calculate a purchase request detail",
      }
    )
    .get(
      "/api/:bu_code/purchase-request/detail/:pr_detail_id/history",
      async (ctx) => {
        const { bu_code, pr_detail_id } = ctx.params;

        const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
        if (errorAppId) {
          ctx.set.status = 400;
          return errorAppId;
        }

        const { error: errorAccessToken, bussiness_Units } =
          await CheckHeaderHasAccessToken(ctx.headers, ctx.jwt);
        if (errorAccessToken) {
          ctx.set.status = 401;
          return errorAccessToken;
        }

        const bu = bussiness_Units?.find((bu) => bu.code === bu_code);
        if (!bu) {
          return resNotFound("Business unit not found");
        }

        const prd =
          tbPurchaseRequestDetail.getPurchaseRequestDetailById(pr_detail_id);
        if (!prd) {
          return resNotFound("Purchase request detail not found");
        }

        const history = prd.history;
        const res = {
          data: history,
        };
        return res;
      },
      {
        type: "json",
        tags: ["Application - Purchase Request"],
        description: "Get a purchase request detail history",
      }
    );
