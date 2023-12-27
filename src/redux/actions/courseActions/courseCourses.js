import {
  getAllCourses,
  getCourses,
  getCoursesMe,
  getCoursesMeId,
} from "../../../services/course/getCourses";
import {
  updateCourses,
  updateMyCourses,
} from "../../reducers/courseSlice/courseSlice";

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

export const courseAllCoursesAct = () => async (dispatch) => {
  return await getAllCourses()
    .then((result) => {
      dispatch(updateCourses(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export const courseCoursesMeAct = () => async (dispatch) => {
  return await getCoursesMe()
    .then((result) => {
      dispatch(updateMyCourses(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export const courseCoursesMeIdAct = (id) => async (dispatch) => {
  return await getCoursesMeId(id)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
