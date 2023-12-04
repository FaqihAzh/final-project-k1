import { toast } from "react-toastify";
import { userResetPassword } from "../../../../services/auth/User/userResetPassword";

export const authResetPasswordAct = (token, input) => async (dispatch) => {
  return await userResetPassword(token, input)
    .then((result) => {
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return true;
    })
    .catch((err) => {
      toast(err.response.data.message, {
        position: "bottom-center",
        className: "custom-toast-error",
      });
      return false;
    });
};
