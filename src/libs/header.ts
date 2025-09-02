import {
  APP_ID_VALUE,
  PARAM_X_APP_ID,
  PARAM_X_TENANT_ID,
} from "@/mockdata/const";
import { resError, resNotFound, resUnauthorized } from "./res.error";
import { tbUser, tbUserProfile } from "@/mockdata";

export const CheckHeaderHasAppId = (headers: any) => {
  let error = null;
  const appId = headers[PARAM_X_APP_ID.name];

  if (!appId) {
    error = "Invalid header '" + PARAM_X_APP_ID.name + "'";
    return { error: resError(400, error) };
  }

  if (appId !== APP_ID_VALUE) {
    error =
      "Invalid header '" +
      PARAM_X_APP_ID.name +
      "' should be '" +
      APP_ID_VALUE +
      "'";
    return { error: resError(400, error) };
  }

  return { error: null };
};

export const CheckHeaderHasTenantId = (headers: any) => {
  const tenantId = headers[PARAM_X_TENANT_ID.name];
  if (!tenantId) {
    return {
      error: resError(400, "Invalid header '" + PARAM_X_TENANT_ID.name + "'"),
    };
  }
  return { error: null };
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
    return { error: { ...resUnauthorized() }, jwtUser: null, currentUser: null, userProfile: null };
  }

  const jwtUser = await jwt.verify(token);
  if (!jwtUser) {
    return { error: { ...resUnauthorized() }, jwtUser: null, currentUser: null, userProfile: null };
  }

  const currentUser = tbUser.users.find((user: any) => user.id === jwtUser.id);
  if (!currentUser) {
    return { error: { ...resNotFound('User not found') }, jwtUser: null, currentUser: null, userProfile: null };
  }

  const userProfile = tbUserProfile.userProfiles.find((profile: any) => profile.user_id === jwtUser.id);
  if (!userProfile) {
    return { error: { ...resNotFound('User profile not found') }, jwtUser: null, currentUser: null, userProfile: null };
  }

  return { error: null, jwtUser, currentUser, userProfile };
};
