import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../utils/constants/endpoint";


const deleteCourse = async ({queryKey}) => {
  const [_key, _params] = queryKey;
  const { data } = await http.delete(_key, { params : _params})
  console.log(data , "Delete Berhasil ")
  return data
}
  
  const useDeleteCourse = (options) => {
    return useQuery([API_ENDPOINT.DELETE_COURSE, options], deleteCourse);
  };
  
  export { useDeleteCourse };