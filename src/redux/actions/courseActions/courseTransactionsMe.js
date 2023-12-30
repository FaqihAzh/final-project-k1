import { getCoursesTransactionsMe } from "../../../services/user/getTransaction";

export const courseTransactionsMeAct = () => async () => {
  return await getCoursesTransactionsMe()
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
};
