import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import applyGeneratedRoutes from "./routes/generated";

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
          description: "Development server"
        }
      ]
    }
  }))
  .use(applyGeneratedRoutes)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
