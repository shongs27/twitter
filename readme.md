1. eslint vscode 연동
2. 리덕스 미들웨어 정복

+ styled.component가 적용 안되는 것은 서버사이드 렌더링 때문이다 (*기술부채)

==============================================================================
* inline style 리렌더링 문제
객체의 불변성을 지켜주지 않으면 리렌더링으로 인한 효율성 문제가 발생하므로 심한 inline 스타일은 지양되어야 한다
=> 해결책
  1. useMemo 함수
  const style = useMemo(()=> ({marginTop: 10}), []);
  2. styled component 라이브러리
  ``는 사실 함수 호출 () 이었다 
  100줄 넘으면 안좋으니깐 새폴더와 styles.js 로 따로 만든다
  &로 하면 자식 컴포넌트까지 같이 해결 가능

* 배열
배열안에 컴포넌트를 넣을때는 key를 써줘야 한다(index 지양, id 좋다)

* 파일 업로드
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

