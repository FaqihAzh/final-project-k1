import { getSearchCourse } from "../../../services/course/getSearchCourse";
import { updateCourses } from "../../reducers/courseSlice/courseSlice";

export const courseSearchAct = (searchQuery) => async (dispatch) => {
  return await getSearchCourse(searchQuery)
    .then((result) => {
      dispatch(updateCourses(result.data.data));
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
