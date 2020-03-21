console.log('hello world');

// let resultConfrim = confirm('게임을 시작하시겠니까?');
// if(resultConfrim){
//  let question1 = prompt('당신의 나이는 몇살입니까?');
//  document.body.append(`${question1}세 입니다.`)
// }
// console.log(resultConfrim)

//  var 는 절대 쓰면 x
// 실제 코딩땐 전부 let, const 바꿔주시면됩니다.

var arr = ['바나나','포도','사과','메론','수박','배'];
// 인덱스 0부터 
// 길이, length 1

console.log(arr[4])

console.log(arr.length);

console.log(
  arr[arr.length -1]
);
console.clear();

// 초기값, 시작값
// 조건값, 조건식
// 증감값, 증감식,

for(let i = 0; i < 10; i+=1){
  console.log(i)
}


console.clear();

// while
// while(i < 10){
//   i += 1;
//   // console.log(i);
// }

// console.log(i);

// var i = 0;

// do{
//   console.log(i);
// }while(false){
//   i += 1;
//   console.log(i);
// };


for(let i = 0 ; i < arr.length ; i++){
  arr[i] = `과일_${arr[i]}`
};
console.log(arr);


// arr.forEach(function(item){
//   console.log(item);
// });

// array map
var new_list = arr.map(function(item){
  return `새로운_${item}`
});

console.log(new_list);

console.clear();

// sort
var arr = [5,4,3,1,2,11];
console.log(
  arr.sort((a,b)=>b-a)
);


console.clear();


// function test(num){
//   return num
// }
// 화살표 함수
var test = (num) => num;

console.log(
  test(10)
);


// 순회하면서 텍스트로 테그만들어보기
var arr = ['바나나','포도','사과','메론','수박','배'];
var text = '<ul>';
arr.forEach(item => {
  text += `<li>${item}</li>`
});
text += '</ul>';
console.log(text);
// document.body.innerHTML = text;



var arr = [1,2,3,[5,5,5]];
var arr = [1,2,3,{title:10}];

arr.unshift(15); // 첫번째요소로 추가됨
arr.push(20); // 마지막요소로 추가됨


arr.pop(); // 마지막 요소 삭제
arr.shift(); // 첫번째 요소 삭제

arr[1] = 5;
var arr = new Array(1,2,3); // Bad 방법
var arr = [1,2,3]; // Good 방법

console.log(arr);
// array는 object type
console.log(
  typeof arr
);
// Array.isArray(arr)
console.log(
  Array.isArray(arr)
);

// {}



var arr = ['바나나','포도','사과','메론','수박','배'];
var arr = ['010','5017','2132'];
// 바나나,포도,사과,메론,수박,배
// +82 1050172132
console.log(
  arr.join("-")
);

console.clear();

// splice 자르는 방법...
// 원본을 잘랐음,
var arr = ['바나나','포도','사과','메론','수박','배'];
console.log(
  arr.splice(2,0,['레몬','키위'])
);
console.log(arr);
console.clear();

var arr1 = ['철수','영희'];
var arr2 = ['기철','기영'];
var arr3 = ['루피','샹크스'];

console.log(
  arr1, arr2
);
// concat
console.log(
  arr1.concat(arr2,['이누아샤'],arr3)
);

console.clear();
var arr = ['바나나','포도','사과','메론','수박','배'];

console.log(
  arr.slice(1)
);

// console.log(arr);
console.clear();

var arr = [5,6,3,2,1,5,10];

console.log(
  arr.sort((a,b)=>a-b).reverse().map(item=>item+5)
);
// 체인 형식, 프로토타입 체인

console.clear();

var arr = [
  {type:"Volvo",year:2019},
  {type:"BMW",year:2020},
  {type:"Benz",year:2020},
  {type:"TOYOTA",year:2017}
];
var cc_arr =[500,1000,1500,2000];
// {type:"TOYOTA",year:2017, cc:200}

for(let i =0 ; i < arr.length; i++){
  console.log(arr[i].year);
}

