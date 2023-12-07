import { toast } from "react-toastify";
import { setRegisterEmail } from "../../../reducers/authSlice/User/authUserSlice";
import { CookieKeys, CookieStorage } from "../../../../utils/constants/cookies";
import { userRegister } from "../../../../services/auth/User/userRegister";

export const authRegisterUserAct = (input) => async (dispatch) => {
  return await userRegister(input)
    .then((result) => {
      CookieStorage.set(
        CookieKeys.registerEmail,
        `${result.data.data.users.email}`
      );
      dispatch(setRegisterEmail(result.data.data.users.email));
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return true;
    })
    .catch((err) => {
      toast(err.response.data.error, {
        position: "bottom-center",
        className: "custom-toast-error",
      });
      return false;
    });
};
