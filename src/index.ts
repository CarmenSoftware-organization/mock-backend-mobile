import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import applyGeneratedRoutes from "./routes";
import { bearer } from "@elysiajs/bearer";
import { cors } from "@elysiajs/cors";

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
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        servers: [
          {
            url: `http://localhost:${PORT}`,
            description: "Development server",
          },
          {
            url: "https://mock-backend-mobile.onrender.com",
            description: "Production server",
          },
        ],
      },
    })
  )
  .use(applyGeneratedRoutes)
  .use(bearer())
  .use(cors())
  .get("/", () => "Hello Elysia")
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
