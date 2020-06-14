# Week 19

+ prototype 시스템 설명

  + `counstrutor`의 존재 이유와, `instance`의 존재이유, **Home** 페이지와 **Signin** 페이지를 나눠 설명

  + 생성자의 사용법 설명

    ```js
    //home.js
    const home = new Test({ pageName: "Home" });
    home.titleChange();
    //signin.js
    const signin = new Test({ pageName: "Signin" });
    signin.titleChange();
    ```

    

+ `class `문법과 `function`의 `prototype ` 생성자 문법 설명

+ 인스턴스의 사용법 설명 (공장과 하청업체)

  ```js
  // function
  function Test(props = {}) {
    this.pageName = props.pageName;
    this.bye = function () {
      console.log("bye");
    };
  }
  Test.prototype.titleChange = function () {
    document.getElementById("title").innerHTML = this.pageName;
  };
  Test.prototype.say = function () {
    console.log("say");
  };
  
  // class
  class Test1 {
    constructor(props = {}) {
      this.pageName = props.pageName;
      this.bye = function () {};
    }
    say() {
      console.log("say");
    }
    titleChange() {
      document.getElementById("title").innerHTML = this.pageName;
    }
  }
  
  //두 코드가 동일하게 돌아가게됩니다. class 의 내부적으로 constructor가 생성되어 내부동작은 다르지만 개발자가 사용하는 비즈니스 로직은 동일하다고 생각하면 좋습니다.
  ```

  + 인스턴스가 생성되는 순서

    ```js
    const test1 = new Test({ pageName: "title" });
    // // => {}
    // //{}.pageName = "title"
    ```

