import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const postCheckout = async (input) => {
  return await http.post(API_ENDPOINT.COURSE_CHECKOUT, input);
};

export const postCheckoutFree = async (id) => {
  return await http.put(API_ENDPOINT.COURSE_CHECKOUT_FREE(id));
};
