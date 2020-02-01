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

  



## Homework



+ 신호등 만들어보기

![rtjrtjethwer](https://user-images.githubusercontent.com/33567964/73587487-ce7eff00-44ff-11ea-9a58-4a48a74835f8.png)

> 첫번째 신호등이 빨간색일떈 두번째 신호등이 초록불
>
> 첫번째 신호등이 주황불일댼 두번째 신호등 초록불이 깜빡깜빡
>
> 첫번째 신호등이 초록불일떈 두번째 신호등 초록불이 빨간불



+ 대쉬보드 레이아웃 잡아보기

![Screen Shot 2018-08-19 at 2 18 27 PM](https://user-images.githubusercontent.com/33567964/73587505-038b5180-4500-11ea-8b92-e91c6390cc64.png)