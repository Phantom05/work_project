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
// const test = new Test();

const home = new Test({ pageName: "Home" });
home.titleChange();

const signin = new Test1({ pageName: "Signin" });
signin.titleChange();

const test1 = new Test({ pageName: "title" });
// console.dir(Test);
// // => {}
// //{}.pageName = "title"

/**
 * NOTE: this 사용법
 * 1. 함수안에 있으면 윈도우를 가리킨다.
 * 2. 메서드안에 있으면 메서드가 바인딩된 객체를 가리킨다.
 * 3. 생성자안에서 사용 될 때, 변환된 인스턴스를 가리킨다.
 * 4. bind, call,apply 의 this
 * 5. Arrow function 상위의 this를 상속 받는다.
 */

function windowThis() {
  console.log(this);
}
windowThis();

const World1 = {
  bye: "world",
  // 메서드
  programming() {
    console.log(this, "method"); // World1
  },
};
World1.programming();

const module = {
  x: 55,
  getX(a, b, c) {
    console.log(a, b, c);
    return this.x;
  },
};

const unboundGetX = module.getX;
const boundX = unboundGetX.bind(module);
// console.log(unboundGetX());
// console.log(boundX());
// console.log(module.getX());
// const unBount = module.getX.bind(module);
// unBount();

console.log(module.getX.apply(module, ["test", "world", "eghelf"]));

// function RemovableStorag(){
//   this.dataStore={}
// }

// npm,

console.clear();

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
