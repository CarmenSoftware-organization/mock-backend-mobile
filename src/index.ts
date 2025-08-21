import { Elysia } from "elysia";
import applyGeneratedRoutes from "./routes/generated";

const app = new Elysia()
  .use(applyGeneratedRoutes)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
