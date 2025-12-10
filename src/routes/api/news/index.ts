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

    .get("/api/news", async (ctx) => {

      const { error: errorAppId } = CheckHeaderHasAppId(ctx.headers);
      if (errorAppId) {
        ctx.set.status = 400;
        return errorAppId;
      }

      const news = {
        "items": [
          {
            "url": "https://www.example.com/2025/12/01/new-feature-#1",
            "title": "New feature added #1",
            "image": "https://picsum.photos/400/200"
          },
          {
            "url": "https://www.example.com/2025/12/02/new-feature-#2",
            "title": "New feature added #2",
            "image": "https://picsum.photos/400/200"
          },
          {
            "url": "https://www.example.com/2025/12/03/new-feature-#3",
            "title": "New feature added #3",
            "image": "https://picsum.photos/400/200"
          }
        ]
      }
      return news;

    }, {
      detail: {
        tags: ["news"],
        summary: "Get latest news feed",
        description: "Retrieve the latest news in JSON Feed format",
        parameters: [
          PARAM_X_APP_ID
        ]
      }
    });
