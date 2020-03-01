console.log('hello programming');


document.getElementById('demo').innerHTML = 'Hello World'

console.dir(
  document
);

// document.write(5 + 10);
console.log(
  document.body
);
console.log(
  document.head
);

// TypeScript
// 전역 함수

// 빌트인 객체.
// log
// dir
// window.alert('Hello');
// alert('Hello');


// .hello{
//   //  중괄호
// }
console.log('world');
console.log(0.1 + 0.2);
console.log(0.5 + 0.6);
console.clear();


// NOTE: 선형 프로그래밍
let x, y, z;
x = 5; y = 6;
// int x 
// int x = 5;
// float y = 6.5;
z = x + y;
let a = 'HEllo';
// ' ', " ", ` `

console.log(x, y, z);
console.log(a);

// ('hello' + %d + 'world', 5)

console.log(a + x);
//  숫자 , 스트링이 결합되면 무조건 스트링으로 형변환이 됩니다.
console.log('' + (x + y));

//  + , - , * / 
//  % => 모듈러
console.log(
  5 % 2
);

let lastName = "Chris";
let firstname = "Brown";
console.log(
  lastName + firstname
); 

// Change Comment
/*
 여러줄
 주석을 
 할수
 있습니다.
 */

/*
  var 
  let
  const
*/
console.clear();

const HELLO = 10;
// HELLO = 20;
let world = 10;
world = 20;
console.log(world);

// e50
// console.log(
//   // 9999999999999**89999
// );

// BigNumber

// NOTE: 산술 연산자

console.log(
  2 ** 3
);

let n = 1;

console.log(
  ++n
);
console.log(
  n++
);

console.log(n);
console.clear();
// NOTE: 할당 연산자

let na = 5;
// na += 10;
// na -= 10;
na **= 2
console.log(na);

// NOTE: 비교연산자
// ==, ===
console.log(
  5 == '5'
); // 왠만하면 ===으로 쓰는것을 추천
console.log(
  5 === '5'
);
console.log(
  5 != '5'
);
console.log(
  5 !== '5'
);

console.warn('== 두개는 추천하지 않는다.');

console.log(
  5 > 10, 5 < 10, 5 >= 5, 5 <= 5
);

// NOTE: 논리연산자
console.log(
  3 < 5 || 3 > 5
);
console.log(
  5 && 10
);

console.log(
  5 > 10 && 10
);
console.log(
  !!!true
);
console.clear();

// NOTE: 유형연산자
console.log(
  typeof 'hello', typeof 10, typeof {}
);

console.log(
  typeof [], typeof null
);

// console.log(
//   null
// );
// console.log(
//   []
// );
// console.log(
//   {}
// );


//NOTE:  비트 연산자 x 나중에 관심있으면, 한번 살펴보시고 , 공부 해보시는걸 추천
console.clear();


// NOTE: 함수
// 파라미터, 인자

function hello(num1,num2,num3,num4,num5){ // 인자
  console.log(arguments);
  return (num1 + num2) * num3 || '1'
}

console.log(
  hello(5,2,3,1) // 인수
);

console.clear();


let car = { 
  type:"Benz",
  model:500,
  color:'white',
  fullModelName(num){
    // return this.type + ' CLS' + this.model + ' - '+ this.color;
    return `${this.type} CLS ${num || this.model} - ${this.color}`;
  }
};
// 메서드 : 객체 안에 있는 함수

console.log(car);

// 닷노테이션
console.log(
  car['type'], car['color'], car.type
);

console.log(
  car.fullModelName(300)
);



// NOTE: 이벤트


// NOTE: 문자열
console.log("The chracter \\ is called backslash");
console.log("The chracter \n is called backslash");
console.log("The chracter \b is called backslash");
console.log("The chracter \t is called backslash");
console.log("The chracter \v is called backslash");

// boy
console.clear();
console.log(
  String
);

function hello(){};

let object1 ={};
object1.hello = 'world';
console.log(object1.hello);

hello.world = 'programming';
console.log(hello);
console.dir(hello)

console.dir(String);
console.log(
  'hello'.repeat(10)
);
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txtLength = txt.length;
console.log(txtLength);

let str = "Please locate where locate 'locate' occurs!";
let getIndex = str.indexOf('locate',8);
let getLastIndex = str.lastIndexOf('locate');
console.log(getIndex);
console.log(getLastIndex);

let newSliceStr = str.slice(-7);

console.log(
  newSliceStr
);

let newSubStringStr = str.substring(0,7);
console.log(
  newSubStringStr
);

// NOTE: replace() 전까지

