import { toast } from "react-toastify";
import { userLogin } from "../../../../services/authServices/User/userLogin";
import { CookieKeys, CookieStorage } from "../../../../utils/constants/cookies";
import {
  setIsVerifyUser,
  setToken,
} from "../../../reducers/authSlice/User/authUserSlice";

export const authLoginUserAct = (input) => async (dispatch) => {
  return await userLogin(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsVerifyUser(result.data.data.isVerified));
      toast.success(result.data.message);
      return true;
    })
    .catch((err) => {
      toast.error(err.response.data.message);
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
