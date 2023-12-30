import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";
import { toast } from "react-toastify";
import http2 from "../../utils/constants/http2";

const updateProfilUser = async (input) => {
    return await http2.put(API_ENDPOINT.USER_PROFIL, input).then((result) => {
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return result
    }).catch((err) => {
      alert(err.response.data.error);
    });
  };
  export  const useUpdateDataUser = () =>{
      return useMutation(updateProfilUser)
    }
  
 
