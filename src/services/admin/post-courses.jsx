import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";
import http2 from "../../utils/constants/http2";
import { toast } from "react-toastify";




const postDataCourses = async (input) => {
    return await http2.post(API_ENDPOINT.POST_COURSE, input).then((result) => {
    toast(result.data.message, {
      position: "bottom-center",
      className: "custom-toast-success",
    });
    }).catch((err) => {
     toast(err.response.data.data, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "custom-toast-error",
    });
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




