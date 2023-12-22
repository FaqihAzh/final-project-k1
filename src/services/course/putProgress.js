import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const putProgress = async (progressId) => {
    return await http.put(API_ENDPOINT.UPDATE_PROGRESS(progressId));
  };
  