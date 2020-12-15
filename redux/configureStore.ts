import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import currentUserReducer from "./ducks/currentUser";
import { watcher } from "./sagas/rootSaga";
import logger from "redux-logger";

const reducer = combineReducers({
  currentUser: currentUserReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [sagaMiddleware, logger];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(watcher);
export type RootState = ReturnType<typeof reducer>;
export default store;
