import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint"
import http from "../../utils/constants/http"



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





// const fetchDataCourses = async ({queryKey}) => {
//     const [_key, _params] = queryKey;
//     const { data } = await http.get(_key, { params : _params})
//     console.log(data , "data Courses")
//     return data
// }

// const useFetchDataCourses = (options) => {
//     return useQuery([API_ENDPOINT.GET_ALL_COURSE, options], fetchDataCourses);
//   };

// export {fetchDataCourses, useFetchDataCourses}