import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const postRating = async (input) => {
  return await http.post(API_ENDPOINT.POST_RATING, input);
};
