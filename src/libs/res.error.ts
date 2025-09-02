
// Utility function for not implemented endpoints
export const resNotImplemented = {
  success: false,
  error: "Not Implemented",
  message: "This endpoint is not implemented yet",
  timestamp: new Date().toISOString(),
};

export const resBadRequest = {
  status: 400,
  message: "Bad Request",
  timestamp: new Date().toISOString(),
};

export const resSuccess = (message: string = "Success") => {
  return {
    status: 200,
    message: message,
    timestamp: new Date().toISOString(),
  };
};

export const resUnauthorized = (message: string = "Unauthorized") => {
  return {
    status: 401,
    message: message,
    timestamp: new Date().toISOString(),
  };
};


export const resSuccessWithData = (message: string = "Success", data: any) => {
  return {
    status: 200,
    message: message,
    data: data,
    timestamp: new Date().toISOString(),
  };
};

export const resInternalServerError = (message: string = "Internal Server Error") => {
  return {
    status: 500,
    message: message,
    timestamp: new Date().toISOString(),
  };
};

export const resNotFound = (message: string = "Not Found") => {
  return {
    status: 404,
    message: message,
    timestamp: new Date().toISOString(),
  };
};

export const resError = (status: number, message: string = "Unknown error") =>  {
  return {
    status: status,
    message: message,
    timestamp: new Date().toISOString(),
  };
};

export const resErrorWithData = (status: number, message: string = "Unknown error", data: any) => {
  return {
    status: status,
    message: message,
    data: data,
    timestamp: new Date().toISOString(),
  };
};


