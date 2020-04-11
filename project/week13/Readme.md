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

+ `function prototype` 과 `class 인스턴스 ` 설명

  - new 인스턴스의 사용법 설명

+ 프로토타입 참고자료

  + [참고자료1]([https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67](https://medium.com/@bluesh55/javascript-prototype-이해하기-f8e67c286b67))
  + [참고자료2](http://www.nextree.co.kr/p7323/)
  + [참고자료3](http://insanehong.kr/post/javascript-prototype/)

  





<hr />

- 이번주 잔여 8h 30m