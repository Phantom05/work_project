# Week3

+ 같은 성질의 css은 class로 묶고 종류가 다를때 class를 추가해서 사용해보기

  + ```css
    box{
        height:100px;
    }
    .box.red{
        color:red;
    }
    ```

+ text-align의 center는 자식엘리먼트가 `inline-block`이거나`inline` 엘리먼트일때만 가능합니다.

+ 레이아웃 구조는 `<diu>`, 의미없는 컨텐츠 - `<span>`

+ 접근성 검사 사이트

  + [W3C](https://validator.w3.org/unicorn/?ucn_lang=ko)
  + [접근성 위주](http://wave.webaim.org/)
  + [최적화](https://developers.google.com/speed/pagespeed/insights/)

+ 접근성 수정은 마지막에 하는걸 추천

+ **box-sizing **

  + > 패딩이나 보더를 가지고 있는 엘리먼트가 있을때 예상한거보다 다르게 나올 수가 있는데, 엘리먼트의 크기를 예측하기 쉽게 사용하기 위한 기법으로 box-sizing이라는 속성을 씁니다.  만약 box-sizing이 없다면 content-box를 기준으로 효과들이 먹어서 content의 크기는 건드리지않고 content외부의 효과들로 사이즈가 커지게 되는데 이때 사람의 눈에는 컨텐츠만 보는것이 아니고 보더와 패딩이 포함된 모두를 보기때문에 사이즈가 달라서 표현하는데 문제가 있을 수 있습니다. 하지만 box-sizing을 border-box로 바꿔주게 되면 border를 기준으로 효과들이 적용되기 때문에 화면을 보다 손쉽게 컨트롤 할 수있는 장점이 있습니다.

  + ```html
    <style>
    }
    .box{
      width: 120px;
      border: 1px solid red;;
      
    }
    .box.bold{
      border: 20px solid  red;
      box-sizing: border-box;
      padding:10px;
    }
    </style>  
    <div class="box bold">
        Hello
      </div>
      <div class="box">
        Hello
      </div>
    ```

  + 위의 태그에서 border-box를 주석했다 풀었다를 반복해서 화면을 보면 content의 크기가 변하는것을 확인할수 있습니다. border-box를 줬을 경우 border를 기준으로 하기때문에 border의 크기는 변하지 않고 안쪽 컨텐츠가 변하는것을 확인 할 수 있고, border-box를 주지 않았을경우 content-box를 기준으로 하기 때문에 content의 크기가 변하지 않는것을 확인할 수 있습니다.

+ ​    px, rem, em 설명

  + rem은 html태그를 기준으로 산정
  + em은 상위 부모 엘리먼트로 상대적으로 산정

+ 세로 정렬
  + 방법의 종류 Flex, Table, Line-height, posiotion,
  + position으로 세로정렬 하기를 추천
+ list를 가로로 나열할때
  + inline-block보단 float를 써서 가로 나열을 추천합니다.
  + inline-block은 text의 성질을 갖고있어서 상하관계 속성관계를 이어받아 레이아웃을 구성하는데 부수효과가 많이 일어나게 됩니다. 또한 font특성상 상하좌우 1px의 공간을 가지고 있어 레이아웃을 구성하는데 문제가 방생합니다.

+ font-fmaily font-style

+ icon 라이브러리 사용법

  + [Font Awesome](https://fontawesome.com/)
  + [Bootstrap](http://bootstrapk.com/)
  + [Google Meterial](https://material.io/resources/icons/?style=baseline)

+ a:link -방문하지 않은 정상적인 링크

  a:visited -사용자가 방문한 링크

  a:hover -사용자가 마우스를 가져 가면 링크

  a:active -클릭 순간의 링크





### Home Work

+ *Case#1*

![124124124346346](https://user-images.githubusercontent.com/33567964/72658531-9226ab80-39f5-11ea-8e7d-4ad2d5c80eca.png)

![ejrtyjhrte](https://user-images.githubusercontent.com/33567964/72658534-98b52300-39f5-11ea-8bc9-61d1f6925de8.png)

