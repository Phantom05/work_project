# week17

렉시컬 스코프 === 실행 컨택스트

+ 렉시컬 환경 스코프

  ![image](https://user-images.githubusercontent.com/33567964/82721483-5def2e80-9cf8-11ea-90d4-2ec789fabf3c.png)

+ 렉시컬 외부 환경 스코프 설명

  + [참조](https://poiemaweb.com/js-scope)

+ var의 함수 스코프 설명

+ try catch 관련 설명

  + 서버쪽은 필수, 프론트는 api와 중요한 코드위주로 진행

+ 클로저에 대한 설명

![2017-06-11-javascript7_1](https://user-images.githubusercontent.com/33567964/82721504-84ad6500-9cf8-11ea-8230-da2d5a26398d.png)

+ 로또 숙제 분석
  + setInterval 해제 코드 추가
  + 중복제거 코드 추가

```js

const startBtn = document.querySelector('#startBtn');
const decideBtn = document.querySelector('#decideBtn');
const stopBtn = document.querySelector('#stopBtn');
const numRound = document.querySelector('#numRound');
const lottoResult = document.querySelector('#lotto_result')

let interCount;
const saveNumList = [];

const number = [];
for (let i = 1; i <= 45; i++) number.push(i);

function _includes(array,value){
  return array.indexOf(value) !== -1;
}

startBtn.addEventListener('click', () => {
  interCount = setInterval(function () {
    const ranNum = Math.floor(Math.random() * number.length);
    numRound.textContent = ranNum;
  }, 10);
});


decideBtn.addEventListener('click', () => {
  const ranNum = Math.floor(Math.random() * number.length);
  if (saveNumList.length < 7) {
    
    if (_includes(saveNumList,ranNum) === false) {
      saveNumList.push(ranNum);
    }
    if (saveNumList.length === 7) {
      clearInterval(interCount);
      numRound.textContent = "End"
      saveNumList.sort((a, b) => a - b);
      lottoResult.textContent = `이번주 로또 번호는 ${saveNumList} 입니다.`
    }
  }
})

```

- getter 설명

  - get이라는 키워드를 이용해 객체 내에서 메서드를 선언해 놓았을 시,  함수를 호출하듯이 호출하는것이 아닌, 객체의 키값으로만 호출할 수가 있습니다.

  - 하지만 이름만으로 호출함으로써, 매개변수가 없는 상태로만 진행되게 됩니다.

  - **mdn 내용 참고**

    - 어떤 프로퍼티에 접근할 때마다 그 값을 계산하도록 해야 하거나, 내부 변수의 상태를 명시적인 함수 호출 없이 보여주고 싶을 때, JavaScript의 *getter*를 이용할 수 있습니다. getter가 바인딩된 프로퍼티는 동시에 실제 값을 가질 수는 없지만, getter와 setter를 동시에 바인딩해 일종의 유사 프로퍼티(pseudo-property)를 만들 수는 있습니다.

      `get` 구문을 이용할 때는 다음을 유의하세요.

      - 숫자나 문자열로 구성된 식별자를 이용할 수 있습니다.
      - getter는 절대로 매개변수를 가져서는 안 됩니다. ([Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) 를 참조하세요.)
      - 하나의 객체 리터럴에 또다른 getter나 데이터 바인딩은 불가능합니다. (`{ get x() { }, get x() { } }` 나 `{ x: ..., get x() { } }` 는 사용할 수 없습니다.)

  - ```js
    const obj = {
      log: ['a', 'b', 'c'],
      get latest() {
        if (this.log.length === 0) {
          return undefined;
        }
        return this.log[this.log.length - 1];
      }
    };
    
    console.log(obj.latest);
    // expected output: "c"
    
    ```

- 계산기 코드 리뷰

  - `=` 버튼을 두어 data중심으로 객체의 값을 변경 후 drawing 해주는 기능으로 개발 설명
  - 

- 끝말잇기

  - 코드분석
    - 초기값 없을시 처리 기능 설명
    - 깔끔한 데이터를 위한 `trim` 함수 적용
  - 삼항식 분석

  ![unit20-1](https://user-images.githubusercontent.com/33567964/82745925-c86da080-9dc4-11ea-8463-2ecf542b858c.png)

  - 콤마함수

  ```js
  function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  ```

  

- 시장에 가면

  - `dataDrawing` 함수 curring 하여 사용해보기

  - 리팩토링 방식으로 개발

  - 데이터 중심 개발

  - 체이닝 기법을 활용한 데이터 파싱 

    ```js
    //example
    const inputList = targetValue.split(",").map(item => item.trim());
    
    $(target).show().fadeOut(1000);
    
    ```

  - 다양한 메서드 활용

    - split
    - map
    - trim
    - every
    - slice
    - push





+ **숙제**
  + 구구단 출력기 혼자 만들어보기 (시간이 되면 해보기)
  + 거스름돈 계산기 혼자 만들어보기 (시간이 되면 해보기)
  + 나만의 프로그램 하나 만들어보기 (시간이 되면 해보기)
  + 로그인페이지도 하나 만들기보기 (시간이 되면 해보기)
  + jquery 훑어보며 사용해보기

------

- 보충수업 잔여 8h 30m