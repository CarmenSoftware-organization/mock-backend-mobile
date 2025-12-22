// Auth related shared types

type LoginDto = {
  email: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
};

type LoginError = {
  message: string;
  status: number;
  error: string;
};

type JWTPayload = {
  id: string;
  email: string;
};


export type { LoginDto, LoginResponse, LoginError, JWTPayload };