+ `this`의 사용법 설명

  ```js
  /**
   * 1. 함수안에 있으면 윈도우를 가리킨다.
   * 2. 메서드안에 있으면 메서드가 바인딩된 객체를 가리킨다.
   * 3. 생성자안에서 사용 될 때, 변환된 인스턴스를 가리킨다.
   * 4. bind, call,apply 의 this 사용법
   * 5. Arrow function 상위의 this를 상속 받는다.
   */
  ```

  + 1. 함수안에 있으면 윈도우를 가리킨다.

       ```js
       function windowThis() {
         console.log(this);
       }
       windowThis();
       ```

    2. 메서드 안에 있으면 메서드가 바인딩 된 객체를 가리킨다

       ```js
       const World1 = {
         bye: "world",
         // 메서드
         programming() {
           console.log(this, "method"); // World1
         },
       };
       World1.programming();
       ```

       

    3. 생성자 안에서 사용 될 때 변환된 인스턴스를 가리킨다.

       ```js
       function Test(props = {}) {
         this.pageName = props.pageName; // 새롭게 생성된 {}.pageName을 타겟
         this.bye = function () {
           console.log("bye");
         };
       }
       const test = new Test();
       ```

       

    4. `bind, call, apply` 의 `this` 사용법

       ```js
       const module = {
         x: 55,
         getX(a, b, c) {
           console.log(a, b, c);
           return this.x;
         },
       };
       
       const unboundGetX = module.getX;
       //bind
       const boundX = unboundGetX.bind(module);
       // const unBount = module.getX.bind(module);
       // unBount();
       module.getX.call(module, "test", "world", "eghelf")
       console.log(module.getX.apply(module, ["test", "world", "eghelf"]));
       ```

       + `method`의 경우 기본적으로 선언된 `object`를 가리키나, 변수로 할당된 함수는 전역에 선언된 부분이기 때문에 `unboundGetX`의 경우 전역에 선언된 함수와 같습니다. 때문에 `unboundGetX()`호출시 `this`가 `window`를 가리키게 되는데요, 이떄 bind를써서 `module`로 `this` 를 붙혀주는 기능이 `bind` 기능입니다.
       + 허나 `bind`의 경우 변수로 빼서 사용해야한다는 불편함이 있는데요, 이떄 bind와 동시에 함수를 실행 시켜주는 함수가 `call` 함수입니다.

       ```js
       module.getX.call(module, "test", "world", "eghelf") 
       ```

       + 만약 인자들을 배열 형태로 받고 싶다면 `apply` 를 사용하면 됩니다. `call`과 `apply`의 차이는 단순 인자를 풀어서 받을건지 배열로 받을건지 뿐입니다.

       ```js
       module.getX.apply(module, ["test", "world", "eghelf"])
       ```

       

    5. `Arrow function ()=>{}` 은 상위의 `this`를 상속받는다.

       ```js
       const World2 = {
         bye: "world",
         // 메서드
         programming() {
           console.log(this, "method");
           const abc = 100;
           return () => {
             // closure
             console.log(abc, "내부 함수");
             console.log(this.bye);
           };
         },
       };
       World2.programming()();
       
       
       ```

       

    

  + `Git flow` 시스템의 설명

  + 모듈 시스템 설명

    + create-react-app 후 모듈 시스템 설명
    + `import` 와 `export` 설명

  + npm 에 대한 설명

    + 모듈을 업로드하고 받아 쓰는 `Node Package Module`  시스템!

  + 자바스크립트 200제 프로토타입 기반 상속 50번문제 해석

    ```js
    function Storage() {
      this.dataStore = {};
    }
    
    Storage.prototype.put = function (key, data) {
      this.dataStore[key] = data;
    };
    Storage.prototype.getData = function (key) {
      return this.dataStore[key];
    };
    
    const productStorage = new Storage();
    productStorage.put("id001", { name: "keyboard", price: 2000 });
    console.log(productStorage.getData("id001"));
    
    function RemovableStorage() {
      Storage.call(this);
    }
    RemovableStorage.prototype = Object.create(Storage.prototype);
    
    const remobableStorage = new RemovableStorage();
    RemovableStorage.prototype.removaAll = function () {
      this.dataStore = {};
    };
    
    const productStorage2 = new RemovableStorage();
    productStorage2.put("id0002", { name: "mouse", price: 3000 });
    productStorage2.removaAll();
    const item2 = productStorage2.getData("id002");
    ```

    + Storage에서 중요한 점은 prototype.put 을 이용하여 constructor의 메서드로 put을 넣어주어 인스턴스에서 put 을 호출시 `__proto__` 링크를 타고 constructor 객체로 들어가 메서드를 실행하게 되는점입니다.

    + RemovaleStorage() 에서 중요한점은 Storage call을 사용하여 생성자가 new RemovableStorage() 될떄 Storage를 실행하여 RemovableStorage로 this를 바인딩하여 풀어줍니다. 여기서 call의 개념이 나오는데요, `bind, call, apply`는 한번씩 보고 넘어가면 좋은 개념입니다.

      

  + **보고서 프로그램 개발**

    + 이벤트 딜리게이션 학습

      + 이벤트 전파 막는방법 학습 `stopProgation` 을 사용하면 버블링을 막게 됩니다.

      + 버블링, 캡처링 개념

        ![1_tqVhiv1UU6loC8Mily3kpw](https://user-images.githubusercontent.com/33567964/84586046-bd9cad80-ae50-11ea-97eb-538c75a85cee.png)

        ![efAzj](https://user-images.githubusercontent.com/33567964/84586056-d2794100-ae50-11ea-8cf8-9f9aabd045a1.jpg)

        

    + logout 후`window.location.reload()`  로 새로고침

      + `intialize` 함수로 인한 화면 업데이트

    + Template Literal (` `` ` )을  이용한 tag 파싱

    + `localStorage ` 이용

      + `lock `페이지 구현

      + `propmt`를 이용한 `storage `동기화,

      + `login, logout`에 따른 화면 변화

      + `form insert`시 데이터 중심 업데이트

        

    + `document.querySelector, document.querySelectorAll`  추상화

      ```js
      function el(name) {
        const element = document.querySelector(`#${name}`);
        return element;
      }
      function elAll(className) {
        const getElements = document.querySelectorAll(className);
        const elemenetList = Array.from(getElements);
        return elemenetList;
      }
      ```

    + `Content List `데이터를 통한 리스트 업데이트

    + 페이지 `init `시 `storage`값으로 데이터 초기화



+ 숙제
  + `JSON.stringfy `학습해보기, `JSON.parse` 학습해보기 [링크](https://www.w3schools.com/js/js_json_stringify.asp)
  + Delete 부분 코드 추가해서 해서 올려놨어요!! 코드 이해하면서 Read쪽 한번 해보시면 좋을거같은데여!!
  + 어려운 개념 복습해보기!
  + 나만의 프로그램 하나 만들어보기 (시간이 되면 해보기)







<hr>

보충수업 잔여 9h 

