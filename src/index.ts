import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { config } from "./config";
import { usersRoutes } from "./routes/users";

const app = new Elysia()
	.use(cors({
		origin: config.cors.origin,
		credentials: config.cors.credentials,
	}))
	.use(swagger({
		path: "/swagger",
		documentation: {
			info: {
				title: "Mock Backend Mobile API",
				version: config.api.version,
			},
		},
	}))
	.onError(({ code, error, set }) => {
		switch (code) {
			case "NOT_FOUND":
				set.status = 404;
				return { error: "Resource not found" };
			case "VALIDATION":
				set.status = 400;
				return { error: "Validation failed", details: error.message };
			default:
				set.status = 500;
				return { error: "Internal server error" };
		}
	})
	.get("/health", () => ({
		status: "healthy",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
		environment: config.environment,
		version: config.api.version,
	}))
	.get("/", () => ({
		message: "Welcome to Elysia API",
		version: config.api.version,
		environment: config.environment
	}))
	.group(config.api.prefix, (app) => app.use(usersRoutes))
	.all("*", () => {
		throw new Error("Route not found");
	})
	.listen(config.server.port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
console.log(`📖 API Docs: http://localhost:${config.server.port}/swagger`);
console.log(`🏥 Health: http://localhost:${config.server.port}/health`);
console.log(`🌍 Environment: ${config.environment}`);
console.log(`🔧 API Version: ${config.api.version}`);
