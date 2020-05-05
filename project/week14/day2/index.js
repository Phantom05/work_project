

const viewInputElems = document.querySelectorAll('.cal__input');
const inputCalc = document.querySelector('#inputCalc');
const submitForm = document.querySelector("#submitForm");
const calcBtn = document.querySelector("#calcBtn");
const resetBtn = document.querySelector("#resetBtn");

const inputAmount = submitForm.amount;
const inputTenThousand = submitForm.tenThousand;
const inputOneThousand = submitForm.oneThousand;
const inputFiveHundred = submitForm.fiveHundred;
const inputHundred = submitForm.hundred;
const inputTen = submitForm.ten;
const inputOne = submitForm.one;

const viewInputList = [
  {
    elem: inputAmount,
    value: null,
  },
  {
    elem: inputTenThousand,
    value: 10000,
  },
  {
    elem: inputOneThousand,
    value: 1000
  },
  {
    elem: inputFiveHundred,
    value: 500
  },
  {
    elem: inputHundred,
    value: 100
  },
  {
    elem: inputTen,
    value: 10
  },
  {
    elem: inputOne,
    value: 1
  },
];
const viewInputElemList = viewInputList.map(item => item.elem);

init();

/**
 * NOTE: 리셋 버튼을 클릭했을때, confirm 후 리셋 함수 동작
 */
resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (confirmDelete === false) {
    return;
  }
  const combineAllInputList = viewInputElemList.concat(inputCalc);
  const resetObj = {
    items: combineAllInputList
  };
  dataReset(resetObj);
});


/**
 * NOTE: calcInput에 데이터 입력 후 Sumbit 이벤트
 */
submitForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const submitObj = {
    calcInput: inputCalc,
    viewElemList: viewInputElemList,
    inputList: viewInputList,
    form: submitForm,
  }

  if(isNaN(submitObj.calcInput.value)){
    alert("Please enter only numbers.");
    return;
  }
  if(+submitObj.calcInput.value === 0){
    alert("Please enter your data.");
    return;
  }
  dataSubmit(submitObj)

});


// [
//   {
//     name:'amount',
//     value:15000
//   },
//   {
//     name:"temThosand",
//     value:1
//   }
// ]

// {
//   amount:15000,
//   tenThousand:1,
//   oneThousand:2,
//   ...
// }

/**
 * NOTE: inputForm을 submit 할때 동작하는 함수입니다.
 * @param {object} config 
 */
function dataSubmit(config) {
  const { calcInput, viewElemList, inputList, form } = config;
  // reset
  const resetObj = {
    items: viewElemList
  }
  dataReset(resetObj);

  // 데이터 가공
  const inputCalcValue = +calcInput.value;
  const ouputObj = {
    amount: inputCalcValue,
    list: inputList
  }
  const ouputList = dataOutput(ouputObj);
  // drawing
  const drawObj = {
    form: form,
    list: ouputList
  }
  dataDrawing(drawObj);
  inputCalc.value = "";
}

/**
 * NOTE: target한 form의 name을 이용하여 데이터를 그려주는 부분입니다.
 * @param {object} config 
 */
function dataDrawing(config) {
  const { form, list } = config;
  list.map(item => {
    form[item.name].value = item.value;
  })
}

/**
 * NOTE: 입력된 총양과, 리스트를 넣어 데이터를 가공합니다.
 * @param {object} config 
 */
function dataOutput(config) {
  const { list, amount } = config;
  let updateValue = amount;

  const newList = list.map(item => {
    let tmpValue;
    if (item.elem.name !== "amount") {
      tmpValue = Math.floor(updateValue / item.value);
      updateValue = updateValue % item.value;
    } else {
      tmpValue = amount;
    }

    if (isNaN(tmpValue)) {
      tmpValue = 0;
    }
    return {
      name: item.elem.name,
      value: tmpValue
    }
  });
  return newList;
}

/**
 * NOTE: viewInput들과, calcInput의 value를 초기화
 * @param {object} config 
 */
function dataReset(config) {
  const { items } = config;
  items.map(item => {
    item.value = "";
  })
}



/**
 * NOTE: 페이지가 로드됬을때, init 함수가 실행됩니다.
 */
function init() {

  // 페이지로드시 계산하는 input에 포커스를 줍니다.
  inputCalc.focus();

  // view전용 input의 readOnly 속성을 true로 바꿔줍니다.
  Array.from(viewInputElems).map(item => {
    item.readOnly = true;
  });

}