# week 14

+ ***구구단 출력기 만들어보기***

  + mixin 복습해보기

  + ```scss
    @mixin margin-top-setting($range) {
      $i: 1;
      @while $i <= $range {
        .margin-top-#{$i * 10} {
          margin-top: $i * 10px;
        }
        $i : $i+1;
      }
    }
    
    @include margin-top-setting(20);
    ```

  + `new instance `생성시 `return` 값 여부에 따른 동작 방법 설명

  + 자바스크립트의 엘리먼트와 객체에 대한 설명, 프로토타입으로 이루어진 자바스크립트 설명

  + 엘리먼트 오브젝트의 `addEventListner` 설명, `keyup, keydown, submit` 에대한 이벤트 사용

  + `addEventListner`의 콜백 함수로 들어오는 `event object` 설명

  + `dataOutput` 함수 만들어보기, `format`팅한 오브젝트를 함수의 매개변수로 받아 비구조화(구조할당) 으로 값 할당하여 데이터 가공 해보기

  + ```js
    function dataOutput(config) {
      const { dan, rows } = config;
      const rowsList = [];
      for (let i = 1; i <= rows; i++) {
        const pushFormat = {
          row: i,
          value: dan * i
        }
        rowsList.push(pushFormat);
      }
      const resultOjb = {
        [dan]: rowsList
      }
      return resultOjb;
    }
    
    ```

  + `dataDrawing` 함수 만들기

  

+ ***거스름돈 계산기 만들어보기***

+ ***투두리스트 만들어보기***







+ 참고자료
  + [구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)





<hr>

+ 보충수업 잔여 8h 30m

