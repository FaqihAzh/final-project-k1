import { toast } from "react-toastify";
import { userRegister } from "../../../../services/authServices/User/userRegister";
import { setRegisterEmail } from "../../../reducers/authSlice/User/authUserSlice";
import { CookieKeys, CookieStorage } from "../../../../utils/constants/cookies";

export const authRegisterUserAct = (input) => async (dispatch) => {
  return await userRegister(input)
    .then((result) => {
      CookieStorage.set(
        CookieKeys.registerEmail,
        `${result.data.data.users.email}`
      );
      dispatch(setRegisterEmail(result.data.data.users.email));
      toast.success(result.data.message);
      return true;
    })
    .catch((err) => {
      toast.error(err.response.data.err);
      return false;
    });
};
