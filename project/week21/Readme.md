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







+ 숙제
  +  인풋 2개의 퀴즈 풀어보기!

<hr>
*보충수업 잔여  : **8h***

