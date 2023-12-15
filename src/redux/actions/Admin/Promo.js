import { UpdatePromo, deletePromo } from "../../../services/promo/getPromo"
import { getPromoId } from "../../../services/promo/getPromoId";

// Delete Oromo
export const DeletePromoAct = (id) => async () => {
    return await deletePromo(id).then((result) => {
        alert("berhasil delete Promo")
        return result
    }).catch((err) => {
        console.log(err)
    });
}
// update Promo
export const updatePromoAct = (id, input) => async () => {
    return await UpdatePromo(id, input).then((result) => {
     alert("Promo Update")
        return result
    }).catch((err) => {
        console.log(err, 'error')
        return err
    });
}
// Get Detail Promo
export const getDetailPromoAct = (id) => async () => {
    return await getPromoId(id).then((result) => {
        console.log(result.data.data, "detail promo")
        return result.data.data
    }).catch((err) => {
        console.log(err, "err data promo")
    });
}