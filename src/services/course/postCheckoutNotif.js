import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const postCheckoutNotif = async (input) => {
  return await http.post(API_ENDPOINT.COURSE_CHECKOUT_NOTIFICATION, input);
};
