import { useMutation } from "@tanstack/react-query";
import { CookieKeys, CookieStorage } from "../../utils/constants/cookies";
import { API_ENDPOINT } from "../../utils/constants/endpoint"
import http from "../../utils/constants/http";
import axios from "axios";



const AdminLogin = async (input) =>{
    return await http.post(API_ENDPOINT.ADMIN_LOGIN, input).then((result) => {
    console.log(result, "tess")
    CookieStorage.set(CookieKeys.AuthToken, result.data.data)
    window.location.href = "/admindashboard";
    return result    
    }).catch((err) => {
        console.log(err, "ini eror")
    })
  }
  
  const UseAdminLogin = () =>{
    return useMutation(AdminLogin)
  }
  
  
  export {AdminLogin, UseAdminLogin}