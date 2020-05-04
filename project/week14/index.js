
const _  = require("lodash");
const add = (n1,n2) => n1 + n2;
const arr = [3,5,9,1,12];

console.log(
  _.map(arr,item=>add(item,10))
);

// 프로토타입, 프로토

