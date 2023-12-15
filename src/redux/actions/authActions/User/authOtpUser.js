import { toast } from "react-toastify";
import { userOTP } from "../../../../services/auth/User/userOTP";

export const authOtpUserAct = (input) => async () => {
  return await userOTP(input)
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
