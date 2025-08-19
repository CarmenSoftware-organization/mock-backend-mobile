import { NextResponse } from 'next/server';
import { ApiResponse } from '../types';

export const createSuccessResponse = <T>(
  data: T,
  message: string = 'Success'
): NextResponse<ApiResponse<T>> => {
  return NextResponse.json({
    success: true,
    message,
    data,
  });
};

export const createErrorResponse = (
  message: string = 'Error occurred',
  status: number = 400
): NextResponse<ApiResponse<null>> => {
  return NextResponse.json(
    {
      success: false,
      message,
      error: message,
    },
    { status }
  );
};

export const createPaginatedResponse = <T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
  message: string = 'Success'
): NextResponse<ApiResponse<{
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}>> => {
  const totalPages = Math.ceil(total / limit);
  
  return NextResponse.json({
    success: true,
    message,
    data: {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    },
  });
};
