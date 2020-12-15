import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";

const reducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
