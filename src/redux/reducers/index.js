import { combineReducers } from "redux";
import authUserReducer from "./authSlice/User/authUserSlice";
import courseReducer from "./courseSlice/courseSlice";

const rootReducers = combineReducers({
  authUser: authUserReducer,
  course: courseReducer,
});

export default rootReducers;
