import { APP_ID, PARAM_X_APP_ID } from "@/mockdata/const";
import { resUnauthorized } from "./res.error";

export const CheckHeaderHasAppId = (headers: any) => {
  let error = null;
  const appId = headers[PARAM_X_APP_ID.name];

  if (!appId) {
    error = "Invalid header '" + PARAM_X_APP_ID.name + "'";
    return { error };
  }

  if (appId !== APP_ID) {
    error =
      "Invalid header '" + PARAM_X_APP_ID.name + "' should be '" + APP_ID + "'";
    return { error };
  }

  return { error };
};

export const CheckHeaderHasAppIdAndTenantId = (headers: any) => {
  const { error: appIdError } = CheckHeaderHasAppId(headers);
  if (appIdError) {
    return { error: appIdError };
  }

  return { error: null };
};

export const CheckHeaderHasAccessToken = async (headers: any, jwt: any) => {
  const token = headers.authorization?.split(" ")[1];
  if (!token) {
    return { error: { ...resUnauthorized }, currentUser: null };
  }

  const currentUser = await jwt.verify(token);
  if (!currentUser) {
    return { error: { ...resUnauthorized }, currentUser: null };
  }

  return { error: null, currentUser };
};
