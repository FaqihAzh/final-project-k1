import { toast } from "react-toastify";
import { userResendOtp } from "../../../../services/auth/User/userResendOTP";

export const authResendOtpAct = (input) => async (dispatch) => {
  return await userResendOtp(input)
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
