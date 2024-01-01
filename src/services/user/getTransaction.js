import { useQuery } from "@tanstack/react-query";
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../utils/constants/endpoint";

const fetchDataTransactionUser = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

export const useFetchDataTransactionUser = (options) => {
  return useQuery(
    [API_ENDPOINT.GET_TRANSACTION_USER, options],
    fetchDataTransactionUser
  );
};

export const getCoursesTransactionsMe = async () => {
  return await http.get(API_ENDPOINT.GET_TRANSACTION_USER);
};
