eslint vscode 연동을 해야한다

그대로 말고 흉내내서 다시 만들어보기 

---
리덕스
안정적 (오류가 적다)
코드량이 많다

모벡스 (초보탈출이면 생산성 위해)
코드량이 적지만
트래킹이 힘들다

앱이 크지않다면 컨텍스트 api

초보일때는 리덕스 아니면 모벡스

비동기 지원이 쉽냐 아니냐
데이터를 받아온다는건 비동기

컴포넌트에서는 데이터 요청을 안하는편
비동기요청을 ㅊ거기서 한다


----
redux
action을 통해 데이터 어떻게 바뀌었는지 history 추적가능

* 자바스크립트의 불변성
{} === {} // false

const a = {};
const b = a;
a === b // true

reducer return {...state, new} **객체를 새로 만든다** -> 불변성을 지키기위한
하나의 상태면 추적이 안되겠지 history가 아니니깐

일일히 치지않고 ...state 하는 이유
1. 타자 길어서
2. 메모리 아낌
어차피 return ({})로 새로운 객체를 만들었기 때문에 prevData의 참조값도 변하게 하는, 불변성은 지켜졌다. 이전 값은 재사용한다.

next -p 3060 포트번호 바꾸기

----
reducer는 쪼갠 형태고 작성한뒤 combine해준다
reducer은 줄이는 의미 - 이전상태 + 액션 => 다음상태 

---

styled.component가 적용 안되는 것은 서버사이드 렌더링 때문이다 (*기술부채)

---
버튼 누르면 input창 열어서 파일 등록
1. input창 ref걸고 버튼 누르면 current.click(); 되도록 실행
2. Dropzone 라이브러리


배열안에 컴포넌트를 넣을때는 key를 써줘야 한다(index 지양, id 좋다)
---

주말 할일 -
1. 게시글 구현하기 13분 부터 **재생** - 2파트 다 끝내기
=> 여기까지 트위터 간단히 구현하기

2. redux-middleware 정복 끝내기

----
캐루셀? = 이미지 드래그 하는 거
<Slick
initialSlide = {0}
afterchange ={(slide) => setCurrentSlide(slide)}
infinite 
arrows = {false}
slideToScroll={1} // 한번에 하나씩만>
{images.map((v) => (
    <div key={v.src}>
        <img src={v.src} alt={v.src}>
    </div>
))}

</Slick>

inline style이 너무 많을 경우에 
폴더를 새로 만들고 그 안에다가 styled-component를 쭈욱 넣는다
``는 사실 함수 호출 () 이었다 
100줄 넘으면 안좋으니깐 styles.js 로 따로 만든다

&로 하면 자식 컴포넌트까지 같이 해결 가능
---

transform 안에다가 position fixed가 들어가 있는 경우

처음부터 더미데이터를 잘 잡으면
프론트를 잘 만들 수 있다
잘 구상한다음에 만들어 나가면 된다

큰거부터 큼직큼직하게 
postCard postForm이 중요하니깐 그거 두개 구현하고 -> 세부적으로 들어가서 만든다

자기가 만든 코드가 자산이 된다
두고두고 쓰게 된다
