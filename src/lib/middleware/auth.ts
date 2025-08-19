import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '@/config/database';
import { User } from '../types';

export interface AuthenticatedRequest extends NextRequest {
  user?: User;
}

export const authenticateToken = async (
  request: NextRequest
): Promise<NextResponse | null> => {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Access token required' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, jwtConfig.secret as jwt.Secret) as User;
    (request as AuthenticatedRequest).user = decoded;
    
    return null; // Continue to next middleware/route
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 403 }
    );
  }
};

export const requireRole = (allowedRoles: string[]) => {
  return async (request: NextRequest): Promise<NextResponse | null> => {
    const authResult = await authenticateToken(request);
    if (authResult) return authResult;

    const user = (request as AuthenticatedRequest).user;
    if (!user || !allowedRoles.includes(user.role)) {
      return NextResponse.json(
        { success: false, message: 'Insufficient permissions' },
        { status: 403 }
      );
    }

    return null;
  };
};

export const requireAuth = () => authenticateToken;
export const requireAdmin = () => requireRole(['admin']);
export const requireUser = () => requireRole(['user', 'admin']);
