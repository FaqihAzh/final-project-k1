import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";



const fetchDataUser = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    return data
}

const useFetchDataUser = (options) => {
    return useQuery([API_ENDPOINT.USER_PROFIL, options], fetchDataUser);
  };

export {fetchDataUser, useFetchDataUser}


