import { APP_ID, PARAM_X_APP_ID } from "@/mockdata/const";

export const CheckHeaderHasAppId = (headers: any) => {
  let error = null;
  if (!headers[PARAM_X_APP_ID.name]) {
    error = "Invalid header '" + PARAM_X_APP_ID.name + "'";
  }

  if (headers[PARAM_X_APP_ID.name] !== APP_ID) {
    error =
      "Invalid header '" + PARAM_X_APP_ID.name + "' should be '" + APP_ID + "'";
  }

  return { error };
};
