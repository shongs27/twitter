1. eslint vscode 연동
2. sniphhet 다시 적용
3. 리덕스 미들웨어 정복

- styled.component가 적용 안되는 것은 서버사이드 렌더링 때문이다 (\*기술부채)

==============================================================================

- inline style 리렌더링 문제
  객체의 불변성을 지켜주지 않으면 리렌더링으로 인한 효율성 문제가 발생하므로 심한 inline 스타일은 지양되어야 한다
  => 해결책

  1. useMemo 함수
     const style = useMemo(()=> ({marginTop: 10}), []);
  2. styled component 라이브러리
     ``는 사실 함수 호출 () 이었다
     100줄 넘으면 안좋으니깐 새폴더와 styles.js 로 따로 만든다
     &로 하면 자식 컴포넌트까지 같이 해결 가능

- 배열
  배열안에 컴포넌트를 넣을때는 key를 써줘야 한다(index 지양, id 좋다)

- 파일 업로드

1. input창 ref걸고 버튼 누르면 current.click(); 되도록 실행
2. Dropzone 라이브러리

---

5월 14일
middleware thunk 간단할떄
3단함수 가능
=> 하나의 비동기 액션함수안에 여러개의 동기 액션 함수를 넣을수 있네 ex) axios요청

redux-saga 복잡할떄
redux-thunk 기능에 + 디바운싱, 쓰로틀 같은 기능도 추가제공

generator 중단점이 있는 함수

===
eslint

npm info "eslint-config-airbnb@latest" peerDependencies

라이브러리
dummydata - faker
shortid - 중복되기 어려운 id 제공해줌
immer - immutable보다 더 좋은 객체 불변성 유지하게 돕는 라이브러리
use-immer - immer의 hook버전

====

1. CSR SSR 차이
   실질적인 '화면'을 어느 쪽에서 완성하는가의 문제입니다
   CSR - 소스코드를 받은 쪽인 브라우저(클라이언트)가 화면을 완성합니다
   SSR - 소스코드를 제공하는 쪽인 프론트서버?가 화면을 미리 완성

화면에 필요한 데이터를 어디서 요청하고 화면에 넣어주는가

CSR = 브라우저 - 프론트서버 통신으로 html, css, javascript 다받아와서 로딩돌리면서 api서버 데이터 호출
SSR = 브라우저 - 프론트서버 - 백엔드서버- 데이터베이스 한번 훑으면서 프론트에서 데이터까지 받아와서 초기화면 구성해서 돌려줌

Next.js에서 SSR을 활용하려면 getServerSideProps라는 함수

- \_app.js 페이지들의 공통인 부분 / children은 일부분 공통인 애들
  filename 컴포넌트면된다 \_app.js
  props {children} {Component}
  return ( {children} <Component />)

객체 propTypes에 함수 PropTypes를 설정
element는 하나의 엘리멘트를 가르키는 듯
elementType은 element의 타입을 가진 것들을 가르키는 듯

eslint
eslint-plugin-import
eslint-plugin-react
eslint-plugin-react-hooks

antd @ant-design/icons
styled-components

배포모드일떄는 빌드를 미리 해놨기 때문에 빠르니깐 안심해도 된다

<Row, Col>로 만들면 반응형 그리드가 된다

- breakpoint 24칸 기준
  gutter 컬럼사이의 간격
  xs 모바일 sm 태블릿 md 작은 데스크탑
  모바일 -> 태블릿 -> pc

* 리렌더링
  return 부분에서 지금과 이전꺼 비교해보고 새로 그린다
  style = {{}} 새로운 객체를 만드는걸 방지하려고

1. style={style}
   const style = useMemo = () => ({marginTop:10})
2. styled.(div)``

htmlFor은 label에서 id는 input에서 서로 연관
button에서 htmlType="submit"해주면 Form의 onFinish실행됨

<Card> 같은 element는 많이 만져보는 수밖에

리액트에서 배열로 jsx를 쓰면 key를 반드시 붙인다

<a target="_blank" rel="noreferrer noopener">
새창할때는 반드시 rel같이 써주기
noreferer 이전 페이지
noopener 누가 날 열었는지
그 정보를 없애주는거
=> 보안에 위협된다

<List> 컴포넌트와 같이 속성이 부족한 antd 컴포넌트
\*\* 절대 외우지마라 !!

쪼개면서 컴포넌트 나누는데 부담이 없다
=> contextAPI같은걸로 전달 가능하잖아

변수명 길게 짓는데 부담 늦기지마라
카멜케이스 onChangeName 이 있다면
oCN 치고 tab 누르면 바로 만들 수 있음

Hook을 쓸 수 있는 조건
반복문, 조건문, 함수 안에서는 안된다
루트에서만 되는데
예외가 custom hook이다

---

\*비동기
비동기는 요청 성공 실패를 염두해 둔다

비동기를 쉽게 만드는 것이 redux와 mobx고 비동기가 필요없다면 contextAPI를 사용하면 된다

- 컴포넌트는 화면을 그리는데 집중해야 한다
  useEffect ( () => {
  axios.get('/data')
  .then(() => {
  setState(data);
  })
  .catch(() => {
  setError(error);
  })
  })
  이런식으로 만들면 컴포넌트가 복잡해지고 의도치 않은 중복된 요청이 있을 수 있다
  => 컴포넌트에서는 데이터 요청을 안한다
  => 리덕스를 통해 데이터를 중앙저장소에 관리하자

- 객체의 불변성
  객체 추적을 위해 새로운 객체 {} 로 만들어주되
  참조값을 적절히 사용함으로써 ex) ...state
  메모리를 절약할 수 있다

액션

const changeNIckanme = {
type: "CHANGE_NICKNAME"
data : 'hongs'
}

const changeNIckanme = {
type: "CHANGE_NICKNAME"
data : 'zerocho'
}
너무 지겹다 ~~ => 액션 생성함수

const change = (name) => (
{type: "CHANGE_NICKNAME",
data: name
}
)

뭐냐 HYDRATE
