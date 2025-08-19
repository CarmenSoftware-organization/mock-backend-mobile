import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '@/config/database';
import { createSuccessResponse, createErrorResponse } from '@/lib/utils/response';
import { User, AuthResponse } from '@/lib/types';

// Mock user database
const users: User[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Validation
    if (!email || !password || !name) {
      return createErrorResponse('Email, password, and name are required', 400);
    }

    if (password.length < 6) {
      return createErrorResponse('Password must be at least 6 characters', 400);
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return createErrorResponse('User already exists', 409);
    }

    // Hash password (not used in mock implementation)
    await bcrypt.hash(password, 12);

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      jwtConfig.secret as jwt.Secret,
      { expiresIn: jwtConfig.expiresIn } as jwt.SignOptions
    );

    const response: AuthResponse = {
      success: true,
      message: 'User registered successfully',
      token,
      user: newUser,
    };

    return createSuccessResponse(response, 'User registered successfully');
  } catch (error) {
    console.error('Registration error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
