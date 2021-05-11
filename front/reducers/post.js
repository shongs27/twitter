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
          src:
            "https://i.pinimg.com/originals/04/7d/fe/047dfe5c5e49214a7de9bb2694e0eb68.png",
        },
        {
          src:
            "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2245354C5502AD4E3C5F1A",
        },
        { src: "https://www.woowahan.com/img/mobile/woowabros.jpg" },
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
  User: {
    id: 1,
    nickname: "제로초",
  },
  content: "더미데이터입니다",
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
