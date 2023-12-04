import { getCategoriesId } from "../../../services/course/getCategoriesId";

export const courseCategoriesIdAct = (id) => async () => {
  return await getCategoriesId(id)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
