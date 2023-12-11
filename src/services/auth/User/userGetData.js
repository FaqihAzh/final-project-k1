import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/constants/http";
import { API_ENDPOINT } from "../../../utils/constants/endpoint";

const userGetData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((value) => {
      return value.data;
    })
    .catch((err) => {
      return err.err;
    });

  return data;
};

const useUserGetData = (options) => {
  return useQuery([API_ENDPOINT.USER_WHOAMI, options], userGetData);
};

export { userGetData, useUserGetData };
