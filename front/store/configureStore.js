import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
// import thunkMiddleware from "redux-thunk";
import creasteSagaMiddleware from "redux-saga";
import rootsaga from "../sagas";

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = creasteSagaMiddleware();
  const middlewares = [loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  //  보안에 취약하기 때문에 개발일때만 devtools 연결
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootsaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
