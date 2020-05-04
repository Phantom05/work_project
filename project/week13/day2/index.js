console.log(`Hello Programing`);


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


// HOF

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

console.clear();


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

// 순수함수에만, 재귀를 쓰는 경우가 많습니다.

console.clear();
// NOTE: ES7
// 오바라이팅 + 제네릭

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


console.log(
  map1
);
console.log(
  ['abc','bbb']
);


console.clear();

var set1 = new Set();

set1.add('hello');
set1.add('world');

console.log(set1);


console.log(
  set1.keys()
);
console.log(
  set1.values()
);


for(let data of set1.values()){
  console.log(data);
}


// console.log(
//   map1.get(obj1)
// );

// console.log(
//   map1.keys()
// );
// console.log(
//   obj1
// );

// console.log(
//   map1.values()
// );
// console.log(
//   map1.entries()
// );

// const map1 = {
//   '{ a: 15 }':"User"
// }


// 깊은복사 얕은복사,


// for(let i = 0 ; i < 10; i ++){
//   obj[i]
// }


console.clear();

var promise1 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve('hello');
  },3000);
});


promise1.then(function(data){
  console.log(data,'promise result');
});

promise1.then(function(data){
  console.log(data,'promise result1');
})


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

// all,every


// NOTE: async/ await
async function test(){
  var data = await dataComunication();
  document.getElementById('test').innerHTML = data;

  var data = await dataComunication();
  document.getElementById('test').innerHTML = data;
}


// 제너레이터
// function* gen(){
//   yield 
//   while(true){
//     gen()
//   }
// }

// gen.next()
// gen.next()
// gen.next()
// gen.next()