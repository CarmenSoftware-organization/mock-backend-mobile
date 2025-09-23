
/**
 * Default root HTML page for the Mock Backend API
 * Provides a landing page with API documentation link and timestamp
 *
 * @returns HTML string for the root page
 */
export const defaultRootHtml = (): string => {
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
    formatMatcher: "best fit"
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Mock Backend API for mobile application development" />
    <meta name="theme-color" content="#2563eb" />
    <title>Mock Backend API</title>

    <!-- Preconnect to external domains for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

    <style>
      /* CSS Reset and Base Styles */
      *, *::before, *::after {
        box-sizing: border-box;
      }

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
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
        color: #1e293b;
        line-height: 1.6;
      }

      /* Main Container */
      .container {
        background: #fff;
        border-radius: 1.25rem;
        box-shadow:
          0 4px 24px 0 rgba(30, 41, 59, 0.08),
          0 1px 3px 0 rgba(30, 41, 59, 0.1);
        padding: 2.5rem 2rem;
        max-width: 28rem;
        width: calc(100% - 2rem);
        text-align: center;
        margin: 1rem;
      }

      /* Logo */
      .logo {
        font-size: 2.5rem;
        font-weight: 700;
        color: #2563eb;
        margin-bottom: 0.5rem;
        letter-spacing: -0.04em;
        line-height: 1.2;
      }

      /* Subtitle */
      .subtitle {
        font-size: 1.125rem;
        color: #64748b;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      /* CTA Button */
      .cta-button {
        display: inline-block;
        margin-top: 0.5rem;
        padding: 0.875rem 2rem;
        background: #2563eb;
        color: #fff;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        border: 2px solid transparent;
        cursor: pointer;
      }

      .cta-button:hover,
      .cta-button:focus {
        background: #1d4ed8;
        transform: translateY(-1px);
        box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
        outline: none;
      }

      .cta-button:focus {
        border-color: #60a5fa;
      }

      .cta-button:active {
        transform: translateY(0);
      }

      /* Timestamp */
      .timestamp {
        font-size: 0.875rem;
        color: #94a3b8;
        margin-top: 2rem;
        font-variant-numeric: tabular-nums;
      }

      /* Footer */
      .footer {
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #94a3b8;
      }

      .footer-link {
        color: #94a3b8;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }

      .footer-link:hover,
      .footer-link:focus {
        color: #2563eb;
        outline: none;
      }

      /* Responsive Design */
      @media (max-width: 640px) {
        .container {
          padding: 2rem 1.5rem;
          margin: 0.5rem;
        }

        .logo {
          font-size: 2rem;
        }

        .subtitle {
          font-size: 1rem;
        }

        .cta-button {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .container {
          padding: 1.5rem 1rem;
        }

        .logo {
          font-size: 1.75rem;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .cta-button {
          transition: none;
        }

        .cta-button:hover {
          transform: none;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .container {
          border: 2px solid #1e293b;
        }

        .cta-button {
          border: 2px solid #1e293b;
        }
      }
    </style>
  </head>
  <body>
    <main class="container" role="main">
      <header>
        <h1 class="logo">🦊 Mock Backend API</h1>
        <p class="subtitle">Welcome to the Mock Backend API for mobile application development.</p>
      </header>

      <section>
        <a
          href="/swagger"
          class="cta-button"
          aria-label="View API Documentation - Opens in same window"
          role="button"
        >
          View API Documentation
        </a>
      </section>

      <footer class="timestamp" role="contentinfo">
        <time datetime="${new Date().toISOString()}" aria-label="Last updated time">
          ${currentTime}
        </time>
        <div class="footer">
          <a
            href="https://www.carmensoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
            aria-label="Visit Carmen Software website - Opens in new window"
          >
            www.carmensoftware.com
          </a>
        </div>
      </footer>
    </main>
  </body>
</html>`;
};
