import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";


const fetchActiveUsers = async ({queryKey}) => {
    const [_key, _params] = queryKey;
      const { data } = await http.get(_key, { params : _params})
      return data
  }
  export const useFetchActiveUsers = (options) => {
    return useQuery([API_ENDPOINT.ACTIVE_USERS, options], fetchActiveUsers);
  };


  const fetchActiveClass = async ({queryKey}) => {
    const [_key, _params] = queryKey;
      const { data } = await http.get(_key, { params : _params})
      return data
  }
  export const useFetchActiveClass = (options) => {
    return useQuery([API_ENDPOINT.ACTIVE_CLASS, options], fetchActiveClass);
  };


  const fetchPremimumClass = async ({queryKey}) => {
    const [_key, _params] = queryKey;
      const { data } = await http.get(_key, { params : _params})
      return data
  }
  export const useFetchPremimumClass = (options) => {
    return useQuery([API_ENDPOINT.PREMIUM_CLASS, options], fetchPremimumClass);
  };


  