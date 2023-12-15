<<<<<<< HEAD
=======
import { useMutation, useQuery } from "@tanstack/react-query";
>>>>>>> 0bc64607c34318994e7e4d089f75e644339edb86
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";

export const getPromo = async () => {
  return await http.get(API_ENDPOINT.GET_PROMO);
};
<<<<<<< HEAD
=======

// Get Promo
const fetchDataPromo = async ({queryKey}) => {
  const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    console.log(data , "data Promo")
    return data
}
const useDataPromo = (options) => {
  return useQuery([API_ENDPOINT.PROMO, options], fetchDataPromo);
};

export {useDataPromo}
// Post Promo
const postPromo = async (input) => {
  return await http.post(API_ENDPOINT.PROMO, input).then((result) => {
    console.log(result, "post promo")
    alert("berhasil menambahkan promo")
  }).catch((err) => {
    console.log(err, "ini eror")
    alert("Gagal Cuy")
  });
}
  const usePostPromo = () => {
    return useMutation(postPromo)
  }

  export {usePostPromo}

  //Hapus Promo

  export const deletePromo = async (id) => {
    return await http.delete(API_ENDPOINT.DELETE_PROMO(id))
  }

  //Update Promo 

   export const UpdatePromo = async (id, input) => {
    return await http.put(API_ENDPOINT.UPDATE_PROMO(id),input)
   }
>>>>>>> 0bc64607c34318994e7e4d089f75e644339edb86
