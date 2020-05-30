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
