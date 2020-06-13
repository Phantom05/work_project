function Test(props = {}) {
  this.pageName = props.pageName;
  this.bye = function () {
    console.log("bye");
  };
}

Test.prototype.myFn = function () {
  console.log("fn");
};

// Test.prototype.say = function () {
//   console.log("hello");
// };

Test.say = function () {
  console.log("helloworld");
};
// Test.prototype.titleChange = function () {
//   document.getElementById("title").innerHTML = this.pageName;
// };

// class Test {
//   constructor(props) {
//     this.pageName = props.pageName;
//   }
//   titleChange() {
//     document.getElementById("title").innerHTML = this.pageName;
//   }
// }
function Hello() {
  console.log(this, "hello");
}

const World = {
  bye: "world",
  programming() {
    console.log(this, "method");
    // 메서드
    const abc = 100;
    return () => {
      console.log(abc, "내부 함수");
      console.log(this, "test");
      console.log(this.bye);
    };
  },
};
