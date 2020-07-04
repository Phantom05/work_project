console.log("hello");

/**
 * NOTE: 외부에서 인입된 값에 영향을 주지 않고, 변경되고있는 값을 실시간으로 가져올수 있는가?
 *
 */

function Test() {
  const self = this;
  Test.count = 0;

  setInterval(() => {
    Test.count++;

    // console.log(Test.count);
  }, 1000);
}
// Test();

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

document.getElementById("testBtn").addEventListener("click", function (e) {
  // timer.stop();
  console.log(timer.getSec(), "get sec");
});
