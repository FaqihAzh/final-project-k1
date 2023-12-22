import { toast } from "react-toastify";
import { getRating, postRating } from "../../services/postRating";

export const inputRatingAct = (input) => async () => {
  return await postRating(input)
    .then((result) => {
      console.log("Rating submitted successfully");
      return result.data.data;
    })
    .catch((err) => {
      toast(err.response.data.error, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
      return false;
    });
};

export const getRatingAct = (id) => async () => {
    return await getRating(id)
      .then((result) => {
        console.log("success notification");
        return result.data.data;
      })
      .catch((err) => {
        console.log("error notification");
        return false;
      });
  };