import { toast } from "react-toastify";
import { putProgress } from "../../../services/course/putProgress";
import { updateProgress } from "../../reducers/courseSlice/courseSlice";

// export const courseProgressAct = (progressId) => async (dispatch) => {
//   return await putProgress(progressId)
//   .then((result) => {
//     dispatch(updateProgress(result.data.data));
//     return result.data.data
//   })
//   .catch((err) => {
//     return err;
//   })
// };
export const courseProgressAct = (moduleId, progressId) => async (dispatch) => {
  try {
    const result = await putProgress(progressId);
    dispatch(updateProgress({ moduleId, progressId, data: result.data.data }));
    console.log(result.data.data, "progress actions");
    return true;
  } catch (err) {
    toast(err.response.data.err, {
      position: "bottom-center",
      className: "custom-toast-error",
    });
    return false;
  }
};