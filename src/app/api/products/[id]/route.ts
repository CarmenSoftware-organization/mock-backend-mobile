import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse } from '@/lib/utils/response';
import { requireUser } from '@/lib/middleware/auth';
import { Product } from '@/lib/types';

// Mock product database
const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced features',
    price: 999.99,
    category: 'Electronics',
    stock: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    description: 'Powerful laptop with M2 chip',
    price: 1199.99,
    category: 'Electronics',
    stock: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'AirPods Pro',
    description: 'Wireless earbuds with noise cancellation',
    price: 249.99,
    category: 'Electronics',
    stock: 100,
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
    const product = products.find(p => p.id === id);

    if (!product) {
      return createErrorResponse('Product not found', 404);
    }

    return createSuccessResponse(product, 'Product retrieved successfully');
  } catch (error) {
    console.error('Get product error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;
    const body = await request.json();
    const { name, description, price, category, stock } = body;

    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      return createErrorResponse('Product not found', 404);
    }

    // Validation
    if (!name || !description || !price || !category || stock === undefined) {
      return createErrorResponse('All fields are required', 400);
    }

    if (price <= 0) {
      return createErrorResponse('Price must be greater than 0', 400);
    }

    if (stock < 0) {
      return createErrorResponse('Stock cannot be negative', 400);
    }

    // Update product
    products[productIndex] = {
      ...products[productIndex],
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
      updatedAt: new Date(),
    };

    return createSuccessResponse(products[productIndex], 'Product updated successfully');
  } catch (error) {
    console.error('Update product error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
      return createErrorResponse('Product not found', 404);
    }

    // Remove product
    const deletedProduct = products.splice(productIndex, 1)[0];

    return createSuccessResponse(deletedProduct, 'Product deleted successfully');
  } catch (error) {
    console.error('Delete product error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
