# week15

+ `querySelector`의 사용법
+ `querySelectorAll`의 사용법
+  `[[prototype]]`,`__proto__`와 프로토타입 오브젝트 사용법
+ 생성자와 인스턴스 구조 파악

```js
//  생성자, constructor
//  인스턴스의 주체임니다. 인스턴스 숙주    
    function Person(){
    }
    Person.prototype.hello = function(){
      return 'hello'
    };

    var person = new Person(); // 인스턴스
    console.dir(
      Person
    );
    console.log(
      person
    );
```

![1_PZe_YnLftVZwT1dNs1Iu0A](https://user-images.githubusercontent.com/33567964/81463331-d089e580-91f3-11ea-9ba6-0b6aa942e9fc.png)

+ 거스름돈 계산기 `dataOutput` 함수 작성, 

  + 모듈러 연산
  + 나머지 연산
  + 이용하여 외부 컨택스트의 변수 활용하여 데이터 파싱

  ```js
  function dataOutput(config) {
    const { list, amount } = config;
    let updateValue = amount;
  
    const newList = list.map(item => {
      let tmpValue;
      if (item.elem.name !== "amount") {
        tmpValue = Math.floor(updateValue / item.value);
        updateValue = updateValue % item.value;
      } else {
        tmpValue = amount;
      }
  
      if (isNaN(tmpValue)) {
        tmpValue = 0;
      }
      return {
        name: item.elem.name,
        value: tmpValue
      }
    });
    return newList;
  }
  ```

+ 유동적 닷노테이션을 이용해 `form input value`  수정하기

+ `dataDrawing 함수로 만들기`

```js
function dataDrawing(config) {
  const { form, list } = config;
  list.map(item => {
    form[item.name].value = item.value;
  })
}

```

+ **로그인 페이지 만들어보기**

  + 부트스트랩 모달 띄워보기
  + `check remember input` 여부에 따라 `localStorage`에 값 저장하고 삭제해보기

  ```js
  inputRemember.addEventListener('change', function (e) {
    const target = e.target;
    const inputEmailValue = document.querySelector("#inputEmail").value;
    if (target.checked) {
      localStorage.remember = inputEmailValue;
    } else {
      localStorage.removeItem("remember");
    }
  })
  ```

  

  +  페이지 로딩 시 init 함수로 `checkbox ` 체크 여부, `input email `데이터 값 넣어보기
  + `axios` 이용하여 데이터 통신 해보기

  ```js
    axios(axiosConifg).then(function (res) {
      console.log(res, 'res');
      const { data } = res;
      if (data.result === 1) {
        const { profile } = data;
        alert(`Welcome. ${profile.name} 님`);
        console.log('마이페이지로 이동.');
      }else{
        alert("Login failure.");
      }
    });
  ```

  

  + `main.js` 파일 만들어 init함수와 유효성 검사 함수 만들어서 사용하기
  + node.js 설치해보기
  + npm 이용하여 package.json 만들어보기
    + npm 사용법 설명
    + `.gitignore 만들어서 git 추적에서 제외해보기`
    + `package.json`과 npm 의 사용법, 활용법 설명
    + `--save 와 -g의 `사용법 설명
  + 백엔드 프레임워크 Express 서버 설치해보기
    + `get, post` router 만들어보기
    + router 통신 구조 설명
    + html에서 데이터 요청시 router에서 값 찍어보기
    + router에서 받은 값 json으로 반환해보기







+ 참고자료
  + [유사배열](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)
  + [querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)
  + [Express js](https://expressjs.com/ko/)
  + [npm](https://www.npmjs.com/)
  + [axios](https://github.com/axios/axios)



+ ***숙제***
  + 구구단 출력기 혼자 만들어보기
  + 거스름돈 계산기 혼자 만들어보기
  + 나만의 프로그램 하나 만들어보기
  + 로그인페이지도 하나 만들기보기



<hr>

- 보충수업 잔여 8h 30m

