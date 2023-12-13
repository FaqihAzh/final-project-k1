import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../utils/constants/http";
import { API_ENDPOINT } from "../../../utils/constants/endpoint";



const userUpdateProfil = async ({queryKey}) => {
    const [_key, _params] = queryKey
    const { data } = await http.put(_key, { param : _params})
    console.log(data , "user update sukses")
    alert("sukses update profil")
    return data
}

const useUserUpdateProfil = (options) => {
    return useMutation([API_ENDPOINT.USER_UPDATE_PROFIL, options], userUpdateProfil)
}

export {useUserUpdateProfil}

