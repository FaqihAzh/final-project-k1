import { getCategoriesId } from "../../../services/course/getCategoriesId";
import { updateCourses } from "../../reducers/courseSlice/courseSlice";

export const courseCategoriesIdAct = (id) => async (dispatch) => {
  return await getCategoriesId(id)
    .then((result) => {
      dispatch(updateCourses(result.data.data.category.courses));
      return result.data.data.category.courses;
    })
    .catch((err) => {
      return err;
    });
};
