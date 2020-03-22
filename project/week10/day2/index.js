
// NOTE: 문제 1
// 년식이 1씩 다 증가를 해버린상황. 
// 년식을 1씩 줄여야하는 코드를 짜야함.
// new_Volvoe 올바른 년식에 +1씩한 데이터들을 추가해야함.

var arr = [
  { type: "Volvo", year: 2019 },
  { type: "BMW", year: 2020 },
  { type: "Benz", year: 2020 },
  { type: "TOYOTA", year: 2017 }
];

var arr1 = [
  { type: "현대", year: 2019 },
  { type: "시보레", year: 2020 },
  { type: "대우", year: 2020 },
];

var makeNewList = arr => {

  const new_list = arr.map(item => {
    item.year = item.year - 1;
    return item;
  });

  new_list.forEach(item => {
    const newObj = { type: `new_${item.type}`, year: item.year + 1 };
    new_list.push(newObj);
  });

  return new_list;
}

console.log(
  makeNewList(arr1)
);


console.clear();
// NOTE: 문제 2 구구단 출력하기!
var gogodan = dan => {
  let res = '';
  for (let i = dan; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      res += `${i} x ${j} = ${i * j}\n`;
    }
    res += `\n`;
  }
  return res;
}

console.log(
  gogodan(2)
);


console.clear();

// es6 이상의 문법
// 전세계적으로 수정을 지속적으로하는 단체 엄청많음
// TC39 , ECMA

// 14명,


var d = new Date();
var week = ['일', '월', '화', '수', '목', '금', '토'];
console.log(
  d.getFullYear()
);
console.log(
  week[d.getDay()] + '요일'
);


// NOTE: 무조건 실무코딩은 moment 하기
console.log(
  moment().format('YYYY DD MM, HH:mm:ss a')
);
// moment

console.clear();

console.log(
  Math.PI
);
console.log(
  Math.round(4.5)
);
console.log(
  Math.pow(2, 3)
);
console.log(
  Math.sqrt(64)
);
console.log(
  Math.ceil(4.1)
);
console.log(
  Math.floor(2.9)
);
console.log(
  Math.min(0, 150, 30, -8, 200)
);
console.log(
  Math.max(0, 150, 30, -8, 200)
);
console.log(
  Math.abs(-10)
);


// setInterval(item=>{
//   console.log(
//     Math.ceil(Math.random() * 10000000000000000000000000000000)
//   );
// },10);

// true false
// NOTE:
/**
 * false
 * 0, "", undifend, null, false,NaN
 */

// const isValueTrue = !!value;
// if(isValueTrue){
//   // 기교
// }

console.clear();
//  == ===
console.log(
  1 === '1'
);

// 멘데토리
// var cond = true;
// if(cond){
//   // true
//   console.log('true');
// }else if(cond === false){
//   // false
// }else{

// }





var day = d.getDay();
var res = '';
if (day === 0) {
  res = '일';
} else if (day === 1) {
  res = '월';
} else if (day === 2) {
  res = '화';
} else if (day === 3) {
  res = '수';
} else if (day === 4) {
  res = '목';
} else if (day === 5) {
  res = '금';
} else if (day === 6) {
  res = '토';
}

console.log(`오늘은 ${res}요일 입니다.`);
console.clear();

// var name = prompt('이름를 입력해주세요');
// var age = prompt('나이를 입력해주세요');
// var gender = prompt('성별를 입력해주세요');

// console.log(`${name}님은 ${age}세이며, ${gender}입니다.`);

// 버튼하나 만들고, 버튼을클릭했을때, propmt창이뜨는데,
// 이름을 master라고 했을때,
// 환영합니다 master님 이라는 알람을띄우고
// 이름이 master가 아닐떄, 
// 주인님이 아닙니다. 알람을 띄우기
// 아무것도 입력하지않고 확인 눌렀을때, 이름을 입력해주세요. 라고 알람이뜨고
// 다시 propmt창이 뜨기,
// 취소를누르면 그냥 프로그램 종료

// NOTE: 코드 비교해보기
document.getElementById('btn').addEventListener('click', function (e) {
  let isLoop = true;
  while (isLoop) {
    const propmtName = prompt('이름을 입력해주십시오.');
    const isNotNull = propmtName !== null;
    const isNameMaster = propmtName === 'master';
    if (isNotNull) {
      if (isNameMaster) {
        alert(`환영합니다. ${propmtName}님`);
        isLoop = false;
      } else {
        alert('이름을 확인해주세요.');
      }
    } else {
      isLoop = false;
    }
  }
});



switch (10) {
  case 10: {
    console.log('10');
    break;
  }
  case 12: {
    console.log('12');
    break;
  }
  default: {
    console.log('default');
  }
}


// for, for/in, for/of, while, do/while
// 0 => false
var number = 10;
for (; number--;) {
  console.log(number);
}


console.clear();
for (;;) {
  number++;
  if (number % 2 === 0) {
    continue
  }

  console.log(number);
  if (number >= 10) {
    break;
  }
}
console.clear();

var person = {
  fname:"John", 
  lname:"Doe", 
  age:25,
  // key:"hello"
};

for(var key in person){
  console.log(key, person[key]);
}
console.clear();

var cars = ['BMW', 'Volvo', 'Mini'];

for(var item of cars){
  console.log(item);
};
cars.forEach(item=>{
  console.log(item);
});


// 검색 패턴을 형식화한 문자,

console.clear();
// re,reg
// var regName = /^[11]/;
// var result = regName.test('1');

function regEmail(value){
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(value)
}

document.getElementById('emailBtn').addEventListener('click',function(){
  const emailInputValue = document.getElementById('email').value;
  const isRegEmail = regEmail(emailInputValue);
  if(isRegEmail){
    console.log('이메일 정규식 통과');
  }else{
    alert('이메일을 확인해주세요.')
  }
});
