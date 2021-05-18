const initialState = {
  logInLoading: false, //로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, //가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

//redux-thunk
export const loginAction = (data) => {
  return (dispatch, getState) => {
    //initial State인 getState();
    const state = getState();
    dispatch(loginRequestAction());
    axios
      .post("/api/login")
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      });
  };
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_IN_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

////// LOGIN 액션

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};

////// LOGOUT 액션

export const logoutRequestAction = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  };
};

export const logoutSuccessAction = (data) => {
  return {
    type: LOG_OUT_SUCCESS,
    data,
  };
};

export const logoutFailureAction = (data) => {
  return {
    type: LOG_OUT_FAILURE,
    data,
  };
};

// (이전상태, 액션) => 다음상태
export default (state = initialState, action) => {
  switch (action.type) {
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
        me: {
          ...action.data,
          nickname: "zerocho",
          id: 1,
          Posts: [],
          Followings: [],
          Followers: [],
        },
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
    default:
      return state;
  }
};
