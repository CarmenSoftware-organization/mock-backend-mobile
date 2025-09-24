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
            name: "Mock",
            description: "Mock data endpoints for development and testing",
          },
          {
            name: "auth",
            description: "Authentication and authorization endpoints",
          },
          {
            name: "user",
            description: "User management and profile endpoints",
          },
          {
            name: "products",
            description: "Product management, inventory, and catalog endpoints",
          },
          {
            name: "purchase",
            description: "Purchase orders, requests, and procurement endpoints",
          },
          {
            name: "inventory",
            description: "Inventory management, physical count, and spot check endpoints",
          },
          {
            name: "locations",
            description: "Location and warehouse management endpoints",
          },
          {
            name: "vendors",
            description: "Vendor and supplier management endpoints",
          },
          {
            name: "business",
            description: "Business unit, department, and organizational endpoints",
          },
          {
            name: "finance",
            description: "Financial management, credit terms, and currency endpoints",
          },
          {
            name: "workflow",
            description: "Workflow and approval process management endpoints",
          },
          {
            name: "System",
            description: "System administration and configuration endpoints",
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
  // .get('testerror', () => {
  //   try {
  //     console.log('start test Sentry');
  //     throw new Error('Start test Sentry');
  //   } catch (e) {
  //     Sentry.captureException(e);
  //   }
  // })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


