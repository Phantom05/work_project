# Week18



+ 회원가입 퍼블리싱

  + 데이터 중심 회원가입 프로젝트 진행

  + 자바스크립트와 친해지는 중,

  + React 방식으로 모든 엘리먼트에 이벤트 바인딩

  + 초기 로딩시, BackEnd 데이터 받아 Option Element생성 후 업데이트

    ```js
    // backend
    const birthConfig = {
      yearList: [],
      monthList: [],
      dayList: [],
    };
    
    const date = new Date();
    
    for (let i = 1900; i <= date.getFullYear(); i++) {
      birthConfig.yearList.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      birthConfig.monthList.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      birthConfig.dayList.push(i);
    }
    
    const response = {
      birthConfig,
    };
    
    //option function
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
    
    ```

  + init 함수로 페이지 렌더링 시 실행

  ```js
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
  ```

  + init 시, element 데이터 체크 후 config 데이터 업데이트, (확장성)

  ```js
   const findCheckedRadioInput = Array.from(signUpForm.gender).find(
      (item) => item.checked
    );
    if (findCheckedRadioInput) {
      config.gender.value = findCheckedRadioInput.value;
    }
  ```

  + input관련 함수들 blur 될 시 config 데이터 업데이트

  ```js
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
  ```

  + `submitForm change `이벤트로 공통된 함수들 추출

  ```js
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
  
  ```

  + 공통된 함수들 `function.js`로  분리

  ```js
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
  
  ```

  + submit 시 유효성 검사 후 `Data Drawing`,

    + success, failure 처리 후 화면에 보이는 failure info 엘리먼트들 컨트롤

    ```js
    
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
    ```

    

    다음시간에 server쪽 통신 후 남은 토이프로젝트들 진행 예정



+ 숙제
  + js공부 열심히하기!
  + jquery 훑어보며 사용해보기
  + 나만의 프로그램 하나 만들어보기 (시간이 되면 해보기)

------

- 보충수업 잔여 8h 