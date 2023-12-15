import { useQuery } from "@tanstack/react-query";
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../utils/constants/endpoint";


const fetchDataCourses = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    console.log(data , "data Courses")
    return data
}

const useFetchDataCourses = (options) => {
    return useQuery([API_ENDPOINT.GET_ALL_COURSE, options], fetchDataCourses);
  };

export {fetchDataCourses, useFetchDataCourses}

