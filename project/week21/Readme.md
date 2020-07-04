# Week 21

### Coffee Order Program

+ Coffee Order Program 퍼블리싱
+ **율겸님 주도학습**
+ **scss** 파일 구조화
  - `scss @mixin` 퍼블리싱
+ `coffeeMenu.json` **ajax**  통신

```js
// axios를 이용하여 초기 데이터 받았을 때 main 함수 실행
axios.get(api.getCoffeeMenuList).then((item) => {
  config.coffeList = item.data.list;
  config.pending = false;
  loadingToggle(config.pending);
  main();
});
```

- **loadingToggle** 함수 작성

```js
function toggleLoadingBar(element) {
  return function (pending) {
    if (pending) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };
}
// curring 이용
```

+ Click 시 Modal 띄워주는 popup 함수 작성

```js
function popup(setConfig) {
  const {
    title: titleElemen,
    content: contentElem,
    footer: footerElem,
  } = setConfig;
  return function (config) {
    const { target, title, content, footer } = config;
    $(titleElemen).html(title);
    $(contentElem).html(content);
    $(footerElem).html(footer);
    $(target).modal();
  };
}
// curring을 이용한 함수작성
```

+ selected id 로 findCoffeeItem 하는 함수 작성

```js
function findCoffeeItem(config) {
  const { id, list } = config;
  const findItem = list.find((item) => item.id === id);
  return findItem;
}
```



+ **dataDrawing** 함수로 초기 coffee card item 리스트 화면 렌더링

```js
function createCoffeeCardElement(item = {}) {
  return `
  <div class="coffee__item_box">
  <label for="item_${item.id}" class="block">
    <input type="radio" name="coffee_item" id="item_${item.id}" hidden class="coffee__checkbox" data-number="${item.id}">
    <div class="coffee__item_card">
      <div class="coffee__item_row img">
        <img
          src="${item.src}"
          alt="" class="coffee__item_img">
      </div>
      <div class="coffee__item_row name">
        <p class="coffee__item_title">${item.name}</p>
      </div>
      <div class="coffee__item_row price">
        <p class="coffee__item_price">${item.price} 원</p>
      </div>
    </div>
  </label>
</div>
  `;
}

// $ 제이쿼리를 이용하여 string 파싱함
$(target).html(list.map((item) => createCoffeeCardElement(item)));
```

+ **inputSearch 하여 filtering 하는 검색 기능 구현**

  ```js
  inputSearch.addEventListener("keyup", function (e) {
    const target = e.target;
    const targetValue = target.value.trim();
    if (e.key === "Enter") {
      const filterList = config.coffeList.filter(
        (item) => item.name.indexOf(targetValue) !== -1
      );
  
      const drawFormat = {
        type: "update",
        name: "menu",
        target: coffeeListBox,
        list: filterList,
      };
        
      dataDrawing(drawFormat);
    }
  });
  ```

  + 원하는 데이터를 filter하고 `drawing` 진행

+ **list click 시 popup Modal Detail 데이터 수정**

  ```js
  
   const modalFormat = {
      target: detailModal,
      title: "Product Detail.",
      content: modalDetailContentElement(findItem),
    };
    console.log(findItem);
    openPopup(modalFormat);
  
  function modalDetailContentElement(item) {
    const { src, name, price, id } = item;
    return `
    <div class="row modal__content_box" data-name="modal_${id}">
    <div class="col-md-6">
      <div class="modalDetail__row">
        <img
          src="${src}"
          alt="" class="coffee__item_img large">
      </div>
    </div>
    <div class="col-md-6">
      <div class="modalDetail__row">
        <div class="modal__item_name">${name}</div>
      </div>
      <div class="modalDetail__row">
        <div class="modal__item_price">${numberWithCommas(price)} 원</div>
      </div>
  
    </div>
  </div>
    `;
  }
  ```

  + `findItem`을 진행하여 해당하는 데이터를 얻은 후 modal안의 정보를 업데이트,

+ **Ajax Study**

  + 오픈 API를 활용한 ajax 학습

  ```js
  const api = {
    address: "https://jsonplaceholder.typicode.com",
    post: "/posts",
  };
  
  getDataBtn.addEventListener("click", function (evt) {
    // evt.target;
    axios.get(api.address + api.post).then((response) => {
      console.log(response);
      const drawFormat = {
        data: response.data,
        target: view,
      };
      dataDrawing(drawFormat);
    });
  });
  ```

  + `https://jsonplaceholder.typicode.com` 주소를 이용하여 데이터 송수신 학습, 받은 `data`로 화면 `drawing` 까지 진행해봄

+ 크롤링을 이용한 아키텍쳐 설명
  + 간단설명
  + pulling으로 지속적으로 크롤링을 진행해야함
  + websocket을 활용해야 서버에서 브라우저로 양방향 통신이 가능
  + 메세지는 앱으로 만들수있음.
  + 리액트를 공부할 시 js를 활용한 앱이나 프로그램 으로 넘어가기가 수월함
+ 사이드 프로젝트시 `a` 링크로 `signup.html` 으로 페이지 넘기면 되는 예제 설명

+ quiz 풀이



#### 숙제

+ 커피 주문 프로그램 완성해보기

+ 퀴즈 풀어보기

+ ***quiz 1*** [링크](https://github.com/Phantom05/work_project/tree/master/project/week21/quiz/q1)

  1. `add, search`를 할수있는 `selected` 박스를 둡니다.

  2. `input` 에서 서치시 `select` 박스가 `add` 이면 `addList`  공간에 리스트를 추가합니다.

  3. `input `서치시 `select` 박스가 `search` 이면 `Search List` 공간에 `AddList` 에서 검색한 리스트를 보여줍니다.

+ ***quiz 2*** [링크](https://github.com/Phantom05/work_project/tree/master/project/week21/quiz/q2)

  1. 5분에서 카운트 다운되는 타이머를 만들고 (00:00) 형식

  2. 1분대, 2분대, 3분대, 4분대, 5분대 옵션으로 이루어진 `select `박스를 둡니다.

  3.  `select` 박스를 선택 후 `click` 버튼을 눌렀을때 현재 타이머 시간과 분대의 시간이 맞다면 `success alert`을 실패시 `failure alert`을 띄워줍니다.

+  ***quiz 3***  [링크](https://github.com/Phantom05/work_project/tree/master/project/week21/quiz/q3)

  1. `input `에서 `enter`시 `select `박스로 옵션들이 추가됩니다.
  2. `selected `박스를 선택 후 `textarea` 에 글을 입력하고 `done ` 버튼을 누를시
  3.  `#list` 태그의 요소로 아래와 같은 형식으로 `li` 태그가 들어갑니다.

  

   ```html
  <li>(선택한 select box 이름) - (textarea 내용)</li>
   ```

  



<hr>
보충수업 잔여  : 7h

