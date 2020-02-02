# Week5

+ float 복습

+ 리스트가 있는 링크를 만들떄 a태그를 퍼블리싱

+ prefix 설명

+ 호버 메뉴 만들어보기

  ![tryktykjryjr](https://user-images.githubusercontent.com/33567964/73587401-83182100-44fe-11ea-9295-bfac53e5d44b.png)

+ 호버 가로 메뉴 만들어보기

  ![rwstjerthergwq](https://user-images.githubusercontent.com/33567964/73587409-9e832c00-44fe-11ea-985c-0cc1ba731e0e.png)

+ 호버했을때 리스트 메뉴 만들어보기

  ![tykryjrthe](https://user-images.githubusercontent.com/33567964/73587413-b955a080-44fe-11ea-97f3-02725ba89470.png)

+ 속성 선택자

  ```css
  a[target="_blank"]{
    color: red;
  }
  
  input[type="text"]{
    color:red;
  }
  ```

+ form, textarea css 스타일링

+ 인풋 호버시 언더바 스타일링

  + `border`로 스타일링시 스타일이 무너지는부분 확인
  + `after`로 `absolute`로 스타일링하기

+ html태그, rem 영향 확인

+ 폰트, 사이즈 조절 속성 확인`vw, vh, px, rem, %` 위주 추천 학습

+ text 속성 관련 학습

  + white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;

+ transition 학습

  + `transition: width 2s, height 4s;` 개벌 속성 트렌지션
  + `transition-delay: 1s; 딜레이`
  + `transition-timing-function: ease-in-out;` 가중치

+ transform 학습

  + rotateY
  + scale
  + translate
  + skew
  + matrix

+ 애니메이션 학습

  + 백그라운드 색상변화 학습.

    ```css
    animation-name: colorChange;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    
    @keyframes colorChange{
      0%{
        /* background: greenyellow; */
        left:0;
        top:0;
      }
      25%{
        /* background: blue;
        width:70px;
        height: 80px;
        border-radius: 100%; */
        left:100px;
        top:0;
        
      }
      50%{
        /* background: purple; */
        left:100px;
        top:100px;
      }
      75%{
        left:0px;
        top:100px;
      }
      100%{
        left:0px;
        top:0px;
      }
    }
    ```

+ 애니메이션 4각형 그리며 이동해보기

+ ul li 로 레이아웃 잡지 않기

+ 리스트들 밑줄 last-child 써보기

+ 서브 타이틀 언더라인 붙힐떄 after로 하면 편함.

```css
.subtitle__undeline{
  display: inline-block;
  position: relative;
  text-align: center;
}
.subtitle__undeline:after{
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width:90%;
  height: 1px;
  background: gray;
  bottom: -5px;
}
```

+ 툴팁 만들어보기
+ 그라데이션 만들어보기
+ 이미지 오버레이 만들어보기
  + 호버 오버레이
  + 호버 다이렉션
+ 버튼 스타일링 해보기
+ [Flex](https://www.w3schools.com/css/css3_flexbox.asp)
  + 플렉스 사용해보기
+ [Grid](https://www.w3schools.com/css/css_grid_item.asp)
  + 그리드 사용해보기
+ [반응형](https://www.w3schools.com/css/css_rwd_intro.asp)
  + 해당 링크에 나와있는 구조 만들어보기

+ [템플릿](https://www.w3schools.com/css/css_templates.asp)
  + 해당 링크에 나와있는 반응형 템플릿들 만드랴어보기



+ **Scss**

  - CSS pre-processor (전처리기)
    - css를 확장하는 스크립팅 언어로서, 컴파일러를 통하여 브라우저에서 사용할 수 있는 일반 css 문법 형태로 변환합니다.
  - Sass는 css를 만들어주는 언어로 자바스크립트 처럼 특정 속성(ex. color, margin, width ...)의 값(ex. #000, 3px, 400px ...)을 변수로 선언하여 필요한 곳에 변수를 적용할 수도 있고, 반복되는 코드를 한번의 선언으로 여러 곳에서 재사용할 수 있도록 해주는 등의 기능을 가졌다.
  - Sass는 복작한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐만 아니라, 코드의 가독성을 높여주어 유지보수를 쉽게해줍니다.
  - Sass 파일의 확장자는 .scss 이다.

  ## SASS vs SCSS

  Sass 는 SASS 표기법(.sass)과 SCSS표기법(.scss)이 있다. 이전 버전에서는 SASS 표기법이 기본 표기법이었으나 Sass 3.0부터 CSS친화적인 scss 표기법이 기본 표기법이 되었다.

  ## 주석(Comment)

  한 줄 주석(//)과 여러 줄 주석(/* */)이 있다. 기존 css에서는 한줄 주석이 없었다.

  sass 에서 한줄 주석(//)은 css로 컴파일 되었을 때 나타나지 않는다. 여러 줄 주석은 컴파일 되었을 때 동일하게 나타난다.

  ## 데이터타입

  sass 에서 사용할 수 있는 데이터타입

  - 숫자 : 1,2, 3 ... 10px 도 숫자로 본다.
  - 문자열 : 겹따옴표, 홑따옴표, 따옴표가 없는 것 모두 문자열로 인식
  - 색상 : blue, #001100, rgba(255, 0, 0, 0,3)
  - 불리언 : true, false
  - null
  - 리스트(lists) : 괄호 속에서 컴마나 공백으로 구분.
    - margin, padding 속성 값 지정에 사용되는 0 auto와 font-family 속성 값 지정에 사용되는 Helvetica, Arial, Sans-serif 등은 공백또는 콤마로 구분된 값의 list이다.
    - 1.5em 1em 0 2em, Helvetica, Arial, sans-serif
  - 맵(maps) : 키:값 쌍이 괄호로 구분 (JSON과 유사한 방식)
    - (key1 : value1, key2 : value2, key3 : value3)

  ## Scss Seletor

  ```
  <h1>hello
    <span class="son">world</span>
  </h1>
  
  <style>
    h1{
      color:blue;
      .son{
        color:red;
      }
    }
  
  </style>
  ```

  기본적으로 css와 셀렉하는게 같으나, 위와 같이 중첩해서 css를 작성할 수 있다.

  ```
  .entry-content {
    p { font-size: 9.814rem; }
  }
  
  // compiled to
  .entry-content p {
    font-size: 9.814rem;
  }
  ```

  특정 선택자 내에는 속성 정의만 들어오는 것이 아니라, nested된 속성 정의 블럭이 들어올 수 있다.

  ```
  .entry-content {
    p {
      font: {
        family: "Noto Serif CJK KR", serif;
        size: 9.814rem;
        weight: 400;
      }
    }
  }
  ```

  선택자가 네스팅되는 것과 유사하게, 특정한 family로 묶여있는 속성들도 네스팅이 가능하다. 예를 들어 font의 경우 font-family, font-size, font-weight 등이 주로 세트로 정의되는데, 다음과 같이 하나의 세트(?)인 속성들은 속성의 하위 사전 형태로 작성할 수 있다.

  ## 상위요소 참조

  ```
  a {
    text-decoration: none
    &:hover { text-decroation: underline; }
  }
  ```

  &을 사용하면 현재 블럭이 적용되는 셀렉터를 참조한다. 정확하게는 참조가 아닌 치환이다. 특히 현재 속성을 설정중인 셀렉터에 의사셀렉터를 적용할 때 유용하다.

  위 선언은 아래와 같이 컴파일 된다.

  ```
  a { text-decoration: none; }
  a:hover { text-decoratino: underline; }
  ```

  ## 또다른 &사용법

  ```
  .widget {
     font-weight: 400;
     &-area { font-weight: 600; }
     &-top_posts { font-weight: 1000; }
  }
  ```

  이 & 은 현재 셀렉터로 치환되기 때문에 다음과 같이 복합어로 이루어진 클래스들을 하나의 블럭으로 네스팅하여 묶을 때도 유용하게 쓰일 수 있다. 워드 프레스 테마의 경우를 예로 들면, 위젯들은 모두 widget-**** 의 식으로 클래스 이름을 갖는다. 이 들을 개별 셀렉터로 쓰지 않고 아래처럼 네스팅할 수 있다는 이야기다.

  위 예에서 & 은 .widget 으로 치환되므로 컴파일된 결과는 아래와 같다.

  ```
  .widget { font-weight: 400; }
  .widget-area { font-weight: 600; }
  .widget-top_posts { font-weight: 1000; }
  ```

  ## 변수와 연산자

  색상이나 선 스타일, 폰트 패밀리등은 대체로 사이트 내에서 공통적으로 정의해놓은 값을 쓰는 경우가 많다. 이들을 매번 지정하지 않고 변수로 들어서 사용하면 변경 시점에 변수의 내용만 수정하여 모든 곳의 값을 공통적으로 바꿀 수 있을 것이다.

  | 타입   | 설명                                                         |
  | ------ | ------------------------------------------------------------ |
  | 숫자값 | 숫자 리터럴로 쓰인 값은 숫자로 판단한다. 크기를 나타내는 단위가 붙은 경우도 숫자로 취급한다. 12px, 1.534rem |
  | 문자열 | 문자의 경우 기본적으로 따옴표 여부에 상관없이 문자열로 취급한다. |
  | 색상값 | 색상명이나 색상리터럴로 표기된 값은 색으로 인식한다. (blue, #aa33cc, rgba(255, 0, 0, 0.3)) |
  | 불리언 | true, false                                                  |
  | 널     | null                                                         |
  | 리스트 | 리스트 내 원소는 동일 타입일 필요는 없으며, 괄호 속에 컴마나 공백으로 구분된 값들을 리스트로 본다. |
  | 맵     | 괄호 속에서 : 으로 키 : 값을 구분하여 쓴다.                  |

  ## 문자열의 치환 및 내삽(interpolation)

  \#{...} 을 사용하면 문자열 내에 표현식의 결과를 내삽하거나, 다른 변수의 내용으로 치환하는 것이 가능하다. 이는 속성값의 일부 혹은 전체 뿐만 아니라 속성명이나 셀렉터에 대해서도 적용 가능하다.

  ```
  $foo: bar;
  $fontsize: 12px;
  $lineheight: 30p;
  
  p {
    font: #{$fontsize}/#{$lineheight};
    &.#{$foo} { color: red; }
  }
  ```

  이 예제는 다음과 같이 컴파일 된다.

  ```
  p { font: 12px/30px; }
  p.bar { color: red; }
  ```

  \#{}를 이용해서 코드의 어디든지 변수 값을 넣을 수 있습니다.

  ```
  $family: unquote("Droid+Sans");
  @import url("http://fonts.googleapis.com/css?family=#{$family}");
  @import url("http://fonts.googleapis.com/css?family=Droid+Sans");
  ```

  Sass의 내장 함수 unquote()는 문자에서 따옴표를 제거합니다.

  ## 변수 유효범위(Variable Scope)

  변수는 사용 가능한 유효범위가 있습니다. 선언된 블록({}) 내에서만 유효범위를 가집니다.

  변수 $color는 .box1의 블록 안에서 설정되었기 때문에, 블록 밖의 .box2에서는 사용할 수 없습니다.

  ```
  .box1 {
    $color: #111;
    background: $color;
  }
  // Error
  .box2 {
    background: $color;
  }
  ```

  ## @at-root (중첩 벗어나기)

  중첩에서 벗어나고 싶을 때 @at-root 키워드를 사용합니다. 중첩 안에서 생성하되 중첩 밖에서 사용해야 경우에 유용합니다.

  SCSS:

  ```
  .list {
    $w: 100px;
    $h: 50px;
    li {
      width: $w;
      height: $h;
    }
    @at-root .box {
      width: $w;
      height: $h;
    }
  }
  ```

  Compiled to:

  ```
  .list li {
    width: 100px;
    height: 50px;
  }
  .box {
    width: 100px;
    height: 50px;
  }
  ```

  아래 예제 처럼 .list 안에 있는 특정 변수를 범위 밖에서 사용할 수 없기 때문에, 위 예제 처럼 @at-root 키워드를 사용해야 합니다.(변수는 아래에서 설명합니다)

  ```
  .list {
    $w: 100px;
    $h: 50px;
    li {
      width: $w;
      height: $h;
    }
  }
  
  // Error
  .box {
    width: $w;
    height: $h;
  }
  ```

  ## 



  <!-- /* 코드리뷰 시간 */ -->

  <!-- 숙제, 코드리뷰 중점. -->

  <!-- 다음 주 금요일 -->

  <!-- HTML 태그 암기,  -->

  <!-- CSS 속성 암기 -->





## Homework



+ **신호등 만들어보기**

![rtjrtjethwer](https://user-images.githubusercontent.com/33567964/73587487-ce7eff00-44ff-11ea-9a58-4a48a74835f8.png)

> 첫번째 신호등이 빨간색일떈 두번째 신호등이 초록불
>
> 첫번째 신호등이 주황불일댼 두번째 신호등 초록불이 깜빡깜빡
>
> 첫번째 신호등이 초록불일떈 두번째 신호등 초록불이 빨간불



+ **대쉬보드 레이아웃 잡아보기**

![Screen Shot 2018-08-19 at 2 18 27 PM](https://user-images.githubusercontent.com/33567964/73587505-038b5180-4500-11ea-8b92-e91c6390cc64.png)



+ **숙제 Case8 부터는 Scss, 반응형으로 만들어보기**

