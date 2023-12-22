import { toast } from "react-toastify";
import {
  postCheckout,
  postCheckoutFree,
} from "../../../services/course/postCheckout";

export const courseCheckoutAct = (input) => async () => {
  return await postCheckout(input)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      toast(err.response.data.err, {
        position: "bottom-center",
        className: "custom-toast-error",
      });
      return false;
    });
};

export const courseCheckoutFreeAct = (id) => async () => {
  return await postCheckoutFree(id)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      toast(err.response.data.err, {
        position: "bottom-center",
        className: "custom-toast-error",
      });
      return false;
    });
};
