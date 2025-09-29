import { base } from "../../base-api/base";
import { handleSubModuleError } from "../../tools/apiError";
import { EMAIL, PASSWORD } from "../../tools/constants";
import { ApiResponse } from "../../tools/types";
import { ResponseAuth, LoginRequest, SubscriberRequest } from "./types";

export const postUserLogin = async (
  reqData: LoginRequest
): Promise<ApiResponse<ResponseAuth>> => {
  try {
    const { data } = await base.post<any>("/login", reqData, {});
    return { response: data, status: 200, success: data };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

export const postCreateSubcriber = async (
  reqData: SubscriberRequest
): Promise<ApiResponse<ResponseAuth>> => {
  try {
    const requestToken = {
      email: EMAIL,
      password: PASSWORD,
    };
    const token = await postUserLogin(requestToken);
    const { data } = await base.post<any>("/subscribers", reqData, {
      headers: {
        Authorization: token?.response?.token,
      },
    });
    return { response: data?.message, status: data, success: data };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

export const refreshUserLogin = async (
  refresh_token: string
): Promise<ApiResponse<ResponseAuth>> => {
  try {
    const { data } = await base.post<any>("/v2/refresh", { refresh_token }, {});
    return { response: data?.data, status: data.status, success: data.success };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
