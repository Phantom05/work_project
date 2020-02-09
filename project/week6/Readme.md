# Week6

+ `container`, `wrap` 클래스의 기능 이해

  ```css
  .wrap{
    position: relative;
    width:800px;
    margin: auto;
    border: 1px solid blue;
    min-height: 400px;
  }
  ```

  `wrap`의 경우 화면의 중앙으로 모아주는 역할을 맡아 합니다.

+ 자주쓰이는 요소들 `@mixin`으로 만들어보기

  ```scss
  @mixin positionHeightCenter{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
  }
  
  @mixin positionWidthCenter{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  @mixin positionCenterCenter{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
  @mixin font($fontSize:14px,$color:black){
    font-family: sans-serif;
    font-size: $fontSize;
    color: $color;
    @content;
  }
  
  @mixin floatClear{
    &:after{
      content: '';
      display: block;
      clear: both;
    }
  }
  
  @mixin calcWidthFloat($size){
    float: left;
    width: calc(#{$size});
  }
  
  @mixin mediaPositionDisable{
    position: relative;
    left: 0;
    top: 0;
    transform: none;
  }
  ```

  자주 쓰는 믹스인 빼서 만들어보기

+ `header` 의 경우 `position:fixed`잡았을때 body 변수로 컨트롤 하기

  ```scss
  $headerHeight: 70px;
  
  body{
    padding-top: $headerHeight;
  }
  .main__header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border: 1px solid red;
    height: $headerHeight;
    background: black;
    z-index: 500;
  }
  ```

  

+ section 파트로 나눠 wrap으로 감싸 코딩해보기

  ![aertegwfgqwe](https://user-images.githubusercontent.com/33567964/74079125-620f7d00-4a76-11ea-90f8-4be2df09fd36.png)



+ 믹스인에서 치환하여 사용하기

  ```scss
  @mixin calcWidthFloat($size){
    float: left;
    width: calc(#{$size});
  }
  
  @include calcWidthFloat(100% / 2);
  ```

+ `header`, ` nav`, ` section`은 동일한 위치의 레벨로 보고 코딩하기

+ 체크 시 슬라이드 기능 이해

  ```html
    <input 
      type="checkbox"
      class="test"
    >
    <div class="menu">
      나 메뉴
    </div>
  .menu{
    position: fixed;
    width:200px;
    height: 100%;
    background: black;;
    right: -200px;
    top:0;
    color: white;
    transition: .5s;;
  }
  
  .test:checked + .menu{
    right: 0;
  }
  ```

+ scss `@import partial system `이해

  ```scss
  @import './reset.scss';
  @import './mixin';
  ```

+ scss의 이해

+ [SCSS 공식 사이트](https://sass-lang.com/documentation)

  + `@extend`
  + `@function`
  + `@if, @else if`
  + `@for`
  + `@each`
  + `@while`

+ 부트스트랩

  + container 설명, 
    + padding-none,
    + margin-none 필요
  + 부트스트랩 임포트의 이해
  + 공식 문서 사이트
    + [부트스트랩](http://bootstrapk.com/)
    + [제이쿼리](https://jquery.com/)
  + 테이블
  + 폰트
  + 폼
  + 버튼
  + 부트 스트랩 커스터마이징 이해

  ```scss
  .btn-mybtn{
    background: purple;
    color: white;
    transition: .3s;
    &:hover{
      color: white;
      background: #5c015c;
    }
  }
  ```

  

+ 웹 접근성 hidden 에 대해 설명

```html
<span class="screen-hidden">email</span>
<input type="text" placeholder="email"> <br> 
```

+ 그리드 시스템의 이해
+ css 방법론의 이해
  + SMACSS
  + BEM
+ 하나만 더 골라보기



## Homework

+ 자주 사용하는 믹스인 7개 사용해서 코딩해보기
+ 섹션 파트 `wrap`이용하여 구조 잡아보기
+ 템플릿 사이트에서 scss있는 파일 다운받아 클론 코딩 해보고 코드 비교해보기
+ [템플릿 사이트](https://templated.co/)
+ 대쉬 보드 코딩해보기, 부트 스트랩 `Grid layout`을 이용하여 코딩해보기.

+ ***Case 16***

![screencapture-templated-co-p-5302153616677877-2020-02-09-13_40_43](https://user-images.githubusercontent.com/33567964/74096386-cb0ff700-4b41-11ea-9530-9c20568a0216.png)



+ [참고](https://templated.co/p/5302153616677877)