const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

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

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

export const logoutSuccessAction = (data) => {
  return {
    type: "LOG_OUT_SUCCESS",
    data,
  };
};

export const logoutFailureAction = (data) => {
  return {
    type: "LOG_OUT_FAILURE",
    data,
  };
};

// (이전상태, 액션) => 다음상태
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state.me,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state.me,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};
