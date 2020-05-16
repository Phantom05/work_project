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



<hr>

- 보충수업 잔여 8h 30m