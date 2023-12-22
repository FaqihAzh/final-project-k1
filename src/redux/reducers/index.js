import { combineReducers } from "redux";
import authUserReducer from "./authSlice/User/authUserSlice";
import courseReducer from "./courseSlice/courseSlice";
import promoReducer from "./promoSlice/promoSlice";
import notificationsReducer from "./notificationsSlice/notificationsSlice";

const rootReducers = combineReducers({
  authUser: authUserReducer,
  course: courseReducer,
  promo: promoReducer,
  notification: notificationsReducer
});

export default rootReducers;
