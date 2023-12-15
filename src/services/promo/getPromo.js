import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getPromo = async () => {
  return await http.get(API_ENDPOINT.GET_PROMO);
};
