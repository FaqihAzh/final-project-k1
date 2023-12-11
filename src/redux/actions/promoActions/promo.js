import { toast } from "react-toastify";
import { getPromo } from "../../../services/promo/getPromo";
import { updatePromo } from "../../reducers/promoSlice/promoSlice";

export const promoAct = () => async (dispatch) => {
  return await getPromo()
    .then((result) => {
      dispatch(updatePromo(result.data.data));
      console.log(result.data.data, "promo actions")
      return true;
    })
    
    .catch((err) => {
      toast(err.response.data.error, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
      return false;
    });
};
