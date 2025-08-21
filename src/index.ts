import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import applyGeneratedRoutes from "./routes";

const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
        title: "Mock Backend API",
        version: "1.0.0",
        description: "Mock backend service for mobile application development"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local server"
        },
        {
          url: "https://mock-backend-mobile.onrender.com",
          description: "Production server"
        }
      ],
      security: [
        {
          bearerAuth: []
        },
      ]
    }
  }))
  .use(applyGeneratedRoutes)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
