import {
  APP_ID_VALUE,
  PARAM_X_APP_ID,
} from "@/mockdata/const";
import { resError, resNotFound, resUnauthorized } from "./res.error";
import { tbBusinessUnit, tbUser, tbUserProfile, tbUserTbBusinessUnit } from "@/mockdata";

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

  const bussiness_Units = tbUserTbBusinessUnit.userBusinessUnits.filter((bu: any) => bu.user_id === currentUser.id).map((bu: any) => {
    const buObject = tbBusinessUnit.businessUnits.find((b: any) => b.id === bu.business_unit_id);
    return {
      id: bu.business_unit_id,
      code: buObject?.code,
      name: buObject?.name,
      alias_name: buObject?.alias_name,
      is_default: bu.is_default,
      is_active: bu.is_active,
    };
  });

  // console.log( currentUser, userProfile, bussiness_Units);

  return { error: null, jwtUser, currentUser, userProfile, bussiness_Units };
};

