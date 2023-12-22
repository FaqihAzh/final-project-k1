import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";


const fetchDataAdmin = async ({ queryKey }) => {
  const [_key] = queryKey;
  try {
    const response = await http.get(_key);
    console.log(response.data, "tesssss11");
    return response.data;
  } catch (err) {
    if (err.response.status === 401) {
      alert("Anda harus login dulu");
      window.location.href = "/adminlogin";
    }
  }
};

const useGetDataAdmin = (options) => {
  return useQuery([API_ENDPOINT.GET_ADMIN, options], fetchDataAdmin);
};

export { fetchDataAdmin, useGetDataAdmin };
