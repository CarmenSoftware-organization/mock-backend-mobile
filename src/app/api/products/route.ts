import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse, createPaginatedResponse } from '@/lib/utils/response';
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

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    // Filter products
    let filteredProducts = products;

    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(product =>
        product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product =>
        product.price <= parseFloat(maxPrice)
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return createPaginatedResponse(
      paginatedProducts,
      page,
      limit,
      filteredProducts.length,
      'Products retrieved successfully'
    );
  } catch (error) {
    console.error('Get products error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authResult = await requireUser()(request);
    if (authResult) return authResult;

    const body = await request.json();
    const { name, description, price, category, stock } = body;

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

    // Create new product
    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    products.push(newProduct);

    return createSuccessResponse(newProduct, 'Product created successfully');
  } catch (error) {
    console.error('Create product error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}
