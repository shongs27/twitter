//saga의 이펙트
import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLeading,
  takeLatest,
  throttle,
  delay,
} from "redux-saga/effects";
//take - evnetlistener
//takeLeading - 매번 누를때 첫번째꺼만
// takeLatest - 매번 누를떄 같은 '응답' 취소하고 마지막꺼만
// throttle - 아에 반복 요청이 안가도록 막아줌 (takeLatest와 다르게 백엔드에서 검사할 필요 없음)

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
