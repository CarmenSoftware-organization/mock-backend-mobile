import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse, createPaginatedResponse } from '@/lib/utils/response';
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

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    // Filter users based on search
    let filteredUsers = users;
    if (search) {
      filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return createPaginatedResponse(
      paginatedUsers,
      page,
      limit,
      filteredUsers.length,
      'Users retrieved successfully'
    );
  } catch (error) {
    console.error('Get users error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check admin permissions
    const authResult = await requireAdmin()(request);
    if (authResult) return authResult;

    const body = await request.json();
    const { email, name, role } = body;

    // Validation
    if (!email || !name || !role) {
      return createErrorResponse('Email, name, and role are required', 400);
    }

    if (!['user', 'admin'].includes(role)) {
      return createErrorResponse('Invalid role. Must be "user" or "admin"', 400);
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return createErrorResponse('User already exists', 409);
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: role as 'user' | 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(newUser);

    return createSuccessResponse(newUser, 'User created successfully');
  } catch (error) {
    console.error('Create user error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
