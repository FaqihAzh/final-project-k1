import { toast } from "react-toastify";
import { userOTP } from "../../../../services/authServices/User/userOTP";

export const authOtpUserAct = (input) => async () => {
  return await userOTP(input)
    .then((result) => {
      toast.success(result.data.message);
      return true;
    })
    .catch((err) => {
      toast.error(err.response.data.err);
      return false;
    });
};
