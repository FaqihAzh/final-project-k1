import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../../../utils/constants/cookies";
import {
  setIsVerifyUser,
  setToken,
} from "../../../reducers/authSlice/User/authUserSlice";
import {
  userLogin,
  userLoginAuth,
} from "../../../../services/auth/User/userLogin";

export const authLoginUserAct = (input) => async (dispatch) => {
  return await userLogin(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsVerifyUser(result.data.data.isVerified));
      toast(result.data.message, {
        position: "bottom-center",
        className: "custom-toast-success",
      });
      return true;
    })
    .catch((err) => {
      toast(err.response.data.err, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
      });
      return false;
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken, {
    path: "/",
    expires: new Date(0),
  });
};
