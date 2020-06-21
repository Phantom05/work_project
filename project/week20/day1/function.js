function el(name) {
  return document.querySelector(name);
}

function outPutData(config) {
  let { count = 0, list = [] } = config;
  if (list.length < count) {
    count = list.length;
  }
  const overlapList = new Set();
  const randomNewList = [];
  while (true) {
    if (overlapList.size >= count) {
      break;
    }
    const randomNum = Math.floor(Math.random() * list.length);
    overlapList.add(randomNum);
  }
  for (let value of overlapList) {
    const listItem = list[value];
    randomNewList.push(listItem);
  }
  return randomNewList;
}

function makeListItem(config) {
  const { title, src } = config;

  return `
  <div class="box">
    <div class="randomBox__title">${title}</div>
    <div class="randomBox__imgbox">
      <img src=${src} alt="" class="randomBox__img">
    </div>
  </div>
  `;
}

function dataDrawing(config) {
  const { target, list } = config;
  const elementItemList = list.map((item) => makeListItem(item));
  target.innerHTML = "";
  $(target).append(...elementItemList);
}

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
