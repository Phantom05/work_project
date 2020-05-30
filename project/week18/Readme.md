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

  + 









------

- 보충수업 잔여 8h 30m