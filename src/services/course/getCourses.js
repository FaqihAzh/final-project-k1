import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getCourses = async (page, limit) => {
  return await http.get(API_ENDPOINT.GET_COURSES(page, limit));
};

export const getCoursesMe = async () => {
  return await http.get(API_ENDPOINT.GET_COURSES_ME);
};
