import { postCheckoutNotif } from "../../../services/course/postCheckoutNotif";

export const courseCheckoutNotifAct = (input) => async () => {
  return await postCheckoutNotif(input)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return false;
    });
};
