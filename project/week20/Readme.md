# Week20



### Report Program

+ 저번 주 수업의 중요성으로 한번 더 재설명 [19주차](https://github.com/Phantom05/work_project/tree/master/project/week19)

  + `prototype`과 `constructor `에 대한 설명
  + `bind,call,apply` 의 흐름에 대한 설명
  + **버블링**과 **캡쳐링**설명

+ **JSON**의 중요성 설명

  + 음식을 얼리고, 배송하고, 사용자가 전자레인지에 음식을 돌려서 풀고
  + `JSON.stringify` => `JSON.parse` 의 이유 설명(각 언어의 규격이 달라서 통일성 필요 강조)

+ 기존의 코드 재 리딩 (전체적인 이벤트 흐름 설명)

+ **Event Delegation** 설명

  + `e.propagation()`의 필요성 설명

+ **Delete, Read**기능 추가

  + 데이터 중심 컨트롤로 함수 1개만 수정할수 있었습니다.

  ```js
  function makeListItem(config) {
    const {
      id = "",
      title = "",
      author = "",
      content = "",
      isRead = false,
    } = config;
    const indexId = id;
    const hasReadClassName = isRead ? "active" : "";
      // 이부분으로 listing 들의 title을 과 체크 색상을 한번에 변경 가능.
    return `
    <div class="report__list box">
      {...}
            <p class="report__title ${hasReadClassName}">${title} </p>
  	{...}
    `;
  }
  ```

  

+ **curring **부분 이해

  ```js
  function setDataBundle(baseElement) {
    return function (config) {
      const { target, list } = config;
      const setDataFormat = { target, list };
      setDataControl(setDataFormat);
      // NOTE: 스토리지값도 삭제해야함
      const drawingFormat = {
        type: "listing",
        list: list,
        target: baseElement,
      };
      dataDrawing(drawingFormat);
    };
  }
  
  ```

+ 매개변수 `baseElement `의 `static`한 사용으로 간단한 `curring `실습 및 이해

+ 공통되는 부분을 리팩토링 하여 함수로 빼놓는게 좋습니다.

  ```js
  const { target, list } = config;
  const setDataFormat = { 
      target:listingBoxElem, 
      list:newList
  };
  setDataControl(setDataFormat);
  const drawingFormat = {
        type: "listing",
        list: newList,
        target: listingBoxElem,
      };
  dataDrawing(drawingFormat);
  //위의 코드가 여러 이벤트에서 중복되어 아래의 1개의 함수로 변경
  
  
  const drawingFormat = {
        type: "listing",
        list: config.list,
        target: listingBoxElem,
      };
  dataDrawing(drawingFormat);
  ```



### Random Box Program

+ 기본 퍼블리싱

+ `data.json` 준비

+ 비동기,  싱글스레드, 멀티스레드 설명

+ `async, await`을 이용한 비동기 사용법

+  **axjos**사용법

  ```js
  const api = {
    movieData: "../data.json",
    movieDetail: "/movie/detail",
  };
  
  async function main() {
    const { data } = await axios.get(api.movieData);
    console.log(data,'data')
  }
  
  ```

  - get 요청을 진행하고 api주소를 넣는 공간에 파일 주소를 넣으면 파일을 읽어옵니다.

+ filter를 통한 data 필터링

```js
  const filterData = data.filter((item) => {
    const gernList = item.gern.split(/\s*,\s/);
    if (gernList.indexOf("19금") === -1) {
      return item;
    }
  });
```

+ 비동기 처리가 들어간 부분에 대해 이벤트를 `false `시켜주는 코드 추가

```js
const config = {
  isLoading: true,
  count: 20,
  list: [],
};

randomBtn.addEventListener("click", function () {
  if (config.isLoading === true) return; 
  // data가 없을떄 함수가 진행 되면 안되므로 isLoading 이 없을때 return 처리 진행

  const bundleFormat = {
    count: config.count,
    list: config.list,
  };
  setDataMerge(bundleFormat);
});

```



+ `new Set()` 을 이용한 중복제거

```js
function outPutData(config) {
  let { count = 0, list = [] } = config;
  if (list.length < count) {
    count = list.length;
  }
  const overlapList = new Set();
  const randomNewList = [];
  while (true) { // 무한루프 이므로 꼭 탈출전략이 필요합니다.
    if (overlapList.size >= count) {
      break;
    }
    const randomNum = Math.floor(Math.random() * list.length);
    overlapList.add(randomNum);
  }
  for (let value of overlapList) {
      //Set을 순회할땐 for of 를 이용하는것이 편합니다.
    const listItem = list[value];
    randomNewList.push(listItem);
  }
  return randomNewList;
}
```



+ 공통되는 부분을 리팩토링 하여 함수로 빼놓는게 좋습니다.

  ```js
  function setDataBundle(baseElement) {
    return function (config) {
      const { count, list } = config;
      const outputFormat = { count, list };
      const randomNewList = outPutData(outputFormat);
      const drawingFormat = {
        target: baseElement,
        list: randomNewList,
      };
      dataDrawing(drawingFormat);
    };
  }
  
  //curring 처리
  const setDataMerge = setDataBundle(randomBox);
  const bundleFormat = {
      count: config.count,
      list: config.list,
    };
    setDataMerge(bundleFormat);
  ```

  





#### 숙제

+ [jquery w3c school](https://www.w3schools.com/jquery/)로 훑어보기  
+ jquery로 슬라이드 만들어보기
+ vanilla javascript로 슬라이드 만들어보기
+ `new Set()`말고, 중복 제거 처리 기능 만들어보기

<hr>

*보충수업 잔여  : **9h***

