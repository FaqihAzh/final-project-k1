import { API_ENDPOINT } from "../utils/constants/endpoint";
import http from "../utils/constants/http";

export const getNotification = async () => {
    return await http.get(API_ENDPOINT.GET_NOTIFICATION);
};
