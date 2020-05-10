

function regEmail(emailValue = "") {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return emailValue.match(regExp) != null
}


function regPasswrod(passwordValue = "") {
  const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return passwordValue.match(regExp) != null;
}


function init() {
  const inputEmail = document.querySelector("#inputEmail");
  const inputRemember = document.querySelector("#inputRemember");

  if (localStorage.remember) {
    const getStorageRemember = localStorage.getItem("remember");
    inputEmail.value = getStorageRemember;
    inputRemember.checked = true;
  }
}