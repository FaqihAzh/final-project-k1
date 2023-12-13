import { combineReducers } from "redux";
import authUserReducer from "./authSlice/User/authUserSlice";
import courseReducer from "./courseSlice/courseSlice";
import promoReducer from "./promoSlice/promoSlice";

const rootReducers = combineReducers({
  authUser: authUserReducer,
  course: courseReducer,
  promo: promoReducer,
});

export default rootReducers;
