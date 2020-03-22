# week10

+ week8 간단한 코드 리뷰 복습

+ **for**반복문

  + 초기값, 조건식, 증감문

+ **while** 반복문

+ **do while** 반복문

+ **array** 사용법

  + 배열에서 요소 `for문으로 뽑아보기`
  + 배열에서 요소 `while문으로 뽑아보기`
  + `sort `사용법
    + 오름차순 `arr.sort((a,b)=>a-b)`
    + 내림차순 `arr.sort((a,b)=>b-a)`
  + `map` 사용해보기
  + `forEach`사용해보기
  + `filter `사용법
  + 텍스트로 태그만들어 순회해보기

  ```js
  // 순회하면서 텍스트로 테그만들어보기
  var arr = ['바나나','포도','사과','메론','수박','배'];
  var text = '<ul>';
  arr.forEach(item => {
    text += `<li>${item}</li>`
  });
  text += '</ul>';
  console.log(text);
  ```

  + `join ` 사용해보기
  + `splice ` 사용해보기
  + `slice ` 사용해보기
  + `concat` 사용해보기
  + 태그 만들어 순회후 `append` 해보기

  ```js
  
  var arr = [
    {type:"Volvo",year:2019},
    {type:"BMW",year:2020},
    {type:"Benz",year:2020},
    {type:"TOYOTA",year:2017}
  ];
  var cc_arr =[500,1000,1500,2000];
  
  var new_list = arr.map((item,idx)=>{
    item.cc = cc_arr[idx];
    return item;
  });
  
  var new_filter_list = new_list.filter(item=>item.cc > 1000);
  console.log(new_filter_list);
  
  new_filter_list.forEach(item=>{
    let div = document.createElement('div');
    div.classList.add('car');
    div.append(`차량 : ${item.type}, 년식 : ${item.year}, 배기량 : ${item.cc}cc`);
    document.getElementById('carBox').append(div);
  });
  ```

  + `reduce` 사용해보기

  ```js
  var arr =[45,4,9,16,25];
   var new_list = arr.reduce((a,b)=>{
     console.log(a,b);
     return a.concat(b)
   },[]);
  
  // reduce
  var new_list = arr.reduce((a,b)=>{
    // console.log(a,b);
    a[`test${b}`] = b;
    return a
  },{});
  ```

  + 함수로 array 메서드 사용하여 데이터 가공 해보기

  ```js
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
  ```

  + `every` 사용해보기

    + `every` 이용하여 간단히 login 구현해보기

    ```js
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
    ```

  + `indexOf` 이용해서 `slice` 사용해보기

  + `find` 사용해보기

+ **function** 사용법

  + 화살표 함수 사용법

  ``` js
  let test = arr => arr.map(item=>item+50);
  var text1 = (n) => {
    return n
  }
  ```

+ 간단한 문제 풀어보기 #1

```js
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
```

+ 간단한 문제 풀어보기 #2

```js
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

```

+ `Date` 객체 사용해보기
  + Date사용하여 요일가져와보기,
  + Date객체 사용하여 년도 가져와보기
+ `moment` 라이브러리 사용해보기
+ `Math`  빌트인 함수 사용해보기
  + `Math.PI`
  + `Math.round(4.5)`
  + `Math.pow(2,3)`
  + `Math.sqrt(64)`
  + `Math.ceil(4.1)`
  + `Math.floor(2.9)`
  + `Math.min(0,150,30,-8,200)`
  + `Math.max(0,150,30,-8,200)`
  + `Math.abs(-10)`
+ `setInterver`맛보기
+ 자바스크립트 `Boolean`살펴보기
  + ` 0, "", undifend, null, false,NaN` => false, 이외의것은 모두 true
+ `if` 문 안쪽으로는 아래와 같이 사용하기

```js
 const isValueTrue = !!value;
 if(isValueTrue){

 }
```

+ 멘데토리 설명
+ `if, else if , else` 사용하여 요일 출력해보기
+ `무한 루프 이용하여 프로그램 만들어보기`

```js
// 버튼하나 만들고, 버튼을클릭했을때, propmt창이뜨는데,
// 이름을 master라고 했을때,
// 환영합니다 master님 이라는 알람을띄우고
// 이름이 master가 아닐떄, 
// 주인님이 아닙니다. 알람을 띄우기
// 아무것도 입력하지않고 확인 눌렀을때, 이름을 입력해주세요. 라고 알람이뜨고
// 다시 propmt창이 뜨기,
// 취소를누르면 그냥 프로그램 종료

document.getElementById('btn').addEventListener('click',function(e){
  let isLoop = true;
  while(isLoop){
    const propmtName   = prompt('이름을 입력해주십시오.');
    const isNotNull    = propmtName !== null;
    const isNameMaster = propmtName === 'master';
    if(isNotNull){
      if(isNameMaster){
        alert(`환영합니다. ${propmtName}님`);
        isLoop = false;
      }else{
        alert('이름을 확인해주세요.');
      }
    }else{
      isLoop = false;
    }
  }
});
```

+ `switch` 문 사용해보기

+ `for, for/in, for/of, while, do/while` 사용해보기

  + `for` 문 기교 사용해보기

  ```js
  var number = 10;
  for (; number--;) {
    console.log(number);
  }
  
  for (;;) {
    number++;
    if (number % 2 === 0) {
      continue
    }
  
    if (number >= 10) {
      break;
    }
  }
  ```

  

  + `for/in, for/of` 사용해보기

  ```js
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
  ```

+ 정규식 사용해보기

  + 이메일 정규식

  ```js
  
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
  ```

  + [정규식](https://regexone.com/problem/matching_decimal_numbers) 공부해보기



+ 숙제

  + <del>같이만들어본 사이트 코딩해보기</del>

  + <del>css로 슬라이드 만들어보기</del>

  + week8 코드 분석해보기

  + 반복문으로 별찍어보기

  + 생활코딩 수업 https://opentutorials.org/course/3085

  + js  과외 수업 복습하기,

  + w3c school js 공부한곳까지 암기

  + 책 인사이드 자바스크립트

  + 자바스크립트 200제

  + canvas, svg 수학적수식, 넘어가기.

    



<hr>

10week : 총 잔여 9h 30m

+ 1day
  + +2h
+ 2day
  + +1h

- 잔여 : 6h 30m

  



