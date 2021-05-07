const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
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
