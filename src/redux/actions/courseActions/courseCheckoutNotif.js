import { postCheckoutNotif } from "../../../services/course/postCheckoutNotif";

export const courseCheckoutNotifAct = (input) => async () => {
  return await postCheckoutNotif(input)
    .then((result) => {
      console.log(result, "success notification");
      return result.data;
    })
    .catch((err) => {
      console.log(err, "error notification");
      return false;
    });
};
