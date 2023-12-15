
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../utils/constants/endpoint";


 export const deleteCourse = async (id) => {
  return await http.delete(API_ENDPOINT.DELETE_COURSE(id))
 
}

export const updateCourse = async (id, input) =>{
  return await http.put(API_ENDPOINT.UPDATE_COURSES(id),input) 
}
  