var new_list = arr.map((item,idx)=>{
  item.cc = cc_arr[idx];
  return item;
});

console.log(new_list);

var new_filter_cc_list = cc_arr.filter(item=>item > 1000);
console.log(new_filter_cc_list);


var new_filter_list = new_list.filter(item=>item.cc > 1000);
console.log(new_filter_list);

new_filter_list.forEach(item=>{
  let div = document.createElement('div');
  div.classList.add('car');
  div.append(`차량 : ${item.type}, 년식 : ${item.year}, 배기량 : ${item.cc}cc`);
  document.getElementById('carBox').append(div);
});


console.clear();

var arr =[45,4,9,16,25];
// var new_list = arr.reduce((a,b)=>{
//   console.log(a,b);
//   return a.concat(b)
// },[]);

// reduce
var new_list = arr.reduce((a,b)=>{
  // console.log(a,b);
  a[`test${b}`] = b;
  return a
},{});



var res = 0;
arr.forEach(item=>{
  res += item;
});


console.log(new_list);
console.log(res);

console.clear();

var text1 = (n) => {
  return n
}
var text2 = (n) => n ;

console.log(
  text1(50)
);

// 넣은 숫자의 + 50이 되는 함수를 만들어주세요,

// 넣은 배열의 짝수의 배열을 새로만든후 새로만든 배열의 요소들에게 50을 더한 배열을 반환해주세요,
// 힌트 : filter를 이용해보세요,

var arr = [5,10,80,1,2,3,4];
var test = arr => arr.filter(item=> item%2 ===0).map(item=>item+50);
console.log(
  test(arr)
);

console.clear();

var arr = [
  {name:"철수",age:19,hobby:'coding'},
  {name:"영희",age:21,hobby:''},
  {name:"기철",age:20,hobby:'baseball'},
];

var test = arr =>{
  const new_list = arr.filter(item=>item.age>=20);
  const res_list = new_list.map(item=>{
    if(!!item.hobby){
      item.hobby = [item.hobby].concat(['movie']);
    }else {
      item.hobby = 'movie';
    }
    return item
  });
  return res_list;
}
// 함수로 들어온 배열의 객체의 요소중 나이가 20 이상인 요소들로 배열을 만든 후,
// 해당 배열의 hobby에 movie를 추가해주고 hobby가 2개이상할때 hobby를 배열로 만들어준다,
// 그렇게 만들어진 새로운 배열을 반환한다.

console.log(
  test(arr)
);


console.clear();



var arr = [
  1 > 0,
  10 > 5, 
  5 < 10
];
// // every
// console.log(
//   arr.every(item => item > 1)
// );
// // some
// console.log(
//   arr.some(item => item > 5)
// );


if(arr.every(item=>item)){
  console.log('모든 조건 합격');
  console.log('로그인 성공');
}else{
  alert('정보를 확인해주세요.')
}

var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginBtn = document.getElementById('btn');

loginBtn.addEventListener('click',function(){
  var arr = [
    usernameInput.value.length > 0, 
    passwordInput.value.length > 0
  ];
  if(arr.every(item=>item)){
    alert('로그인에 성공하였습니다.');
    window.location.href ='./mypage.html'
  }else{
    alert('아이디, 비밀번호를 확인해주세요.');
  }
});



// indexOf
var arr = ['바나나','포도','사과','메론','수박','배'];
console.log(
  arr.slice(arr.indexOf('메론'),arr.indexOf('수박'))
);


var arr= [1,2,3,4,5];

// find
var find_arr = arr.find(item=>{
  return item > 3;
});

console.log(find_arr);

// 퍼블리싱 4개월 // => 2개월 50%

// 8개월 ~ 12개월 ~ 14개월 => 30%
// 6~7개월



// 생활코딩 수업 https://opentutorials.org/course/3085
// js 공부한거 복습,
// w3c school js 공부한곳까지 암기
// 책 인사이드 자바스크립트
// 자바스크립트 200제
