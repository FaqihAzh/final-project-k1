import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getPromoId = async (id) => {
  return await http.get(API_ENDPOINT.GET_DETAIL_PROMO(id));
};
