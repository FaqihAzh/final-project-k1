import { useQuery } from "@tanstack/react-query";
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../utils/constants/endpoint";


const fetchDataTransaction = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    return data
}

export const useFetchDataTransaction = (option) => {
    return useQuery([API_ENDPOINT.GET_ALL_TRANSACTION_, option], fetchDataTransaction)
}

