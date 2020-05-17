console.log('hello');



const number = [];
for(let i = 1; i <= 45; i++){
  number.push(i)
}

const ranElem = document.querySelector("#randomNumber");
setInterval(function(){
  let ranNum = Math.floor(Math.random() * number.length );
  if(ranNum < 10) ranNum = "0"+ ranNum;
  ranElem.innerHTML = ranNum;
},10)