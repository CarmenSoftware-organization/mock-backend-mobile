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
  .get("/", () => {
    return new Response(defaultRootPathResponse(), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


const defaultRootPathResponse = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Mock Backend API</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
      <style>
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', Arial, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
          color: #1e293b;
        }
        .container {
          background: #fff;
          border-radius: 1.25rem;
          box-shadow: 0 4px 24px 0 rgba(30,41,59,0.08);
          padding: 2.5rem 2rem;
          max-width: 420px;
          width: 100%;
          text-align: center;
        }
        .logo {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 0.5rem;
          letter-spacing: -0.04em;
        }
        .subtitle {
          font-size: 1.125rem;
          color: #64748b;
          margin-bottom: 1.5rem;
        }
        .timestamp {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-top: 2rem;
        }
        @media (max-width: 600px) {
          .container {
            padding: 1.5rem 0.5rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="container" role="main" aria-label="Mock Backend API Landing">
        <div class="logo" aria-label="API Logo">🦊 Mock Backend API</div>
        <div class="subtitle">Welcome to the Mock Backend API for mobile application development.</div>
        <a href="/swagger" style="display:inline-block;margin-top:1.5rem;padding:0.75rem 1.5rem;background:#2563eb;color:#fff;border-radius:0.5rem;font-weight:600;text-decoration:none;transition:background 0.2s;" aria-label="View API Documentation" tabindex="0" onkeydown="if(event.key==='Enter'){window.location='/swagger'}">
          View API Documentation
        </a>
        <div class="timestamp" aria-label="Current Timestamp">
          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok", formatMatcher: "best fit" })}
        </div>
       
      </div>
       <footer class="timestamp" aria-label="Footer" style="margin-top:0.5rem;font-size:0.8rem;color:#94a3b8;">
        <a href="https://www.carmensoftware.com" target="_blank" style="color:#94a3b8;text-decoration:none;">www.carmensoftware.com</a> 
        </footer> 
    </body>
  </html>
`;