import { postCheckoutNotif } from "../../../services/course/postCheckoutNotif";

export const courseCheckoutNotifAct = (input) => async () => {
  return await postCheckoutNotif(input)
    .then((result) => {
      console.log("success notification");
      return result.data;
    })
    .catch((err) => {
      console.log("error notification");
      return false;
    });
};
