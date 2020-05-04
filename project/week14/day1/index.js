// function Hello(name){
//   this.name = name;
//   // return {};
//   // return function(){}; 
//   // return this;
// };
// var a = new Hello('Wow~');
// console.log(
//   a
// );

const inputDan = document.querySelector('#inputDan');
const inputRows = document.querySelector('#inputRows');
const inputSubmitBtn = document.querySelector('#inputSubmitBtn');
const inputResult = document.querySelector('#inputResult');
const inputForm = document.querySelector('#inputForm');


inputDan.addEventListener('keyup', function (e) {
  console.log(e.target.value);
  // console.log(e,'keyup');
});

// inputDan.addEventListener('keydown',function(eventObj){
//   console.log(eventObj,'keydown');
// });

inputForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log('sumbit',e);

  const danValue = +inputDan.value;
  const rowsValue = +inputRows.value;

  const dataObj = {
    dan: danValue,
    rows: rowsValue
  }
  const resultData = dataOutput(dataObj);

  const drawObj = {
    target: inputResult,
    data: resultData
  };
  dataDrawing(drawObj);

});


function dataDrawing(config) {
  const { target, data } = config;
  dataReset(target);

  console.log(data, 'data');

  for (keyName in data) {
    console.log(keyName);
    const danValue = data[keyName];
    for (let i = 0; i < danValue.length; i++) {
      console.log(
        danValue[i]
      );
    }
  }

}



function dataSubmit() {

}



/**
 * NOTE: 인자로 받은 element object를 비워줍니다.
 * @param {element object} target 
 */
function dataReset(target) {
  target.innerHTML = "";
}

/**
 * NOTE: 단과 행을 넣었을때, 데이터를 출력해주는 함수
 * @param {object} config 
 */
// MVP minimum variable product
function dataOutput(config) {
  const { dan, rows } = config;
  const rowsList = [];
  for (let i = 1; i <= rows; i++) {
    const pushFormat = {
      row: i,
      value: dan * i
    }
    rowsList.push(pushFormat);
  }
  const resultOjb = {
    [dan]: rowsList
  }
  return resultOjb;
}

