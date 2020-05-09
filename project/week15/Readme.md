# week15

+ querySelector의 사용법
+ querySelectorAll의 사용법
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

+ 유동적 닷노테이션을 이용해 form input value 수정하기

+ `dataDrawing 함수로 만들기`

```js
function dataDrawing(config) {
  const { form, list } = config;
  list.map(item => {
    form[item.name].value = item.value;
  })
}

```





+ 참고자료
  + [유사배열](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)
  + [querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)



+ ***숙제***
  + 구구단 출력기 혼자 만들어보기
  + 거스름돈 계산기 혼자 만들어보기
  + 나만의 프로그램 하나 만들어보기





<hr>

- 보충수업 잔여 8h 30m

