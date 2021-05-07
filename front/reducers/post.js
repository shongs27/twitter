const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번쨰 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://djkdjifjqoff/dddqqf",
        },
        { src: "https://dqfqff/qefqfddd/bbb" },
        { src: "https://dqfqff/qefqfddd/bbb" },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "십새꺄 !",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPOST = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

// (이전상태, 액션) => 다음상태
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        //앞에다가 dummyPost를 추가해야 게시글 위로 올라가게 보여줄수 있다
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};
