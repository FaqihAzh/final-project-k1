import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const store = configureStore({
  reducer: rootReducers,

  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});

export default store;
