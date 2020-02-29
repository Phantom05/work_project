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

  





## Homework

+ 슬라이드 만들어보기
  + 애니메이션으로 만들어보기
  + checked시 움직이는 슬라이드 만들어보기.

+ 



**보충 상황**

8week :

- 잔여 : 1h 30m
-  (다음주) 같이만들어본 사이트, 슬라이드 코드리뷰