import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";

export const userForgotPassword = async (input) => {
  return await http.post(API_ENDPOINT.USER_FORGOT_PASSWORD, input);
};
