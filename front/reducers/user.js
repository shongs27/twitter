import produce from 'immer';

export const initialState = {
  loadUserLoading: false, //유저정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false, //팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false, //언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false, //로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, //회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, //닉네임 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  LoadFollowersLoading: false, //팔로워 가져오기
  LoadFollowersDone: false,
  LoadFollowersError: null,
  LoadFollowingsLoading: false, //팔로잉 가져오기
  LoadFollowingsDone: false,
  LoadFollowingsError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

//redux-thunk
// export const loginAction = (data) => (dispatch, getState) => {
//   //initial State를 getState();
//   const state = getState();
//   dispatch(loginRequestAction());
//   axios
//     .post('/api/login')
//     .then((res) => {
//       dispatch(loginSuccessAction(res.data));
//     })
//     .catch((err) => {
//       dispatch(loginFailureAction(err));
//     });
// };

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

// const dummyUser = (data) => ({
//   ...data,
//   nickname: '제로초',
//   id: 1,
//   Posts: [{ id: 1 }],
//   Followings: [
//     { nickname: '부기초' },
//     { nickname: '김재호' },
//     { nickname: '알던팍' },
//   ],
//   Followers: [
//     { nickname: '부기초' },
//     { nickname: '김재호' },
//     { nickname: '알던팍' },
//   ],
// });

////// LOGIN 액션
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

// saga가 액션 만들어주므로 필요 없다
// export const loginSuccessAction = (data) => {
//   return {
//     type: LOG_IN_SUCCESS,
//     data,
//   };
// };
// export const loginFailureAction = (data) => {
//   return {
//     type: LOG_IN_FAILURE,
//     data,
//   };
// };

// ////// LOGOUT 액션

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

// export const logoutSuccessAction = () => {
//   return {
//     type: LOG_OUT_SUCCESS,
//   };
// };

// export const logoutFailureAction = () => {
//   return {
//     type: LOG_OUT_FAILURE,
//   };
// };

//reducer
// (이전상태, 액션) => 다음상태
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      return {
        ...state,
        loadUserLoading: true,
        loadUserError: null,
        loadUserDone: false,
      };
    case LOAD_MY_INFO_SUCCESS:
      return {
        ...state,
        loadUserLoading: false,
        loadUserDone: true,
        me: {
          ...action.data,
        },
      };
    case LOAD_MY_INFO_FAILURE:
      return {
        ...state,
        loadUserLoading: false,
        loadUserError: action.error,
      };
    case FOLLOW_REQUEST:
      return {
        ...state,
        followLoading: true,
        followError: null,
        followDone: false,
      };
    case FOLLOW_SUCCESS:
      return {
        ...state,
        followLoading: false,
        followDone: true,
        me: {
          ...state.me,
          Followings: [{ id: action.data.UserId }, ...state.me.Followings],
        },
      };
    case FOLLOW_FAILURE:
      return {
        ...state,
        followLoading: false,
        followError: action.error,
      };
    case UNFOLLOW_REQUEST:
      return {
        ...state,
        unfollowLoading: true,
        unfollowError: null,
        unfollowDone: false,
      };
    case UNFOLLOW_SUCCESS: {
      const test = state.me.Followings.filter(
        (v) => v.id !== action.data.UserId,
      );
      return {
        ...state,
        unfollowLoading: false,
        unfollowDone: true,
        me: {
          ...state.me,
          Followings: test,
        },
      };
    }
    case UNFOLLOW_FAILURE:
      return {
        ...state,
        unfollowLoading: false,
        unfollowError: action.error,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        me: { ...state.me, nickname: action.data.nickname },
        changeNicknameLoading: false,
        changeNicknameDone: true,
      };
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    case ADD_POST_TO_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],
        },
      };
    case REMOVE_POST_OF_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: state.me.Posts.filter((v) => v.id !== action.data),
        },
      };

    case LOAD_FOLLOWERS_REQUEST:
      return {
        ...state,
        loadFollowersLoading: true,
        loadFollowersError: null,
        loadFollowersDone: false,
      };
    case LOAD_FOLLOWERS_SUCCESS:
      return {
        ...state,
        loadFollowersLoading: false,
        loadFollowersDone: true,
        me: {
          ...state.me,
          Followers: action.data,
        },
      };
    case LOAD_FOLLOWERS_FAILURE:
      return {
        ...state,
        loadFollowersLoading: false,
        loadFollowersError: action.error,
      };

    case LOAD_FOLLOWINGS_REQUEST:
      return {
        ...state,
        loadFollowingsLoading: true,
        loadFollowingsError: null,
        loadFollowingsDone: false,
      };
    case LOAD_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        loadFollowingsLoading: false,
        loadFollowingsDone: true,
        me: {
          ...state.me,
          Followings: action.data,
        },
      };
    case LOAD_FOLLOWINGS_FAILURE:
      return {
        ...state,
        loadFollowingsLoading: false,
        loadFollowingsError: action.error,
      };
    default:
      return state;
  }
};
