import { getDetailCourseUser } from "../../../services/course/getDetailCourseUser";
import { updateCoursesUser } from "../../reducers/courseSlice/courseSlice";

export const courseUserDetailAct = (id) => async (dispatch) => {
  return await getDetailCourseUser(id)
    .then((result) => {
      dispatch(updateCoursesUser(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
