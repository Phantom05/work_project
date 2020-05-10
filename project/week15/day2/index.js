const submitForm = document.querySelector("#submitForm");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const inputRemember = document.querySelector("#inputRemember");
const inputSubmitBtn = document.querySelector("#inputSubmitBtn");

/**
 * TODO: 
 * - submit 이벤트
 * - remember 체크 이벤트
 * - 유효성 검사 함수
 */

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector("#inputEmail");
  const inputPassword = document.querySelector("#inputPassword");

  const submitObj = {
    username: inputEmail.value,
    password: inputPassword.value
  }

  if (!regEmail(submitObj.username)) {
    alert("Please check your email.");
    return;
  }
  if (!regPasswrod(submitObj.password)) {
    alert("Please check your password.");
    return;
  }

  const axiosConifg = {
    url: "http://localhost:3000/login",
    method: "post",
    data: {
      username: submitObj.username,
      password: submitObj.password
    }
  }
  axios(axiosConifg).then(function (res) {
    console.log(res, 'res');
    const { data } = res;
    if (data.result === 1) {
      const { profile } = data;
      alert(`Welcome. ${profile.name} 님`);
      console.log('마이페이지로 이동.');
    }else{
      alert("Login failure.");
    }
  });
  console.log(submitObj, 'submitObj');
});




/**
 * NOTE: 인풋 리멤버 체크박스 변화에따라 로컬스토리지를 삭제하고, 추가해주는 이벤트
 */
inputRemember.addEventListener('change', function (e) {
  const target = e.target;
  const inputEmailValue = document.querySelector("#inputEmail").value;
  if (target.checked) {
    localStorage.remember = inputEmailValue;
  } else {
    localStorage.removeItem("remember");
  }
})







init();