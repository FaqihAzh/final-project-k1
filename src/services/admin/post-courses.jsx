import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";




const postDataCourses = async (input) => {
    return await http.post(API_ENDPOINT.POST_COURSE, input).then((result) => {
    console.log(result, "post Courses")
    alert("Berhasil Menambahkan")
    }).catch((err) => {
     console.log(err, "ini eror")
    alert("Gagal Cuy")
    });
}

const UsepostDataCourses = () =>{
    return useMutation(postDataCourses)
}

export {postDataCourses, UsepostDataCourses}


const updateCourse = async (input, id) => {
    return await http.put(`${API_ENDPOINT.UPDATE_COURSES}${id}`, input).then((result) => {
      console.log(result, "dataUpdate");
      alert("berhasil");
    }).catch((err) => {
      console.log(err, "ini eror update");
      alert("Gagal Cuy");
    });
  };
  
  const useUpdateCourse = () => {
    return useMutation(updateCourse);
  };
  export { useUpdateCourse };




