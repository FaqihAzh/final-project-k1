import { toast } from "react-toastify";
import { getRatings } from "../../../services/course/getRatings";
import { postRating } from "../../../services/course/postRating";

export const courseRatingsAct = (id) => async () => {
  return await getRatings(id)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export const inputRatingAct = (input) => async () => {
  return await postRating(input)
    .then((result) => {
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return true;
    })
    .catch((err) => {
      toast(err.response.data.err, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
      return false;
    });
};
