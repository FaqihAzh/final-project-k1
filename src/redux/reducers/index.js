import { combineReducers } from "redux";
import authUserReducer from "./authSlice/User/authUserSlice";

const rootReducers = combineReducers({
  authUser: authUserReducer,
});

export default rootReducers;
