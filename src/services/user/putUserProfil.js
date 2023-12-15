import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

const updateProfilUser = async (input) => {
    return await http.put(API_ENDPOINT.USER_PROFIL, input).then((result) => {
      console.log(result, "berhasil")
      alert("berhasil updte")
      return result
    }).catch((err) => {
      console.log(err, "erorr ")
    });
  };
    const useUpdateDataUser = () =>{
      return useMutation(updateProfilUser)
    }
  
    const updateImageUser = async (input) => {
        return await http.put(API_ENDPOINT.USER_UPDATE_IMAGE_USER, input).then((result) => {
          console.log(result, "berhasil")
          alert("berhasil updte")
          return result
        }).catch((err) => {
          console.log(err, "erorr ")
        });
      };

      const useUpdateImageUser = () =>{
        return useMutation(updateImageUser)
      }


    export {useUpdateDataUser,useUpdateImageUser }