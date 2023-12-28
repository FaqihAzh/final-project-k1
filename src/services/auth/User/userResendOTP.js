import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";

export const userResendOtp = async (input) => {
  return await http.post(API_ENDPOINT.USER_RESEND_OTP, input);
};
