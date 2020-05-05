# week 14

+ ***구구단 출력기 만들어보기***

  + scss `mixin` 복습해보기

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

  + `array[index]`보단 `array push` 이용하여 `rowsList` 배열 만들어 데이터 가공하기

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

    +  객체 순회 `for in` 사용해보기

  + `createElement` 사용하여 엘리먼트 생성하여보기

  + `append` 이용하여 `element`의 자식으로 `push` 해보기

  + `className` 이용하여 class 이름 변경해보시

  + `textContent` 이용하여 element의 text 넣어보기

  ```js
  /**
   * NOTE: document에 넣을 target 키값과, dataOutput에서 만들어진 결과를 data 키값으로 넣습니다.
   * @param {object} config 
   */
  function dataDrawing(config) {
    const { target, data } = config;
    dataReset(target);
  
    const boxElem = document.createElement('div');
    boxElem.className = "result__row_box";
  
    for (keyName in data) {
      const danName = keyName;
      const danValue = data[keyName];
      for (let i = 0; i < danValue.length; i++) {
        const rowValue = danValue[i];
        const rowElem = document.createElement('div');
        rowElem.className = "result__row";
        rowElem.textContent = `${danName} x ${rowValue.row} = ${rowValue.value}`;
        boxElem.append(rowElem);
      }
    }
    target.append(boxElem);
  }
  ```

  

  + `format`팅한 데이터 `value`확인하여 숫자인지 확인, 데이터 없을때 `alert`띄워보기

  ```js
  /**
   * NOTE: 데이터를 입력받는 이벤트
   */
  inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const danValue = +inputDan.value;
    const rowsValue = +inputRows.value;
    const submitObj = {
      danValue, 
      rowsValue
    };
  
    if(isNaN(submitObj.danValue) || isNaN(submitObj.rowsValue) ){
      alert("Please enter only numbers.");
      return ;
    }
  
    if(submitObj.danValue === 0 || submitObj.rowsValue === 0){
      alert("Please enter your data.");
      return; // 함수가 종료됨
    }
    dataSubmit(submitObj);
  });
  ```

  

  

+ ***거스름돈 계산기 만들어보기***

  + `form`안의 `input`들의 `name `가져와 `element targeting` 해보기
  + `init` 함수 만들어 element 컨트롤 해보기

  ```js
  /**
   * NOTE: 페이지가 로드됬을때, init 함수가 실행됩니다.
   */
  function init() {
  
    // 페이지로드시 계산하는 input에 포커스를 줍니다.
    inputCalc.focus();
  
    // view전용 input의 readOnly 속성을 true로 바꿔줍니다.
    Array.from(viewInputElems).map(item => {
      item.readOnly = true;
    });
  
  ```

  

  + `dataReset` 함수 만들어보기

  ```js
  /**
   * NOTE: viewInput들과, calcInput의 value를 초기화
   * @param {object} config 
   */
  function dataReset(config) {
    const { items } = config;
    items.map(item => {
      item.value = "";
    })
  }
  ```

  + resetBtn 클릭 이벤트 시 데이터 리셋해보기

  ```js
  /**
   * NOTE: 리셋 버튼을 클릭했을때, confirm 후 리셋 함수 동작
   */
  resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete === false) {
      return;
    }
    const combineAllInputList = viewInputElemList.concat(inputCalc);
    const resetObj = {
      items: combineAllInputList
    };
    dataReset(resetObj);
  });
  ```

  

+ ***투두리스트 만들어보기***



+ 참고자료
  + [구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  + [Reflow, Repaint](https://webclub.tistory.com/346)





<hr>

+ 보충수업 잔여 8h 30m



***숙제***

+ 거스름돈 계산기 완성해보기