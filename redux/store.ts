import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { currentUserReducer } from "./slices/currentUserSlice";

const reducer = combineReducers({ currentUser: currentUserReducer });

const middleware = [...getDefaultMiddleware(), logger];

export type Reducer = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
  middleware,
});
