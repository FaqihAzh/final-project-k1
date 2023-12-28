
import { deleteCourse } from "../../../services/admin/delete-course";


export const DeleteCourseAct = (id) => async () => {
    return await deleteCourse(id).then((result) => {
        alert("berhasil hapus course")
        return result
    }).catch((err) => {
        return err
    });
}
  