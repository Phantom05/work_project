const inputSearch = document.getElementById("inputSearch");
const inputSearchBtn = document.getElementById("inputSearchBtn");
const searchLiset = document.getElementById("searchLiset");

const config = {
  keyword: "",
  coffeeMenuList: [],
};
async function main() {
  const { data } = await axios.get(api.coffeeData);
  config.coffeeMenuList = data.list;
  console.log(data.list);
}
main();

inputSearch.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    inputSearchBtn.click();
  }
});

inputSearchBtn.addEventListener("click", function (e) {
  config.keyword = inputSearch.value.trim();
  inputSearch.value = "";
  console.log(config, "config");
  const containList = config.coffeeMenuList.filter((item) => {
    return item.name.indexOf(config.keyword) !== -1;
  });
  console.log(containList, "containList");

  searchLiset.innerHTML = "";
  $(searchLiset).html(containList.map((item) => item.name).join(","));
});
