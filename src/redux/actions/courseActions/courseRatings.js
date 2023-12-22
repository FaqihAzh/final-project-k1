import { getRatings } from "../../../services/course/getRatings";

export const courseRatingsAct = (id) => async () => {
  return await getRatings(id)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
