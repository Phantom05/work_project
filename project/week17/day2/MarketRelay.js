// console.log('hello world');
// confirm("시장에가면 ~");
// const answer = prompt("시장에가면~");
// console.log(answer,'answer');


const inputText = document.querySelector("#inputText");
const result = document.querySelector("#result");

const config = {
  wordList: [],
  failCount: 0,
};


inputText.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const target = e.target;
    const targetValue = target.value.trim();

    if (targetValue[targetValue.length - 1] === ",") {
      alert("incorrect!");
      return;
    }

    const curryFormat = {
      target: result,
      input: target,
      list: config.wordList,
    }
    const curryDataDraw = dataDrawing(curryFormat);

    if (config.wordList.length === 0) {
      curryDataDraw(targetValue);

    } else {
      const inputList = targetValue.split(",").map(item => item.trim());
      const compareList = inputList.slice(0, inputList.length - 1);
      const isEqualList = config.wordList.every((item, idx) => {
        return item === compareList[idx]
      });

      if (isEqualList) {
        const lastWord = inputList[inputList.length - 1];
        curryDataDraw(lastWord);

      } else {

        if (config.failCount >= 3) {
          alert(`You Lose`);
          window.close();
          return;
        }
        alert(`incorrect! 남은 기회는 ${3 - config.failCount} 입니다.`);
        config.failCount++;
        target.value = "";

      }
    }
    console.log(config.wordList, 'worList');
  }
});



function dataDrawing(config) {
  const { target, input, list } = config;

  return function (value) {
    list.push(value);
    input.value = "";
    target.innerHTML = list;
    $(target)
      .show()
      .fadeOut(1000);
  }
}


