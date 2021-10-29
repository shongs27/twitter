//saga의 이펙트들
import { all, fork } from 'redux-saga/effects';

//take는 evnetlistener와 비슷
// takeLeading - 매번 누를때 첫번째 응답만 반환
// takeLatest - 매번 누를떄 마지막 응답만 반환
// throttle - 아에 반복 요청이 안가도록 막아줌
// (takeLatest, takeLeading과 다르게 백엔드에서 여러번 요청되었나 검사할 필요 없음)

//fork는 응답을 기다리지 않는다
//call은 응답을 기다린다
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
