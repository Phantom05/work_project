function makeDateOptions(config) {
  const { target, list = [] } = config;

  const newOptionList = list.map((item) => {
    const optionElem = document.createElement("option");
    optionElem.value = item;
    optionElem.textContent = item;
    return optionElem;
  });

  target.append(...newOptionList);
}

function dataUpdateBlur(config) {
  const { e, target: updateTarget } = config;

  const target = e.target;
  const targetValue = target.value;
  const targetName = target.name;

  if (target && targetName) {
    updateTarget[targetName].value = targetValue;
  }
}

function zeroNum(num) {
  return num < 10 ? "0" + num : String(num);
}

function _includes(item) {
  return this.indexOf(item) !== -1;
}

const _strInclude = _includes;

Array.prototype._includes = _includes;
String.prototype._strInclude = _strInclude;

function regName(str) {
  if (typeof str === "string") {
    return str.trim().length !== 0;
  }
}
function regEmail(str) {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return regExp.test(str);
}
function regPassword(str) {
  const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return regExp.test(str);
}
function isEqual(val1, val2) {
  return val1 === val2;
}
function regBirth(str) {
  const birthList = str.split("-").map(Number);
  return birthList[0] >= 1990 && birthList[1] !== 0 && birthList[2] !== 0;
}
function regTerms(bool) {
  return bool;
}

function hasValue(str) {
  if (typeof str === "string") {
    return str.trim().length !== 0;
  }
}
