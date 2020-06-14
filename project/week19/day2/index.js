const inputTitleElem = el("inputTitle");
const inputContentElem = el("inputContent");
const listingBoxElem = el("lisitngBox");
const propmtBtn = el("propmtBtn");
const lockScreenContainer = el("lockScreenContainer");
const authorElem = el("author");
const logoutBtnElem = el("logoutBtn");
const inputInsertBtn = el("inputInsertBtn");
const getStorageAuthor = storage.get("author");
const getStorageList = storage.get("list");

const config = {
  author: getStorageAuthor,
  list: JSON.parse(getStorageList) || [],
};

initialze();

listingBoxElem.addEventListener("click", function (e) {
  const target = e.target;
  const getTargetAttrDataName = target.getAttribute("data-name");

  // data-name속성이 있는엘리먼트만 들어갑니다.
  if (!!getTargetAttrDataName) {
    e.stopPropagation();
    const findParentItem = findParent(target, { "data-name": "listIndex" });
    const findParentId = findParentItem.getAttribute("aria-controls");

    // delete버튼인지
    if (getTargetAttrDataName === "delete") {
      const findListItem = config.list.find(
        (item) => item.id === Number(findParentId)
      );
      if (!!findListItem) {
        const confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
          const removeFormat = {
            value: findParentId,
            list: config.list,
          };
          // NOTE: 이부분 추가해주기
          // NOTE: Data Update 함수 만들기
          const newList = removeArrayItem(removeFormat);
          storage.remove("list");
          storage.set("list", JSON.stringify(newList));
          // NOTE: 스토리지값도 삭제해야함
          const drawingFormat = {
            type: "listing",
            list: newList,
            target: listingBoxElem,
          };

          dataDrawing(drawingFormat);
        }
      }
      // read버튼인지
    } else if (getTargetAttrDataName === "read") {
    }
  }
});

/**
 * NOTE: OK버튼 눌렀을때, 데이터를 스토리지에 저장하고, 데이터 Drawing을 해줍니다.
 */
inputInsertBtn.addEventListener("click", function () {
  const titleValue = inputTitleElem.value;
  const contentValue = inputContentElem.value;
  const checkArray = [titleValue.trim(), contentValue.trim()];
  if (checkArray.every((item) => item.length > 0)) {
    const timeStamp = new Date().getTime();
    const dataFormat = {
      id: timeStamp,
      title: titleValue,
      author: config.author,
      content: contentValue,
    };
    const listItemData = outputData(dataFormat);
    config.list.push(listItemData);
    storage.set("list", JSON.stringify(config.list));

    const drawingFormat = {
      type: "listing",
      list: config.list,
      target: listingBoxElem,
    };
    dataDrawing(drawingFormat);
    inputTitleElem.value = "";
    inputContentElem.value = "";
  } else {
    alert("Please check the title or content.");
  }
});

/**
 * NOTE: 메인 화면에 lock screen 관련 이벤트
 */
propmtBtn.addEventListener("click", function (e) {
  const authorName = prompt("Please enter your name.");
  if (authorName.trim().length > 0) {
    storage.set("author", authorName);
    config.author = authorName;
    authorElem.innerHTML = authorName;
    lockScreenContainer.classList.add("hidden");
    logoutBtnElem.innerHTML = "Logout";
    const drawingFormat = {
      type: "listing",
      list: config.list,
      target: listingBoxElem,
    };
    dataDrawing(drawingFormat);
  } else {
    alert("Please check your name.");
  }
});

/**
 * NOTE: 로그아웃시 author의 이름 제거
 */
logoutBtnElem.addEventListener("click", function (e) {
  storage.remove("author");
  window.location.reload();
});

function initialze() {
  const isLogged = !!getStorageAuthor;
  if (isLogged) {
    lockScreenContainer.classList.add("hidden");
    authorElem.innerHTML = getStorageAuthor;

    const drawingFormat = {
      type: "listing",
      list: config.list,
      target: listingBoxElem,
    };
    dataDrawing(drawingFormat);
  } else {
    logoutBtnElem.innerHTML = "";
  }
}
