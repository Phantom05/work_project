# Week22

+ 함수에서 변경된 값을 밖으로 빼는 방법 설명
+ 기존 함수를 사용하는 방법

```js
function Test() {
  const self = this;
  Test.count = 0;

  setInterval(() => {
    Test.count++;

    // console.log(Test.count);
  }, 1000);
}
```

> 함수를 객체로 활용하여 프로퍼트를 수정하고 이벤트로 확인합니다.

```js
document.getElementById("testBtn").addEventListener("click", function (e) {
  console.log(Test.count, "get sec");
});
```



+ `class`를 이용한 값 확인 방법

```js
class Timer {
  constructor(props) {
    this.role = 1000;
    this.sec = props.sec;
    this.interval = null;
    this.count = 0;
  }
  getSec() {
    return this.count;
  }
  start() {
    const self = this;
    self.count = self.sec;
    self.interval = setInterval(() => {
      console.log("동작");
      self.count--;
    }, self.role);
  }
  stop() {
    const self = this;
    clearInterval(self.interval);
  }
}

const timerSetting = {
  sec: 300,
};
const timer = new Timer(timerSetting);
timer.start();
```

> class로 instance를 생성하고 이벤트로 메서드를 호출해서 값을 확인하는 방법

```js
document.getElementById("testBtn").addEventListener("click", function (e) {
  // timer.stop();
  console.log(timer.getSec(), "get sec");
});
```

