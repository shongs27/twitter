- styled.component가 적용 안되는 것은 서버사이드 렌더링 때문이다

===

# 복습

# Front

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

## 기타 라이브러리

dummydata - faker
shortid - 중복되기 어려운 id 제공해줌
immer - immutable보다 더 좋은 객체 불변성 유지하게 돕는 라이브러리
use-immer - immer의 hook버전
redux-toolkit - 리덕스 로직을 간단하게 작성하는 표준방식

## Eslint

eslint
eslint-plugin-import
eslint-plugin-react
eslint-plugin-react-hooks

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

리액트에서 배열로 jsx를 쓰면 key를 반드시 붙인다

<a target="_blank" rel="noreferrer noopener">
새창할때는 반드시 rel같이 써주기
noreferer 이전 페이지
noopener 누가 날 열었는지
그 정보를 없애주는거
=> 보안에 위협된다

////???
Hook을 쓸 수 있는 조건
반복문, 조건문, 함수 안에서는 안된다
루트에서만 되는데 예외가 custom hook이다

## 비동기

비동기는 요청 성공 실패를 염두해 둔다
비동기를 쉽게 만드는 것이 redux와 mobx고 비동기가 필요없다면 contextAPI를 사용하면 된다

- 컴포넌트는 화면을 그리는데 집중해야 한다
  useEffect ( () => {
  axios.get('/data')
  .then(() => {
  setState(data);
  }) ad
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

# redux-saga 연동하기

generator는 중단점이 있다
함수는 멈출수 있다

thunk와의 차이는 '이펙트'에 있다
throttle, takeLatest, takeLeading같은 것이 미리 구현되어 있다
(셋 다 응답과 관련있지 요청 자체를 막지는 못한다)

- 스로틀링 : 마지막 함수가 호출 된 후 일정 시간이 지나기 전에 다시 호출되지 않는것 (스크롤 움직이기)
  => 시작과 동시에 쿨타임
- 디바운싱 : 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것 (ajax 검색)
  => 끝났나..? 이제 보낸다?

인피니트 스크롤
-scroll 이벤트가 아니라 intersectionObserver를 참조
-react virtualize - 인스타가 쓰는 방식

프론트는 백을 만드는게 아니라
수천개의 더미데이터를 읽으면서도 화면에 렉이 걸리지 않는 모습

===

# back

## http

노드는 런타임이고 노드에서 제공하는 http모듈이 서버인것이다

http- createServer을 통해 서버를 만들어서 req url, method에 따라서 res 로 응답을 해준다
요청과 응답을 1대1일이라서 res.end()는 한번만 쓸수 있는 것이네

한글 지원안하네? 익스프레스는 지원함

## express

node http 보다 express 프레임워크가 코드를 구조적으로 깔끔하게 짤 수 있다 (createServer와 달리 쉽게 분리도 되니깐)

const server = http.createServer((req,res) => {
if(req.method === 'get') {
if(req.url ==='//api/posts){
// 뭐 이런식 인데 구조적으로 바뀌어서
}
}
})

app.get('/', (req,res) => {
// 으로 깔끔하게 바뀐다
})

get -> 가져오다
post -> 생성하다
patch -> 부분수정
delete -> 삭제
put -> 전체수정
options -> 찔러보기
head -> 헤더만 가져오기 (헤더/본문)

게시글 가져오면서 조회수 1올린다
=> get을 써야하나 ? post를 써야하나?
=> 백엔드개발자와 합의를 하면 된다
=> 정확히 지킨다면 rest api를 지킨다는 것

swagger - api문서를 뽑는 툴

## import vs require

노드는 es6의 모듈인 import를 지원하지만 기본적으로는 commonJS인 require을 쓴다
webpack을 가지는 프론트는 import를 써도 require moudle.exports로 바꾸어준다
노드에서는 webpack을 안쓰기 때문에 처음부터 require을 쓴다
=> 노드쪽도 import export로 통일 될 것이다
