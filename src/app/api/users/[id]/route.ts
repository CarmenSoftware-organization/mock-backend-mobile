import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse } from '@/lib/utils/response';
import { requireAdmin, requireUser } from '@/lib/middleware/auth';
import { User } from '@/lib/types';

// Mock user database
const users: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;
    const user = users.find(u => u.id === id);

    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    return createSuccessResponse(user, 'User retrieved successfully');
  } catch (error) {
    console.error('Get user error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // Check admin permissions
    const authResult = await requireAdmin()(request);
    if (authResult) return authResult;
    const body = await request.json();
    const { email, name, role } = body;

    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return createErrorResponse('User not found', 404);
    }

    // Validation
    if (!email || !name || !role) {
      return createErrorResponse('Email, name, and role are required', 400);
    }

    if (!['user', 'admin'].includes(role)) {
      return createErrorResponse('Invalid role. Must be "user" or "admin"', 400);
    }

    // Check if email is already taken by another user
    const existingUser = users.find(u => u.email === email && u.id !== id);
    if (existingUser) {
      return createErrorResponse('Email already taken', 409);
    }

    // Update user
    users[userIndex] = {
      ...users[userIndex],
      email,
      name,
      role: role as 'user' | 'admin',
      updatedAt: new Date(),
    };

    return createSuccessResponse(users[userIndex], 'User updated successfully');
  } catch (error) {
    console.error('Update user error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // Check admin permissions
    const authResult = await requireAdmin()(request);
    if (authResult) return authResult;
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return createErrorResponse('User not found', 404);
    }

    // Remove user
    const deletedUser = users.splice(userIndex, 1)[0];

    return createSuccessResponse(deletedUser, 'User deleted successfully');
  } catch (error) {
    console.error('Delete user error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
