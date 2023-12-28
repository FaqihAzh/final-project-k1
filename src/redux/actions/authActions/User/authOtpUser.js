import { toast } from "react-toastify";
import { userOTP } from "../../../../services/auth/User/userOTP";

export const authOtpUserAct = (otp, token) => async () => {
  return await userOTP(otp, token)
    .then((result) => {
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return true;
    })
    .catch((err) => {
      toast(err.response.data.err, {
        position: "bottom-center",
        className: "custom-toast-error",
      });
      return false;
    });
};
