import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../../utils/constants/cookies";

const initialState = {
  token: CookieStorage.get(CookieKeys.AuthToken) || undefined,
  isVerify: CookieStorage.get(CookieKeys.AuthToken) ? true : false,
  registerEmail: CookieStorage.get(CookieKeys.registerEmail) || "",
};

const authUserSlice = createSlice({
  name: "loginUserAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsVerifyUser: (state, action) => {
      state.isVerify = action.payload;
    },
    setRegisterEmail: (state, action) => {
      state.registerEmail = action.payload;
    },
  },
});

const authUserReducer = authUserSlice.reducer;
export const { setToken, setIsVerifyUser, setRegisterEmail } =
  authUserSlice.actions;

export default authUserReducer;
