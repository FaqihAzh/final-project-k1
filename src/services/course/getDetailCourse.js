import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";
import http2 from "../../utils/constants/http2";

export const getDetailCourse = async (id) => {
  return await http2.get(API_ENDPOINT.GET_DETAIL_COURSE(id));
};
