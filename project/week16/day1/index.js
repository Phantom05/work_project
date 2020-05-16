
const submitForm = document.querySelector("#submitForm");
const inputText = document.querySelector("#inputText");
const todoListBox = document.querySelector("#todoListBox");

// Craete Read Update Delete;


const todoListArray = [];

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

// NOTE: 딜리게이션 같이 구현해보기
submitForm.addEventListener('click', function (e) {
  const readClassList = [
    "todoList__text",
    "todoList__control_box",
    "todoList__check_label",
    "todoList__check_box"];

  const deleteClassList = [
    "todoList__delete_icon"
  ]

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

function hasCompare(list1, list2) {
  return list1.some(item => list2.indexOf(item) !== -1)

}


inputText.addEventListener("keyup", function (e) {
  const { key } = e;
  // console.log(e, 'e');
  if (key === "Enter") {

    const outputFormat = {
      content: e.target.value,
    };
    const newDataFormat = dataOutput(outputFormat);

    todoListArray.push(newDataFormat);
    const drawFormat = {
      target: todoListBox,
      list: todoListArray
    }
    dataDrawing(drawFormat);
    e.target.value = "";

  } else {

  }
});




function updateOutput() {

}

function deleteListItem() {

}

function readListItem() {

}



function dataUpdate(config) {
  let { list, id, type } = config;

  console.log('emfdj?');
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

function insertListItem(config) {
  const { target, item } = config;
  target.append(item);
}

// NOTE: stage를 두기, 읽은 상태인지 아닌지
// NOTE: delegation과 event 수업하기

/**
 * NOTE: 받아온 리스트로 반복문을 돌며, target 엘리먼트에 아이템을 append 해주는 함수
 * @param {*} config 
 */
function dataDrawing(config) {
  const { target, list } = config;
  target.innerHTML = "";
  const newItemList = list.map(item => {
    const createFormat = {
      id: item.id,
      content: item.content,
      stage: item.stage
    };
    const newItem = createListItem(createFormat);
    return newItem;
  });
  if(list.length === 0){
    const defaultElem = document.createElement("div");
    defaultElem.textContent = "Please enter the item.";
    defaultElem.className = "todoList__default_item";
    target.append(defaultElem);
  }else{
    target.append(...newItemList);
  }
  
}

/**
 * NOTE: todoList에 insert하기위한 element의 형식을 만들어주는 함수
 * @param {*} config 
 */
function createListItem(config) {
  const { content, id, stage } = config;
  console.log(stage, 'stage');

  const itemElem = document.createElement('div');
  itemElem.className = "todoList__item";
  itemElem.setAttribute('data-id', id)

  const textElem = document.createElement("div");
  textElem.className = "todoList__text";
  textElem.textContent = content;
  if (stage === 2) {
    textElem.classList.add("read");
  }

  const controlBoxElem = document.createElement("div");
  controlBoxElem.className = "todoList__control_box";

  const label = document.createElement("label");
  label.className = "todoList__check_label";
  label.setAttribute("for", id);

  const checkboxElem = document.createElement("input");
  checkboxElem.className = "todoList__check_box"
  checkboxElem.type = "checkbox";
  checkboxElem.id = id;
  if (stage === 2) {
    checkboxElem.checked = true
  }

  const deleteElem = document.createElement("span");
  deleteElem.className = "glyphicon glyphicon-trash todoList__delete_icon";
  // deleteElem.setAttribute("data-delete-id", id);
  itemElem.append(textElem, controlBoxElem);
  controlBoxElem.append(label, deleteElem);
  label.append(checkboxElem);
  return itemElem;
}

/**
 * NOTE: todoListArray를 Update하기 위한 데이터 item 포맷 함수
 */
function dataOutput(config) {
  const { content } = config;
  const dataId = new Date().valueOf();
  const outputFormat = {
    id: dataId,
    stage: 1,
    content
  };
  return outputFormat;
}

/**
 * NOTE: 페이지가 로딩됬을때 처음 실행되는 함수
 */
function init() {
  if (todoListArray.length === 0) {
    const drawFormat = {
      target: todoListBox,
      list: todoListArray
    }
    dataDrawing(drawFormat);
  }
}

init();






  // itemElem.addEventListener('click', function (e) {
  //   const istextElem = e.target.classList.contains("todoList__text");
  //   const isControlElem = e.target.classList.contains("todoList__control_box");

  //   if (istextElem || isControlElem) {
  //     const dataUpdateFormat = {
  //       id: e.currentTarget.id,
  //       list: todoListArray,
  //       type: "read"
  //     }
  //     dataUpdate(dataUpdateFormat);
  //     const drawFormat = {
  //       target: todoListBox,
  //       list: todoListArray
  //     }
  //     dataDrawing(drawFormat);
  //   }
  // })

  // checkboxElem.addEventListener('change', function (e) {
  //   console.log('change');
  //   const dataUpdateFormat = {
  //     id: e.target.id,
  //     list: todoListArray,
  //     type: "read"
  //   }
  //   dataUpdate(dataUpdateFormat);
  //   const drawFormat = {
  //     target: todoListBox,
  //     list: todoListArray
  //   }
  //   dataDrawing(drawFormat);
  // });

  // deleteElem.addEventListener('click', function (e) {
  //   const dataUpdateFormat = {
  //     id: e.target.getAttribute("data-delete-id"),
  //     list: todoListArray,
  //     type: "delete"
  //   }
  //   dataUpdate(dataUpdateFormat);
  //   const drawFormat = {
  //     target: todoListBox,
  //     list: todoListArray
  //   }
  //   dataDrawing(drawFormat);
  // })
