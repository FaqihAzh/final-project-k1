import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";

export const userOTP = async (otp, token) => {
  return await http.post(API_ENDPOINT.USER_OTP(otp, token));
};
