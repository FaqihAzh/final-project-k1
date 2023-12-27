import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getCourses = async (page, limit) => {
  return await http.get(API_ENDPOINT.GET_COURSES(page, limit));
};

export const getAllCourses = async () => {
  return await http.get(API_ENDPOINT.GET_ALL_COURSES);
};

export const getCoursesMe = async () => {
  return await http.get(API_ENDPOINT.GET_COURSES_ME);
};

export const getCoursesMeId = async (id) => {
  return await http.get(API_ENDPOINT.GET_COURSES_ME_ID(id));
};
