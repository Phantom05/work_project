# week10

+ week8 간단한 코드 리뷰 복습

+ for 반복문

  + 초기값, 조건식, 증감문

+ while 반복문

+ do while 반복문

+ array 사용법

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

+ function 사용법

  + 화살표 함수 사용법

  ``` js
  let test = arr => arr.map(item=>item+50);
  var text1 = (n) => {
    return n
  }
  ```

  



+ 숙제

  + 같이만들어본 사이트 코딩해보기

  + css로 슬라이드 만들어보기

  + week8 코드 분석해보기

  + 반복문으로 별찍어보기

  + 생활코딩 수업 https://opentutorials.org/course/3085

  + js  과외 수업 복습하기,

  + w3c school js 공부한곳까지 암기

  + 책 인사이드 자바스크립트

  + 자바스크립트 200제

  + canvas, svg 수학적수식, 넘어가기.

    



<hr>

10week :

- 잔여 : 7h 30m

  



