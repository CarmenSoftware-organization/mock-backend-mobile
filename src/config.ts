export const config = {
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
    host: process.env.HOST || "localhost",
  },
  
  api: {
    version: process.env.API_VERSION || "v1",
    prefix: process.env.API_PREFIX || "/api",
  },
  
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:4000",
    credentials: process.env.CORS_CREDENTIALS === "true",
  },
  
  rateLimit: {
    windowMs: process.env.RATE_LIMIT_WINDOW || "15m",
    max: process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX) : 100,
  },
  
  logging: {
    level: process.env.LOG_LEVEL || "info",
    format: process.env.LOG_FORMAT || "json",
  },
  
  environment: process.env.NODE_ENV || "development",
} as const;

export type Config = typeof config;
