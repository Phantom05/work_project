# Week13



+ 이벤트 루프 복습

![KakaoTalk_20200411_111834470](https://user-images.githubusercontent.com/33567964/79035167-cbd31100-7bf6-11ea-92b2-ccbec6681037.gif)

+ 자바스크립트 엔진의 기초 설명
+ 가비지 컬렉터의 설명
  + 순환 참조 설명
+ DOM 과 `Layout Tree` 설명

![DOM](https://user-images.githubusercontent.com/33567964/79035183-f7ee9200-7bf6-11ea-9217-718644439d2c.png)

+ this의 4가지 사용법 설명

  1. 기본적인 함수안에서 this는 window를 가르킴

  2. 객체 안의 메서드(함수)에서는 this는 자신을 호출한 객체를 가르킴

  3. bind, call, apply를 이요한 this 사용법

  4. 인스턴스 생성될때의 constructor에서의 this 바인딩

```js
var myObject = {
  name: "hello world",
  myMethod: function () {
    console.log(this);
    console.log(this.name);

  },
  myCallFunction: myFunction,
  testFunction: function (a) {
    console.log('testfunction', a);
  },
  layerFunction1() {
    let self = this;
    return function () {
      console.log(self);
      console.log(this);
    }
  },
  layerFunction2() {
    let self = this;
    return () => {
      console.log(self);
      console.log(this);
      return () => {
        console.log(this);
      }
    }
  },
}
```



+ `this, call, apply, bind` 설명
+ 프로토타입의 상속과 체인 설명

![1_RIY6LBqQAbXPzMXMwH5d-Q](https://user-images.githubusercontent.com/33567964/79035094-08523d00-7bf6-11ea-902a-596d74bb52eb.png)

+ `object assign` 설명
+ `map, reduce, filter` 설명
+ 순수함수, 부수효과 설명

```js
function add(x,y){ // pure function
  const t = x+y;
  const z = t*t;
  return z;
}

function add1(x,y){ 
  test++; // 부수효과
  return x+y + test;
}
```

+ `closure ` 설명

```js

// NOTE: 클로저
function count() {
  let number = 0;
  return function add() {
    number++;
    return number;
  }
}

let upCount = count();

console.log(
  upCount()
);
console.log(
  upCount()
);
console.log(
  upCount()
);
console.log(
  upCount()
);
```



+ `function prototype` 과 `class 인스턴스 ` 설명

  - new 인스턴스의 사용법 설명
+ 프로토타입 참고자료

  + [참고자료1]([https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67](https://medium.com/@bluesh55/javascript-prototype-이해하기-f8e67c286b67))
  + [참고자료2](http://www.nextree.co.kr/p7323/)
  + [참고자료3](http://insanehong.kr/post/javascript-prototype/)


+ 고차함수 설명

```js

// NOTE: 고차함수 basic
function attitude(original, replacemenet) {
  return function (source) {
    return source.replace(original, replacemenet);
  }
}
var snakify = attitude(/millenials/ig, "Snake People");

console.log(
  snakify("The Millenials are always up to something.")
);
```



+ 재귀함수 설명

```js
// NOTE: 재귀 
function increase(count) {
  console.log(count);
  count++;
  if (count > 10) {
    return;
  }
  increase(count);
}
increase(0);
```



+ 비동기 설명

![1_FA9NGxNB6-v1oI2qGEtlRQ](https://user-images.githubusercontent.com/33567964/79060785-5766a380-7cc4-11ea-9e32-60e725d41792.png)

***ajax가 Web Api에 들어가 있었네요 비동기 처리들도 따로 메모리를 뜨는게 아니라 web API으로 들어가게되네요***

+ 컬렉션과 생성기 설명

  + `Map` 설명

  ```js
  var map1 = new Map();
  var obj1 = { a: 15 };
  var obj2 = { b: 10 };
  
  map1.set(obj1, "User");
  map1.set(obj2, "User1");
  
  console.log(map1);
  for(let keyname of map1.keys()){
    console.log(keyname);
  }
  
  for(let valueName of map1.values()){
    console.log(valueName);
  }
  
  console.clear()
  for(let data of map1.entries() ){
    // console.log(data);
    console.log(data[0]);
    console.log(data[1]);
  }
  ```

  

  + `Set` 설명

  ```js
  var set1 = new Set();
  
  set1.add('hello');
  set1.add('world');
  
  console.log(
    set1.keys()
  );
  console.log(
    set1.values()
  );
  ```

  

+ `Promise` 설명

```js
// NOTE: Promise
function promise2(intiData){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      resolve(intiData);
    },1000);
  })
};

function promise3(intiData){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      resolve(intiData + 10);
    },1000);
  })
};

promise2(50)
.then(promise3)
.then(function(data){
  console.log(data+10);
  document.getElementById('test').innerHTML = data;
});
```



+ `async/await` 설명

```js
// NOTE: async/ await
async function test(){
  var data = await dataComunication();
  document.getElementById('test').innerHTML = data;

  var data = await dataComunication();
  document.getElementById('test').innerHTML = data;
}

```

+ 자료구조, 빅오 표기법 기본 설명

+ 알고리즘 추천 사이트
  + [코드워](https://www.codewars.com/)
  + [프로그래머스](https://programmers.co.kr/)
  + [백준](https://www.acmicpc.net/)



<hr />
- 이번주 잔여 8h 30m