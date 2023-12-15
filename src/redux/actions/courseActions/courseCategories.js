import { getCategories } from "../../../services/course/getCategories";
import { updateCategories } from "../../reducers/courseSlice/courseSlice";

export const courseCategoriesAct = (input) => async (dispatch) => {
  return await getCategories(input)
    .then((result) => {
      dispatch(updateCategories(result.data.data));
      return true;
    })
    .catch((err) => {
      return false;
    });
};
