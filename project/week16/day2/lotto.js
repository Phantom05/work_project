

const startBtn = document.querySelector("#startBtn");
const ranElem = document.querySelector("#randomNumber");
const stopBtn = document.querySelector("#stopBtn");
const raffleBtn = document.querySelector("#raffleBtn");
const numberContainer = document.querySelector("#numberContainer");
const resultInfo = document.querySelector("#resultInfo");
const colorRan = ["red", "orange", "blue", "deeppink", 'green', '#e653c6', "purple"];
const numberList = [];
for (let i = 1; i <= 45; i++) numberList.push(i);

console.log(numberList);

let ing = 1,
  lottoList = [],
  intervalFn,
  ranNum;

startBtn.addEventListener('click', function () {
  init();

  if (ing === 1) {
    intervalFn = setInterval(function () {
      ranNum = Math.ceil(Math.random() * numberList.length);
      if (ranNum < 10) ranNum = "0" + ranNum;
      ranElem.innerHTML = ranNum;
    }, 10);
  }
  ing = 0;
});

raffleBtn.addEventListener('click', function () {
  const num = Number(ranNum);
  const ranColor = colorRan[Math.floor(Math.random() * colorRan.length)];
  const itemFormat = { num, stage: 1, color: ranColor };
  lottoList.push(itemFormat);

  if (lottoList.length > 7) {
    return;
  }

  if (lottoList.length === 7) {
    lottoList[lottoList.length - 1].stage = 2
    clearInterval(intervalFn);
    ing = 1;
    const resultFormat = {
      target: resultInfo,
      list: lottoList
    }
    resultDrawing(resultFormat)
  }

  const drawFormat = {
    target: numberContainer,
    list: lottoList
  }
  dataDrawing(drawFormat);
});



function resultDrawing(config) {
  const { target, list } = config;
  const lottoNumList = list.map(item => item.num);
  const numList = lottoNumList.slice(0, 6);
  const bonusNum = lottoNumList[lottoNumList.length - 1];
  target.innerHTML = "";
  if (list.length === 0) return;
  target.innerHTML = `이번주 추첨 번호는 ${numList.join(', ')} 보너스번호는 ${bonusNum} 입니다.`
}

function dataDrawing(config) {
  const { target, list } = config;
  target.innerHTML = "";
  if (list.length === 0) return;
  const numberItemList = list.map(item => {
    const craeteFormat = {
      number: item.num,
      stage: item.stage,
      color: item.color
    }
    return createNumberItem(craeteFormat)
  })

  target.append(...numberItemList);
}

function createNumberItem(config) {
  const { number, stage, color } = config;
  const itemElem = document.createElement("span");
  itemElem.className = "number__item";
  itemElem.style.background = color;;
  if (stage === 2) {
    itemElem.classList.add("last")
  }
  itemElem.textContent = number;
  return itemElem;
}

function init() {
  lottoList = [];

  const drawFormat = {
    target: numberContainer,
    list: lottoList
  }
  dataDrawing(drawFormat);

  const resultFormat = {
    target: resultInfo,
    list: lottoList
  }
  resultDrawing(resultFormat)
}