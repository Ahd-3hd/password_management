import { takeLatest } from "redux-saga/effects";
import { GET_CURRENT_USER, SET_CURRENT_USER } from "../ducks/currentUser";
import { handleGetCurrentUser } from "./handlers/currentUser";

export function* watcher() {
  yield takeLatest(GET_CURRENT_USER, handleGetCurrentUser);
}
