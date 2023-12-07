import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";

export const userResetPassword = async (token, input) => {
  return await http.post(API_ENDPOINT.USER_RESET_PASSWORD(token), input);
};
