# Week9

+ Case17 코드리뷰
  + img 상위엘리먼트에 사이즈주는것이 좋음,
  + a링크에 스타일링주기, link버튼을 text보다 크게만들기
    +  ga통계를 보면 클릭이 주변을 클릭하기때문에요!
    + ![srjersthwerg](https://user-images.githubusercontent.com/33567964/75601017-38d49080-5afa-11ea-8db4-8b6881865771.png)
  + wrap 사이즈는 통일하기, 서브 클래스로 컨트롤하기.
+ 애니메이션 슬라이드 구현
+ scss 분리하여 작업해보기
+ `footer `카피라이트 눈속임수  `margin-top : -17px` 이용해보기
+ `padding-bottom: 100%` : 컨텐트 컨트롤을 위해 `:after`에 사용하기
+ absolute는 엘리먼트의 height를 가져오기 때문에 padding 안의 컨텐츠가 아닌 패딩을 포함한 height를 기준으로 중앙을 잡기

![65655](https://user-images.githubusercontent.com/33567964/75601022-4be76080-5afa-11ea-8209-3ac7a53f0b93.png)



+ wrap의 경우 px로 주고 디바이스에 따라 미디어쿼리로 같이 수정해주기

![srthjesthgrgwe](https://user-images.githubusercontent.com/33567964/75601047-a7b1e980-5afa-11ea-9073-c3da64e77633.png)

+ Element hover에 대한 구조 설명

  + `.card:hover`는 각 컨택스트에 있는 엘리먼트들의 가지고있는 `.card`일때 호버한 내부로 들어가 각 `.card`아래만 `hover`가 되고 
  + 이해를 돕기위해 `.card`를 감싸고 있는 부모에 `class` 를 하나주고 `hover`시 `.card`의 배경을 `black`으로 바꼇을때 부모 엘리먼트의 컨텍스트알에 모든 `card`이기 대문에 호버 되는 부분 확인

  ```html
  <div class="row test_context">
     <div class="card b col-md-3">{...}</div>
     <div class="card b col-md-3">{...}</div>
     <div class="card b col-md-3">{...}</div>
     <div class="card b col-md-3">{...}</div>
  </div>
  ```

  

  ```css
  .test_context:hover .card{
    background: black;
  }
  ```

  

+ 자바스크립트
  + `script` 파일 임포트 방법
  + document가 무엇인가?
  + `innerHTML`,`document.wirte` 의 사용방법
  + `window`객체와 `alert`함수 설명
  + console의 활용법
    + log, dir
  + `<script`>태그의 위치와 설명
  + 선형 프로그래밍 설명
  + 주석처리 방법
    +  한줄주석 `//` 여러줄주석 `/* */`
  + 자바스크립트의 공백, 개행 설명
  + 스트링의 종류 설명 <code>' ', " ", ``</code> 
  + 변수의 선언방법과 종류 설명
    + `var, let, const`
    + 할당과 재할당, 변수의 연산 조합
  + 산술 연산자 설명
    + `+, -, *, /,**, %, ++, --`
  + 할당 연산자 설명
    + `=, +=, -=, *=, /=, %=, **=`
  + 문자열 연산자 설명
    + 문자열 + 숫자의 설명
  + 비교 연산자 설명
    + `==, ===, !=, !==, >, <, >=, <=`
  + 논리 연산자 설명
    + `&&, ||, !`
  + 자바스크립트 유형 연산자 설명
    + `typeof`
  + 데이터 유형 설명
  + `Object, String, Number, function, null은 Object, Array도 Object`
  + 함수 설명
    + 매개변수, 파라미터, 인자, 인수 설명
    + `return` 반환에 대한 설명
  + 객체 설명
    + 키와 값의 쌍으로 이루어진점 설명
    + 값을 가져오는방법, 닷노테이션 설명
    + 메서드의 설명
    + 메서드 안에서의 `this` 설명
  + 간단한 html내의 property 이벤트 설명

```html

  <h1 id="demo">Hello Javascript!</h1>
  <button 
    onmouseover="document.getElementById('demo').innerHTML= Date()"
    onclick="document.getElementById('demo').innerHTML= Date()"
  >The time is?</button>
```

+ + 이스케이프 설명
    + `\, \\, \n, \t, \b`
  + 문자열 메서드 설명
    + `String`객체의 구조 설명
    + string 타입의 String 객체 상속 설명
    + `length` 속성
    + `indexOf` 속성
    + `lastIndexOf` 속성설명
    + `repeat`메서드 설명
    + `slice` 메서드 설명
    + `substring`메서드 설명



## Homework

+ 슬라이드 만들어보기
  + 애니메이션으로 만들어보기
  + checked시 움직이는 슬라이드 만들어보기.

+ [생활코딩 자바스크립트 WEB2 듣기 시작하기](https://opentutorials.org/course/3085)
+ [W3C school 문자열 메소드 까지 따라 해보기!](https://www.w3schools.com/js/default.asp)



**보충 상황**

8week :

- 잔여 : 1h 30m
-  (다음주) 같이만들어본 사이트, 슬라이드 코드리뷰

+ 