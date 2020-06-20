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

const setDataMerge = setDataBundle(listingBoxElem);

/**
 * NOTE: listing box event delegation
 */
listingBoxElem.addEventListener("click", function (e) {
  const target = e.target;
  const getTargetAttrDataName = target.getAttribute("data-name");

  // data-name속성이 있는엘리먼트만 들어갑니다.
  // read나 delete 속성을 갖고있는 엘리먼트만 if문으로 들어갑니다.
  if (Boolean(getTargetAttrDataName)) {
    e.stopPropagation(); // 더 이상의 이벤트 전파를 막아줍니다.
    const findParentItem = findParent(target, { "data-name": "listIndex" });
    const findParentId = findParentItem.getAttribute("aria-controls"); // 밀리세컨드 아이디
    const findListItem = config.list.find(
      (item) => item.id === Number(findParentId)
    );

    // NOTE: delete 버튼 클릭 시
    if (getTargetAttrDataName === "delete") {
      // 찾은 아이템이 있으면,
      const confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        const removeFormat = {
          value: findParentId,
          list: config.list,
        };
        const newList = removeArrayItem(removeFormat);
        const bundleFormat = {
          target: config,
          list: newList,
        };
        setDataMerge(bundleFormat);
      }
      // NOTE: read 버튼 클릭 시
    } else if (getTargetAttrDataName === "read") {
      // findListItem if로 나중에 전체 감싸주기/
      findListItem.isRead = !findListItem.isRead;
      const bundleFormat = {
        target: config,
        list: config.list,
      };
      setDataMerge(bundleFormat);
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
    const newList = config.list.concat(listItemData);
    const bundleFormat = {
      target: config,
      list: newList,
    };
    setDataMerge(bundleFormat);

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
