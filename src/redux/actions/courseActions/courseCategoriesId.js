import { getCategoriesId } from "../../../services/course/getCategoriesId";
import { updateCourses } from "../../reducers/courseSlice/courseSlice";

export const courseCategoriesIdAct = (id) => async (dispatch) => {
  return await getCategoriesId(id)
    .then((result) => {
      dispatch(updateCourses(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
