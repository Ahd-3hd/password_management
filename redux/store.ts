import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";

const reducer = combineReducers({});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
