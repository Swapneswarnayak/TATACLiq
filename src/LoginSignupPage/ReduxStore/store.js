//import { legacy_createStore as createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
import userReducer from "../Reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
