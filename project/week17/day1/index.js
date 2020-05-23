
const inputWord = document.querySelector('#inputWord');
const resultElem = document.querySelector('#result');
const limitBtn = document.querySelector('#limitBtn');
const infoElem = document.querySelector("#info");
const _cacheBtnText = limitBtn.textContent;

const config = {
  words: [0, 0],
  limit: false
}

inputWord.addEventListener('keyup', function (e) {
  if (e.key === "Enter") {
    const inputTarget = e.target;
    const inputValue = inputTarget.value.trim();
    const drawFormat = {
      target: resultElem,
      elem: inputTarget
    }
    const curryDrawing = dataDrawing(drawFormat)

    const compareFormat = {
      words: config.words,
      limit: config.limit,
      value: inputValue
    };

    if (compareValue(compareFormat)) {
      curryDrawing();
    } else {
      $(info).html("incorrect!").show().fadeOut(1000);
      inputTarget.value ="";
    }
  }
});


limitBtn.addEventListener('click', function (e) {
  config.limit = !config.limit;
  limitBtn.innerHTML = `${_cacheBtnText} ${config.limit ? "on" : "off"}`;
})

function init(){

}