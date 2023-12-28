import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getRatings = async (id) => {
  return await http.get(API_ENDPOINT.RATINGS(id));
};
