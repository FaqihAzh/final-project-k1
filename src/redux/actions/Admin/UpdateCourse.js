
import { updateCourse } from "../../../services/admin/delete-course"

export const UpdateCourseACT = (id, input) => async () => {
    return await updateCourse(id, input).then((result) => {
        console.log(result, "data update")
        return result
    }).catch((err) => {
        console.log(err, 'error')
        return err
    });
}