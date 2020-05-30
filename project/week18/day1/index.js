const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const signUpRePassword = document.querySelector("#signUpRePassword");
const signUpGenderMale = document.querySelector("#signUpGenderMale");
const signUpGenderFeMale = document.querySelector("#signUpGenderFeMale");
const signUpBithYear = document.querySelector("#signUpBithYear");
const signUpBithMonth = document.querySelector("#signUpBithMonth");
const signUpBithDay = document.querySelector("#signUpBithDay");
const signUpTermsAgree = document.querySelector("#signUpTermsAgree");
const signUpSubmitBtn = document.querySelector("#signUpSubmitBtn");
const signUpForm = document.querySelector("#signUpForm");

const config = {
  name: {
    isReg: false,
    value: "",
  },
  email: {
    isReg: false,
    value: "",
  },
  password: {
    isReg: false,
    value: "",
  },
  rePassword: {
    isRef: false,
    value: "",
  },
  gender: {
    isReg: false,
    value: "",
  },
  birth: {
    isReg: false,
    value: "",
  },
  terms: {
    isReg: false,
    value: "",
  },
};

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

signUpSubmitBtn.addEventListener("click", function (e) {
  console.log(config);
});

signUpName.addEventListener("blur", (e) =>
  dataUpdateBlur({ e, target: config })
);
signUpEmail.addEventListener("blur", (e) =>
  dataUpdateBlur({ e, target: config })
);
signUpPassword.addEventListener("blur", (e) =>
  dataUpdateBlur({ e, target: config })
);
signUpRePassword.addEventListener("blur", (e) =>
  dataUpdateBlur({ e, target: config })
);

function init() {
  const { birthConfig } = response;
  const makeYearFormat = {
    target: signUpBithYear,
    list: birthConfig.yearList,
  };
  makeDateOptions(makeYearFormat);
  const makeMonthFormat = {
    target: signUpBithMonth,
    list: birthConfig.monthList,
  };
  makeDateOptions(makeMonthFormat);
  const makeDayFormat = {
    target: signUpBithDay,
    list: birthConfig.dayList,
  };
  makeDateOptions(makeDayFormat);
}

init();

// 3000천줄

// let info;
// ??.addEventListener("click", function (e) {
//   info = result;
// });

// signUpSubmitBtn.addEventListener("click", function (e) {
//   let my = info;
//   if(document.getElementById("signUpName").value.test(/^[A-Za-z0-9]{6,12}$/)){
//   }
//   document.getElementsByClassName("test")[0].addEventListener('click',function(){
//   })
// });
