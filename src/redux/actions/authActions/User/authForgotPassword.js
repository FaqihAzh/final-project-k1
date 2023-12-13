import { toast } from "react-toastify";
import { userForgotPassword } from "../../../../services/auth/User/userForgotPassword";

export const authForgotPasswordAct = (input) => async (dispatch) => {
  return await userForgotPassword(input)
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
