

/**
 * 진도는 일단 나가보는데, 공부한 프로젝트에, 사이드 프로젝트를 스스로 생각하여, 계쏙 공부를 해본다.
 * w3c school 복습(진도 나간대 까진)
 * 생활코딩 js
 * 지루할 땐 => 진도를 예습해본다.(하지만 확실히 익혀두고 간다)
 * 인사이드 자바스크립트
 * +사이드 프로젝트
 * 
 */


// var dateChecker = undefined ;

function abc() {

}
// var => 함수의 성질을 갖고있다
// 호이스팅 : 선언이 될때, 코드의 최상단으로 이동하는것을 호이스팅




// var a = undefined;
// var bbb = undefined;
// // code....


// // dateChecker()
// // let const


// // var => // 동일하게 동작함

// // 처음에 값을 넣어주는것 초기화라 
// // reset = 0

// var dateChecker = abc;

// // let,
// // const

// const abc = 10;
// abc = 20; // x

// let abc = 10;
// abc = 20;

// bbb = 10;

// // 실행 컨택스트

// if(true){

//   abc =10;

//   if(true){
//     let abc = 10;
//   }

// }

// // es6 공식적으로 var 쓰지말라~ 라고 






// var dateChecker = function () {
//   var date = new Date();
//   return date
// };

// // ...
// function dateChecker() {
//   var date = new Date();
//   return date
// };

// console.log(
//   dateChecker()
// );




// // 링킹 
// class Abc{
//   constructor(props){
//     this.name= props;
//   }

//   model(name = "기본"){
//     return `${this.name} ${name} 자동차`
//   }
// }


// const a = new Abc('A모델');
// console.log(a);


// console.log(
//   a.model('벤츠1')
// );



// const b = new Abc('B모델');
// console.log(
//   b.model('벤츠1')
// );


// // __proto__


// function Abcc(){

// };
// Abcc.prototype.hello = 10;
// Abcc.prototype.log = function(str){
//   console.log(str);
// };

// const abbb = new Abcc();
// console.log(abbb,'abbb');
// console.log(
//   abbb.hello
// );  // 10;


// abbb.log('wow~~~');


// console.dir(
//   Object
// );



// Abcc.wow = 10;
// console.dir(Abcc);

// const a = new Function();  // bad
// const a = new Array(); // bad
// const a  = new Object(); // bad


// let test = {};
// test.wow = 10;

// let test = {
//   wow:10
// }



// 형 체크 x 
// int 
// float,
// void 

//  변수에 대입과 동시에 형이 결정됨.


// 언어의 특성
// {
//   let abc
//   {
//     abc = 10;
//   }
// }


// 값, 참조
// Boolean, null, undefined, String,와 Number
// var a = 10;
// var a = 'asf';


// const a = {
//   abc:10,
//   bbb:20,
//   avbc:30
// };
// a.abc = 10;
//  참조 값,

// 값의 특성, 변수를 대입했을때, 깊은 복사가 된다.
//  참조의 특성, 그냥 참조가 된다,

console.clear();

var a = 10;
var b = a;
a = 20;

console.log(a);
console.log(b);

var c = {
  abc: 10
};
var d = c;
c.abc = 30;

console.log(c, 'c');
console.log(d, 'd');


// 콜 바이 벨류, 콜 바이 레퍼런스



// let userName = 'ergerhjer';
// let userNameLen = a.length;
// let isUserNameLenZero = aLen === 0;

// if(isUserNameLenZero){

//   // 0 => 1 =>0 // false

// }


Number('1');
Boolean('true');

// 타입스크립트,


console.log(
  // 'ba'+ ++'a'
);



// 1+'1' = '11';


// 페이지가 없을때 404


// IIFE
// (function () {

// })();

// const abc = () => {
//   return ' hello'
// }



// function add10(hello){
//   return function test1(hello1){
//     return hello + hello1;
//   }
// }

// const add10 = hello => hello1 => hello+ hello1;
const add10 = hello => {
  return hello1 => {
    return hello + hello1;
  }
};

// 클로저
// 내부에서 외부 스코프에 있는 함수를 참조할수 있는 상태가 클로저,
// 단, 내부 함수를 외부함수가 호출한 경우에 한함,

let num10 = add10(10);


// console.log(
//   num10(20)
// );
// console.log(
//   num10(30)
// );
// console.log(
//   num10(500)
// );


// import { } from 'lib/sate';



// const Modules = Module();

// console.log(
//   Modules.sayHello()
// );



// function Worker(1000000){
//   return 1000000
// }


var Page = (function(){

  var Module = function(){
  
    function sayHello(){
      console.log('hello');
    }
  
    return {
      sayHello:sayHello
    }
  }

  var Factory = function(){
  
    function sayHello(){
      console.log('hello');
    }
  
    return {
      sayHello:sayHello
    }
  }

  // 0 100000 for
  // b.worker();

  // Module().sayHello();
  // Factory().sayHello();
  // Factory().sayHello();
  // Module().eventHandle();
  // Factory().modal();
  // Module().sayHello();

  // Worker()
  // Factory().sayHello();
  // Module().sayHello();
  // Factory().sayHello();
  // Factory().sayHello();
  // Factory().sayHello();
  // Factory().sayHello();
  // Module().sayHello();

})();