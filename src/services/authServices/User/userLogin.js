import http from "../../../utils/constants/http";
import ENDPOINTS from "../../../utils/constants/endpoint";

export const userLogin = async (input) => {
  return await http.post(ENDPOINTS.LOGIN_USER, input);
};
