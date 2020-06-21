const randomBox = el("#randomBox");
const randomBtn = el("#randomBtn");

const config = {
  isLoading: true,
  count: 20,
  list: [],
};

const setDataMerge = setDataBundle(randomBox);

async function main() {
  const { data } = await axios.get(api.movieData);
  config.isLoading = false;
  const filterData = data.filter((item) => {
    const gernList = item.gern.split(/\s*,\s/);
    if (gernList.indexOf("19금") === -1) {
      return item;
    }
  });
  filterData.length = 100;
  config.list = filterData;
  const bundleFormat = {
    count: config.count,
    list: config.list,
  };
  setDataMerge(bundleFormat);
}

main();

randomBtn.addEventListener("click", function () {
  if (config.isLoading === true) return;

  const bundleFormat = {
    count: config.count,
    list: config.list,
  };
  setDataMerge(bundleFormat);
});
