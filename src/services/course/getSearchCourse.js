import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getSearchCourse = async (searchQuery) => {
  return await http.get(API_ENDPOINT.GET_SEARCH_COURSE(searchQuery));
};
