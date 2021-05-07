import { HYDRATE } from "next-redux-wrapper";

//함수들을 합쳐주는
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  //서버사이드렌더링을 위해서 추가 HYDRATE가 뭐지?
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
