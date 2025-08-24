// Auth related shared types

 type LoginDto = {
  email: string;
  password: string;
};

 type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

 type LoginError = {
  message: string;
};

 type JWTPayload = {
  id: string;
  email: string;
};


export type { LoginDto, LoginResponse, LoginError, JWTPayload };