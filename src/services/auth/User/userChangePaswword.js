import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../utils/constants/endpoint";
import http from "../../../utils/constants/http";
import { toast } from "react-toastify";


const userChangePassword = async (input) => {
    return await http.put(API_ENDPOINT.USER_CHANGE_PASSWORD, input).then((result) => {
        
        toast(result.data.message, {
            position: "bottom-center",
            className: "custom-toast-success",
          });
        }).catch((err) => {
            toast(err.response.data.error, {
                position: toast.POSITION.BOTTOM_CENTER,
                className: "custom-toast-error",
              });
              return false;
            });
}

const useUserChangePassword = () =>{
    return useMutation(userChangePassword)
}

export {useUserChangePassword}