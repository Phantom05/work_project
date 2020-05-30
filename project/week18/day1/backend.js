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
