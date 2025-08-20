// Elysia API Types

export interface User {
  id: number
  username: string
  email: string
  role: 'admin' | 'user'
}

export interface Post {
  id: number
  title: string
  content: string
  author: string
  createdAt?: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface RegisterRequest {
  username: string
  email: string
  password: string
}

export interface CreatePostRequest {
  title: string
  content: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface LoginResponse {
  success: boolean
  message: string
  token: string
  user: User
}

export interface AuthUser {
  id: number
  username: string
  role: string
  iat?: number
}

// JWT Payload
export interface JWTPayload {
  id: number
  username: string
  role: string
  iat: number
  exp: number
}

// API Error Types
export interface ApiError {
  code: string
  message: string
  details?: unknown
}

// Pagination Types
export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Search Types
export interface SearchParams {
  query: string
  fields?: string[]
  filters?: Record<string, unknown>
}

// Filter Types
export interface FilterParams {
  [key: string]: string | number | boolean | string[]
}

// Sort Types
export interface SortParams {
  field: string
  order: 'asc' | 'desc'
}
