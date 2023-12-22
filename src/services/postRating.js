import { API_ENDPOINT } from "../utils/constants/endpoint";
import http from "../utils/constants/http";

export const postRating = async (input) => {
    return await http.post(API_ENDPOINT.POST_RATING, input);
  };
  
  export const getRating = async (id) => {
    return await http.get(API_ENDPOINT.GET_RATING(id));
  };
  