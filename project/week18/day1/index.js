const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const signUpRePassword = document.querySelector("#signUpRePassword");
const signUpGenderMale = document.querySelector("#signUpGenderMale");
const signUpGenderFeMale = document.querySelector("#signUpGenderFeMale");
const signUpBirthYear = document.querySelector("#signUpBirthYear");
const signUpBirthMonth = document.querySelector("#signUpBirthMonth");
const signUpBirthDay = document.querySelector("#signUpBirthDay");
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
    isReg: false,
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

  getValue(name) {
    return this[name].value;
  },
};

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

signUpSubmitBtn.addEventListener("click", function (e) {
  // 유효성검사하기
  console.log(config);
  /**
   * NOTE:
   * - name : 1글자 이상
   * - email : 이메일 정규식
   * - password : 페스워드 정규식
   * - repassword : 패스워드와 같은지
   * - birth : 1990년도 이상
   * - terms : 체크 필수
   */

  const getValue = (name) => config.getValue(name);
  const isSuccess = [];
  const isFaulure = [];

  if (regName(getValue("name"))) {
    isSuccess.push("name");
  } else {
    isFaulure.push("name");
  }
  if (regEmail(getValue("email"))) {
    isSuccess.push("email");
  } else {
    isFaulure.push("email");
  }
  if (regPassword(getValue("password"))) {
    isSuccess.push("password");
  } else {
    isFaulure.push("password");
  }
  if (regBirth(getValue("birth"))) {
    isSuccess.push("birth");
  } else {
    isFaulure.push("birth");
  }
  if (regTerms(getValue("terms"))) {
    isSuccess.push("terms");
  } else {
    isFaulure.push("terms");
  }
  if (isEqual(getValue("password"), getValue("rePassword"))) {
    isSuccess.push("rePassword");
  } else {
    isFaulure.push("rePassword");
  }
  if (hasValue(getValue("gender"))) {
    isSuccess.push("gender");
  } else {
    isFaulure.push("gender");
  }

  isSuccess.forEach((item) => {
    config[item].isReg = true;
  });
  isFaulure.forEach((item) => {
    config[item].isReg = false;
  });

  const rowDataNameElemList = document.querySelectorAll(
    ".signUp__info.failure"
  );
  Array.from(rowDataNameElemList).forEach((item) => {
    const getAttrDataName = item.getAttribute("data-name");
    if (isFaulure._includes(getAttrDataName)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // NOTE: submit 하는 부분
  if (isFaulure.length !== 0) {
    console.log("please check th value.");
  } else {
    const submitFormat = {
      email: config.email.value,
    };
    console.log(submitFormat, "submit");
  }
});

signUpForm.addEventListener("change", function (e) {
  const target = e.target;
  const targetname = target.name;
  const blurList = ["name", "email", "password", "rePassword"];

  if (blurList._includes(targetname)) {
    dataUpdateBlur({ e, target: config });
  }

  if (targetname._strInclude("gender")) {
    config[targetname].value = target.value;
  }

  if (targetname._strInclude("birth")) {
    //NOTE: 백엔드 왈 :"2012-12-05"
    const birthList = [
      zeroNum(signUpBirthYear.value),
      zeroNum(signUpBirthMonth.value),
      zeroNum(signUpBirthDay.value),
    ];
    const birthMerge = birthList.join("-");
    config["birth"].value = birthMerge;
    return;
  }

  if (targetname._strInclude("terms")) {
    config["terms"].value = target.checked;
  }
});

function init() {
  const { birthConfig } = response;
  const makeYearFormat = {
    target: signUpBirthYear,
    list: birthConfig.yearList,
  };
  makeDateOptions(makeYearFormat);
  const makeMonthFormat = {
    target: signUpBirthMonth,
    list: birthConfig.monthList,
  };
  makeDateOptions(makeMonthFormat);
  const makeDayFormat = {
    target: signUpBirthDay,
    list: birthConfig.dayList,
  };
  makeDateOptions(makeDayFormat);

  const findCheckedRadioInput = Array.from(signUpForm.gender).find(
    (item) => item.checked
  );
  if (findCheckedRadioInput) {
    config.gender.value = findCheckedRadioInput.value;
  }
  // Array.from(signUpForm.gender).find(item=>item.checked).value 나쁜예시
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

// signUpName.addEventListener("blur", (e) =>
//   dataUpdateBlur({ e, target: config })
// );
// signUpEmail.addEventListener("blur", (e) =>
//   dataUpdateBlur({ e, target: config })
// );
// signUpPassword.addEventListener("blur", (e) =>
//   dataUpdateBlur({ e, target: config })
// );
// signUpRePassword.addEventListener("blur", (e) =>
//   dataUpdateBlur({ e, target: config })
// );
