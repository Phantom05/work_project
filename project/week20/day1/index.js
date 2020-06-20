const randomBox = el("#randomBox");
const randomBtn = el("#randomBtn");

const testList = Array(100)
  .fill(true)
  .map((i, idx) => {
    return {
      id: idx,
      title: `Title ${idx}`,
    };
  });

axios.get("../data.json").then((res) => {
  const dataList = res.data;
  dataList.length = 100;
  console.log(dataList, "dataList");
});

intialize();

function intialize() {}
