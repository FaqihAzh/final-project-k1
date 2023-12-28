
import { toast } from "react-toastify";
import { updateCourse } from "../../../services/admin/delete-course"

export const UpdateCourseACT = (id, input) => async () => {
    return await updateCourse(id, input).then((result) => {
        toast(result.data.message, {
            position: "bottom-center",
            className: "custom-toast-success",
          });
        return result
    }).catch((err) => {
        toast(err.response.data.error, {
            position: toast.POSITION.BOTTOM_CENTER,
            className: "custom-toast-error",
          });
        return err
    });
}