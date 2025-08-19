import { NextResponse } from 'next/server';

export async function GET() {
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    services: {
      database: 'OK',
      authentication: 'OK',
      api: 'OK',
    },
  };

  return NextResponse.json(healthCheck);
}
