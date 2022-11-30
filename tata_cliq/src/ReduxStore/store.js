import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from "../Reducers/userReducer";

export const store = createStore(userReducer, applyMiddleware(logger));
