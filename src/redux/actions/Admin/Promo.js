import { UpdatePromo, deletePromo } from "../../../services/promo/getPromo"
import { getPromoId } from "../../../services/promo/getPromoId";
import { toast } from "react-toastify";

// Delete Oromo
export const DeletePromoAct = (id) => async () => {
    return await deletePromo(id).then((result) => {
        toast("Delete Success!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-success",
      });
        return result
    }).catch((err) => {
        toast("Delete Failed", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
    });
}
// update Promo
export const updatePromoAct = (id, input) => async () => {
    return await UpdatePromo(id, input).then((result) => {
     toast("Promo Update Success!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-success",
      });
        return result
    }).catch((err) => {
        toast(err.response.data.error, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
        return err
    });
}
// Get Detail Promo
export const getDetailPromoAct = (id) => async () => {
    return await getPromoId(id).then((result) => {
        
        return result.data.data
    }).catch((err) => {
        return err
    });
}
