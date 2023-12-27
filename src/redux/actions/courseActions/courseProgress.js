import { putProgress } from "../../../services/course/putProgress";

export const courseProgressAct = (progressId) => async () => {
  return await putProgress(progressId)
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};
