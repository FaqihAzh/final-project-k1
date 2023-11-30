import http from "../../../utils/constants/http";
import ENDPOINTS from "../../../utils/constants/endpoint";

export const userRegister = async (input) => {
  return await http.post(ENDPOINTS.REGISTER_USER, input);
};
