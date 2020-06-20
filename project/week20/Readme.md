# Week20



### Report Program

+ 저번 주 수업의 중요성으로 한번 더 재설명 [19주차](https://github.com/Phantom05/work_project/tree/master/project/week19)

  + `prototype`과 `constructor `에 대한 설명
  + `bind,call,apply` 의 흐름에 대한 설명
  + **버블링**과 **캡쳐링 **설명

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







<hr>

보충수업 잔여 9h 

