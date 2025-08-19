import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '@/config/database';
import { createSuccessResponse, createErrorResponse } from '@/lib/utils/response';
import { AuthResponse } from '@/lib/types';

// Mock user database with passwords
const users = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin' as const,
    password: '$2b$12$iqNpU4S1GkYydd3eN7uAJeRvwrZkkU9OMOYdGwDjEpjgCaRB2VsPK', // password123
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user' as const,
    password: '$2b$12$iqNpU4S1GkYydd3eN7uAJeRvwrZkkU9OMOYdGwDjEpjgCaRB2VsPK', // password123
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return createErrorResponse('Email and password are required', 400);
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtConfig.secret as jwt.Secret,
      { expiresIn: jwtConfig.expiresIn } as jwt.SignOptions
    );

    const response: AuthResponse = {
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };

    return createSuccessResponse(response, 'Login successful');
  } catch (error) {
    console.error('Login error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
