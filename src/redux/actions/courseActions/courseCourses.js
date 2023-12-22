import { getCourses, getCoursesMe } from "../../../services/course/getCourses";
import { updateCourses } from "../../reducers/courseSlice/courseSlice";

export const courseCoursesAct = (page, limit) => async (dispatch) => {
  return await getCourses(page, limit)
    .then((result) => {
      dispatch(updateCourses(result.data.data.courses));
      return result.data.data.courses;
    })
    .catch((err) => {
      return err;
    });
};

export const courseCoursesMeAct = () => async (dispatch) => {
  return await getCoursesMe()
    .then((result) => {
      dispatch(updateCourses(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
