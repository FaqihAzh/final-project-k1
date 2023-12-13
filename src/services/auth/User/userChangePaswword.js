import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";


const userChangePassword = async (input) => {
    return await http.put(API_ENDPOINT.USER_CHANGE_PASSWORD, input).then((result) => {
        console.log(result, "ganti pass")
        alert("Berhasil ganti pas")
        }).catch((err) => {
         console.log(err, "ini eror")
        alert("Gagal Cuy")
        });
}

const useUserChangePassword = () =>{
    return useMutation(userChangePassword)
}

export {useUserChangePassword}