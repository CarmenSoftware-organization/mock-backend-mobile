import {
  APP_ID_VALUE,
  PARAM_X_APP_ID,
} from "@/mockdata/const";
import { resError, resNotFound, resUnauthorized } from "./res.error";
import { tbBusinessUnit, tbUser, tbUserProfile, tbUserTbBusinessUnit } from "@/mockdata";

// Type definitions
export interface HeaderValidationResult {
  error: any | null;
}

export interface BusinessUnit {
  id: string;
  code?: string;
  name?: string;
  alias_name?: string;
  is_default: boolean;
  is_active: boolean;
}

export interface AccessTokenValidationResult {
  error: any | null;
  jwtUser?: any;
  currentUser?: any;
  userProfile?: any;
  businessUnits?: BusinessUnit[];
}

export interface Headers {
  [key: string]: string | undefined;
  authorization?: string;
}

export interface JWTPayload {
  id: string;
  [key: string]: any;
}

/**
 * Validates the presence and correctness of the X-App-ID header
 *
 * @param headers - Request headers object
 * @returns Object containing validation result and potential error
 */
export const CheckHeaderHasAppId = (headers: Headers): HeaderValidationResult => {
  const appId = headers[PARAM_X_APP_ID.name];

  if (!appId) {
    const error = `Invalid header '${PARAM_X_APP_ID.name}'`;
    return { error: resError(400, error) };
  }

  if (appId !== APP_ID_VALUE) {
    const error = `Invalid header '${PARAM_X_APP_ID.name}' should be '${APP_ID_VALUE}'`;
    return { error: resError(400, error) };
  }

  return { error: null };
};

/**
 * Validates both App ID and Tenant ID headers (currently only validates App ID)
 *
 * @param headers - Request headers object
 * @returns Object containing validation result and potential error
 */
export const CheckHeaderHasAppIdAndTenantId = (headers: Headers): HeaderValidationResult => {
  const { error: appIdError } = CheckHeaderHasAppId(headers);
  if (appIdError) {
    return { error: appIdError };
  }

  // TODO: Add tenant ID validation when implemented
  return { error: null };
};

/**
 * Validates JWT access token and retrieves associated user data
 *
 * @param headers - Request headers object containing authorization header
 * @param jwt - JWT verification utility
 * @returns Object containing validation result, user data, and business units
 */
export const CheckHeaderHasAccessToken = async (
  headers: Headers,
  jwt: any
): Promise<AccessTokenValidationResult> => {
  // Extract Bearer token from Authorization header
  const authHeader = headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      error: resUnauthorized(),
      jwtUser: null,
      currentUser: null,
      userProfile: null,
      businessUnits: []
    };
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return {
      error: resUnauthorized(),
      jwtUser: null,
      currentUser: null,
      userProfile: null,
      businessUnits: []
    };
  }

  try {
    // Verify JWT token
    const jwtUser: JWTPayload = await jwt.verify(token);
    if (!jwtUser || !jwtUser.id) {
      return {
        error: resUnauthorized(),
        jwtUser: null,
        currentUser: null,
        userProfile: null,
        businessUnits: []
      };
    }

    // Find current user
    const currentUser = tbUser.users.find((user: any) => user.id === jwtUser.id);
    if (!currentUser) {
      return {
        error: resNotFound('User not found'),
        jwtUser: null,
        currentUser: null,
        userProfile: null,
        businessUnits: []
      };
    }

    // Find user profile
    const userProfile = tbUserProfile.userProfiles.find(
      (profile: any) => profile.user_id === jwtUser.id
    );
    if (!userProfile) {
      return {
        error: resNotFound('User profile not found'),
        jwtUser: null,
        currentUser: null,
        userProfile: null,
        businessUnits: []
      };
    }

    // Get user's business units with detailed information
    const businessUnits: BusinessUnit[] = tbUserTbBusinessUnit.userBusinessUnits
      .filter((bu: any) => bu.user_id === currentUser.id)
      .map((bu: any) => {
        const buObject = tbBusinessUnit.businessUnits.find(
          (b: any) => b.id === bu.business_unit_id
        );
        return {
          id: bu.business_unit_id,
          code: buObject?.code,
          name: buObject?.name,
          alias_name: buObject?.alias_name,
          is_default: bu.is_default,
          is_active: bu.is_active,
        };
      })
      .filter((bu: BusinessUnit) => bu.id); // Filter out any invalid business units

    return {
      error: null,
      jwtUser,
      currentUser,
      userProfile,
      businessUnits
    };

  } catch (error) {
    // Handle JWT verification errors
    return {
      error: resUnauthorized(),
      jwtUser: null,
      currentUser: null,
      userProfile: null,
      businessUnits: []
    };
  }
};

