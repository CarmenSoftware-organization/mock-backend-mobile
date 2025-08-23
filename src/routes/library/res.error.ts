import { t } from "elysia";

// Utility function for not implemented endpoints
export const resNotImplemented = {
  success: false,
  error: "Not Implemented",
  message: "This endpoint is not implemented yet",
  timestamp: new Date().toISOString(),
};

export const resBadRequest = t.Object({
  message: t.String({
    default: "Bad Request",
  }),
});

export const resUnauthorized = t.Object({
  message: t.String({
    default: "Unauthorized",
  }),
});

export const resInternalServerError = t.Object({
  message: t.String({
    default: "Internal Server Error",
  }),
});

export const resNotFound = t.Object({
  message: t.String({
    default: "Not Found",
  }),
});

export const resError = t.Object({
  message: t.String(),
});

export const resErrorWithStatus = t.Object({
  message: t.String(),
  status: t.Number(),
});

export const resErrorWithStatusAndData = t.Object({
  message: t.String(),
  status: t.Number(),
  data: t.Any(),
});

export const resErrorWithStatusAndDataAndMessage = t.Object({
  status: t.Number(),
  message: t.String(),
  data: t.Any(),
});

export const resErrorWithStatusAndDataAndMessageAndStatus = t.Object({
  status: t.Number(),
  message: t.String(),
  data: t.Any(),
});



