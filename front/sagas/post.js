import {
  all,
  delay,
  fork,
  throttle,
  takeEvery,
  takeLatest,
  put,
} from 'redux-saga/effects';
import shortId from 'shortid';
import axios from 'axios';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* addComment(action) {
  try {
    //원래는 addPostAPI(action.data)의 생김새
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  //1
  //take는 한번만 실행되므로 while로 이벤트리스너처럼 동작
  //동기적
  // while (true) {
  //   yield take("ADD_POST_REQUEST");
  // }

  //2
  //비동기적
  yield takeEvery(ADD_POST_REQUEST, addPost);
  // yield throttle("ADD_POST_REQUEST", addPost, 2000);
}

function* watchRemovePost() {
  //여러개의 요청으로 여러개의 '응답'중에 마지막꺼만 실행되는 이펙트
  // 즉 응답이므로, 서버에는 여러개의 요청이 저장될 수 있다
  //첫번째 응답만 실행하는건 takeLeading
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  // 2초안에 addComment는 한번만 실행 될 수 있다
  // 요청자체를 한번만 보낼 수 있게 한다
  yield throttle(ADD_COMMENT_REQUEST, addComment, 2000);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchRemovePost), fork(watchAddComment)]);
}
