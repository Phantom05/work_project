console.log('function');

{
  // // 렉시컬 외부 환경 스코프
  // // 렉시컬 환경 스코프

  // // 선형 프로그래밍

  // const ccc = 20;

  // function dataOuput() {
  //   const abc = 10;
  //   // 렉시컬 외부 환경 스코프

  //   function b() {
  //     console.log(abc);
  //     console.log(ccc);
  //   }
  //   b()
  // }



  // try {
  //   const getData = dataOuput();
  // } catch (e) {
  //   draw(getData)
  // }

  // // 505 Erro
  // // 501 Error

  // function draw() {

  // }
}


// const obj = {
//   get ab(){
//     console.log('hello wrold');
//   }
//   // set bc(){
//   // }
// }
// es6 // 
// // 인

// obj.ab()
// new Set()

// const obj = {
//   log: ['a', 'b', 'c'],
//   get latest() {
//     if (this.log.length === 0) {
//       return undefined;
//     }
//     return this.log[this.log.length - 1];
//   }
// };

// 75% => 부분부분 그래픽카드 => 




// _ private
// [].includes
// 예약어 => 이미 존재하는 키워드



// const startBtn = document.querySelector('#startBtn');
// const decideBtn = document.querySelector('#decideBtn');
// const stopBtn = document.querySelector('#stopBtn');
// const numRound = document.querySelector('#numRound');
// const lottoResult = document.querySelector('#lotto_result')

// let interCount;
// const saveNumList = [];

// const number = [];
// for (let i = 1; i <= 45; i++) number.push(i);

// function _includes(array,value){
//   return array.indexOf(value) !== -1;
// }

// startBtn.addEventListener('click', () => {
//   interCount = setInterval(function () {
//     const ranNum = Math.floor(Math.random() * number.length);
//     numRound.textContent = ranNum;
//   }, 10);
// });


// decideBtn.addEventListener('click', () => {
//   const ranNum = Math.floor(Math.random() * number.length);
//   if (saveNumList.length < 7) {

//     if (_includes(saveNumList,ranNum) === false) {
//       saveNumList.push(ranNum);
//     }
//     if (saveNumList.length === 7) {
//       clearInterval(interCount);
//       numRound.textContent = "End"
//       saveNumList.sort((a, b) => a - b);
//       lottoResult.textContent = `이번주 로또 번호는 ${saveNumList} 입니다.`
//     }
//   }
// })




function compareValue(config) {
  const { words, limit, value } = config;

  if (words[0] === 0) {
    words[0] = value;
    return true;
  } else {
    words[1] = value;
    const lastWord = words[0][words[0].length - 1];
    const firstWord = words[1][0];
    const isLimit = limit ? words[0].length === words[1].length : true;
    
    if (lastWord === firstWord && isLimit) {
      words[0] = words[1];
      words[1] = 0;
      return true;
    }
  }
  return false;
}

function dataDrawing(config) {
  const { target, elem } = config;
  return () => {
    target.innerHTML = elem.value;
    elem.value = "";
  }
}

