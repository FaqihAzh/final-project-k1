import { toast } from "react-toastify";
import { getCategories } from "../../../services/course/getCategories";
import { updateCategories } from "../../reducers/courseSlice/courseSlice";

export const courseCategoriesAct = (input) => async (dispatch) => {
  return await getCategories(input)
    .then((result) => {
      dispatch(updateCategories(result.data.data));
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
