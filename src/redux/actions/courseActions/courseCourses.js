import { getCourses } from "../../../services/course/getCourses";
import { updateCourses } from "../../reducers/courseSlice/courseSlice";

export const courseCoursesAct = (page, limit) => async (dispatch) => {
  return await getCourses(page, limit)
    .then((result) => {
      dispatch(updateCourses(result.data.data.courses));
      return true;
    })
    .catch((err) => {
      return err;
    });
};
