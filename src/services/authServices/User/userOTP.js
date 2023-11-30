import http from "../../../utils/constants/http";
import ENDPOINTS from "../../../utils/constants/endpoint";

export const userOTP = async (input) => {
  return await http.post(ENDPOINTS.OTP_USER, input);
};
