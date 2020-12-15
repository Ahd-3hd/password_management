import { call, put } from "redux-saga/effects";
import { setCurrentUser } from "../../ducks/currentUser";
import { requestGetUser, requestSetUser } from "../requests/currentUser";

export function* handleGetCurrentUser(action: any) {
  try {
    const response = yield call(requestGetUser);
    const data = response;
    console.log(data);
    yield put(setCurrentUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleSetCurrentUser(action: any) {
  try {
    const response = yield call(requestSetUser);
    const data = response;
    console.log(data);
    yield put(setCurrentUser(data));
  } catch (error) {
    console.log(error);
  }
}
