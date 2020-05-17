# week16



+ TodoList 만들어보기

  + TodoList 퍼블리싱
  + 기능별로 나눠 개발해보기
  + CRUD로 나눠 기능 개발해보기
  + 배열을 다루며 init 진행 후 데이터 Draw 해보기

  ```js
  function dataDrawing(config) {
    const { target, list } = config;
    target.innerHTML = "";
    const newItemList = list.map(item=>{
      const createFormat = {
        id:item.id,
        content:item.content,
        stage:1
      };
      const newItem = createListItem(createFormat);
      return newItem;
    });
    target.append(...newItemList);
  }
  ```

  + init 기능 나눠 기본값 정해주기

  ```js
  function init() {
    if (todoListArray.length === 0) {
      const defaultElem = document.createElement("div");
      defaultElem.textContent = "Please enter the item.";
      defaultElem.className = "todoList__default_item";
      todoListBox.append(defaultElem);
    }
  }
  
  init();
  ```

  

  + CrateListItem 하는부분 만들어보기,

  ```js
  function createListItem(config) {
    const { content, id,stage } = config;
    console.log(stage,'stage');
  
    const itemElem = document.createElement('div');
    itemElem.className = "todoList__item";
  
    const textElem = document.createElement("div");
    textElem.className = "todoList__text";
    textElem.textContent = content;
  
    const controlBoxElem = document.createElement("div");
    controlBoxElem.className = "todoList__control_box";
  
    const label = document.createElement("label");
    label.className = "todoList__check_label";
    label.setAttribute("for", id);
  
    const checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.id = id;
  
    const deleteElem = document.createElement("span");
    deleteElem.className = "glyphicon glyphicon-trash todoList__delete_icon";
    deleteElem.setAttribute("data-delete-id", id);
  
  
    itemElem.append(textElem, controlBoxElem);
    controlBoxElem.append(label, deleteElem);
    label.append(checkboxElem);
    return itemElem;
  }
  ```

  + setAttribute를 이용하여 id값을 세팅해주고 클릭했을때 시퀀스로 사용해서 삭제,  리드 처리를 진행
    + data drawing 부분이 있으므로, 배열로 컨트롤해서 수정하고 drawing 할 필요가 있어보임
    + 이벤트 딜리게이션과, loop event bind 쪽 살펴보기
  + 이벤트 딜리게이션 이용하여 데이터 drawing 하기

  ```js
  submitForm.addEventListener('click', function (e) {
    const readClassList = [
      "todoList__text",
      "todoList__control_box",
      "todoList__check_label",
      "todoList__check_box"];
  
    const deleteClassList = [
      "todoList__delete_icon"
    ];
  
    const isReadClick = hasCompare(readClassList, Array.from(e.target.classList))
    const isDeleteClick = hasCompare(deleteClassList, Array.from(e.target.classList));
    const findRows = $(e.target).closest("div.todoList__item").get(0);
  
    if (findRows) {
      let type = "read";
      if (isReadClick) {
        type = "read"
      }
      if (isDeleteClick) {
        type = "delete"
      }
      const dataUpdateFormat = {
        id: +findRows.getAttribute("data-id"),
        list: todoListArray,
        type: type
      }
      dataUpdate(dataUpdateFormat);
      const drawFormat = {
        target: todoListBox,
        list: todoListArray
      }
      dataDrawing(drawFormat);
    }
  });
  ```

  + 재귀 함수 매소드 하용하여 클릭한 부모 요소 찾아 if문 분기하기

  ```js
  const findRows = $(e.target).closest("div.todoList__item").get(0);
  ```

  + target.value 와 value 에대한 차이점 설명, 깊은 복사와 얕은 복사 설명

  ```js
  const value = target.value;
  target.value = ""; // 참조가 연결되어 있기 때문에 element의 값을 변경
  value = "" // 참조가 끊어진 상태라 되지 않음 
  ```

  + 캡쳐링과 버블링 활용

  + dataUpdate 함수를 이용해 원본의 배열 수정해보기

    + `splice` 매소드 활용
    + `findIndex` 메소드 활용

    ```js
    function dataUpdate(config) {
      let { list, id, type } = config;
    
      if (type === "delete") {
        const findIndex = list.findIndex(item => item.id !== +id);
        list.splice(findIndex, 1)
      }
      if (type === "read") {
        const findItem = list.find(item => item.id === +id);
        if (findItem.stage === 1) {
          findItem.stage = 2;
        } else if (findItem.stage === 2) {
          findItem.stage = 1;
        }
      }
    }
    ```

    



+ 숙제

  + 로또 번호 만들어보기 (힌트 : )

  ```js
  const number = [];
  for(let i = 1; i <= 45; i++){
    number.push(i)
  }
  
  setInterval(function(){
    const ranNum = Math.floor(Math.random() * number.length );
  },100)
  ```

  + 구구단 출력기 혼자 만들어보기 (시간이 되면 해보기)
  + 거스름돈 계산기 혼자 만들어보기 (시간이 되면 해보기)
  + 나만의 프로그램 하나 만들어보기 (시간이 되면 해보기)
  + 로그인페이지도 하나 만들기보기 (시간이 되면 해보기)

<hr>

- 보충수업 잔여 8h 30m