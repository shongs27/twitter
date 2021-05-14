//saga의 이펙트
import { all, call, fork, put } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data, a, b, c) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    //call 동기 블록킹 fork 비동기 논블록킹
    //ex) call(함수, 인자..)
    const result = yield call(logInAPI, action.data);
    //put은 dispatch와 같다?
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
