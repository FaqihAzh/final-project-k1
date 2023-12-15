import { getDetailCourse } from "../../../services/course/getDetailCourse";

export const courseDetailCourseAct = (id) => async () => {
  return await getDetailCourse(id)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
