import { useMutation, useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import http from "../../utils/constants/http";
import { toast } from "react-toastify";

export const getPromo = async () => {
  return await http.get(API_ENDPOINT.GET_PROMO);
};

// Get Promo
const fetchDataPromo = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });

  return data;
};
const useDataPromo = (options) => {
  return useQuery([API_ENDPOINT.PROMO, options], fetchDataPromo);
};

export { useDataPromo };
// Post Promo
const postPromo = async (input) => {
  return await http
    .post(API_ENDPOINT.PROMO, input)
    .then((result) => {
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
    })
    .catch((err) => {
      toast(err.response.data.error, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
    });
};
const usePostPromo = () => {
  return useMutation(postPromo);
};

export { usePostPromo };

//Hapus Promo

export const deletePromo = async (id) => {
  return await http.delete(API_ENDPOINT.DELETE_PROMO(id));
};

//Update Promo

export const UpdatePromo = async (id, input) => {
  return await http.put(API_ENDPOINT.UPDATE_PROMO(id), input);
};
