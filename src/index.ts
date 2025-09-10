import "./instrument";

import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import applyGeneratedRoutes from "./routes";
import { bearer } from "@elysiajs/bearer";
import { cors } from "@elysiajs/cors";
import *  as httpdocs from "@httpdocs/index";

import * as Sentry from "@sentry/bun";

const PORT = process.env.PORT || 4000;

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Mock Backend API",
          version: "1.0.0",
          description:
            "Mock backend service for mobile application development",
        },
        tags: [
          {
            name: "auth",
            description: "Authentication API",
          },
          {
            name: "user",
            description: "User API",
          },
          {
            name: "System",
            description: "System API",
          }
        ],
        components: {
          securitySchemes: {
            "Bearer": {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          }
        },
        servers: [
          {
            url: `http://localhost:${PORT}`,
            description: "Development server",
          },
          {
            url: "https://mock-backend-mobile.onrender.com",
            description: "MOCK server",
          },
          {
            url: "https://dev.blueledgers.com:4001/",
            description: "Production server",
          },
        ],
        externalDocs: {
          url: "https://www.carmensoftware.com",
          description: "Carmen Software",
        },
      },
    })
  )
  .use(applyGeneratedRoutes)
  .use(bearer())
  .use(cors())
  .get("/", () => {
    return new Response(httpdocs.defaultRootHtml(), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  })
  .onError(({ code, error }) => {
    Sentry.captureException(error);
    if (code === "VALIDATION") {
      return error.message;
    }
  })
  .get('testerror', () => {
    try {
      console.log('start test Sentry');
      throw new Error('Start test Sentry');
    } catch (e) {
      Sentry.captureException(e);
    }
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


