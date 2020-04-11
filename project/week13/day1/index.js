// console.log(`Hello world`);

function clock() {
  const date = new Date();
  return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}

setInterval(() => {
  const currenctTime = clock();
  document.getElementById('clock').innerHTML = currenctTime;
}, 1000);



class Person {
  constructor(props, getName) {
    console.log(props);
    this.hello = props;
    this.name = getName;
  }
}



console.log(
  new Person('hello', '율겸')
);
// {}.hello = 'hello'
console.clear();

// 타언아 => 자바스크립트 포기하는 1순위 this

// javascript this 4가지형태로
// 1. 기본적인 함수안에서 this는 window를 가르킴
// 2. 객체 안의 메서드(함수)에서는 this는 자신을 호출한 객체를 가르킴
// 3. bind, call, apply를 이요한 this 사용법
// 4. 인스턴스 생성될때의 constructor에서의 this 바인딩

function myFunction() {
  console.log(this);
}
console.log(myFunction());

function myFunctionCall(args) {
  // console.log(this,args);
  this.testFunction(args);
}


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

myObject.myMethod();
myObject.myCallFunction();
// bind 붙이다, 조이다

const myBindFunction = myFunction.bind(myObject);


myFunctionCall.call(myObject, 'hello', 'wrold', 'eheh'); // 1,2번
myFunctionCall.apply(myObject, ['hello', 'wrold', 'eheh']); // 1,2번




console.clear();
// myObject.layerFunction1()();
myObject.layerFunction2()()();
console.clear();


function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.hello = function(){
  console.log('hello');
}

// __proto__

var first = new Student('John',26);
console.log(first)
first.hello();

console.log(
  first.__proto__ === Student.prototype
);


console.log(
  first instanceof Student
);


const obj = {};
console.log(
  Object.create({})
);

// [];
// new Array();


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target,source);
console.log(result);



var arr = ['hello',1,2,3,'world'];


var new_arr = arr.map(item=>item+"_wow");
var new_filter_arr = arr.filter(item=> typeof item === 'string');

var new_reduce_arr = arr.reduce((x,y)=>{
  x[y] = 'hello';
  return x;
},{});

console.log(new_arr);
console.log(new_filter_arr);
console.log(new_reduce_arr);


var test = 10;

function add(x,y){ // pure function
  const t = x+y;
  const z = t*t;
  return z;
}

function add1(x,y){ 
  test++; // 부수효과
  return x+y + test;
}

console.log(
  add(10,10)
);
console.log(
  add(10,10)
);
console.log(
  add(10,10)
);