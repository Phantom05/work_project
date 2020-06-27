const loadingBox = el("loadingBox");
const coffeeListBox = el("coffeeListBox");
const detailModal = el("detailModal");

const modalHeader = el("modalHeader");
const modalBody = el("modalBody");
const modalFooter = el("modalFooter");

const config = {
  message: {
    noData: "No data. Please search for other products.",
    loading: "Loading. Please wait.",
  },
  coffeList: [],
  pending: true,
  selected: null,
};

const loadingToggle = toggleLoadingBar(loadingBox);
const setPopup = {
  title: modalHeader,
  content: modalBody,
  footer: modalFooter,
};
const openPopup = popup(setPopup);

axios.get(api.getCoffeeMenuList).then((item) => {
  config.coffeList = item.data.list;
  config.pending = false;
  loadingToggle(config.pending);
  console.log(config.coffeList);
  main();
});

coffeeListBox.addEventListener("change", function (e) {
  const target = e.target;
  const targetId = target.getAttribute("data-number");
  config.selected = Number(targetId);

  const findCoffeeFormat = {
    id: config.selected,
    list: config.coffeList,
  };
  const findItem = findCoffeeItem(findCoffeeFormat);
  console.log(findItem);

  const modalFormat = {
    title: "Product Detail.",
    target: detailModal,
  };
  openPopup(modalFormat);
});

function main() {
  init();
}

function init() {
  const drawFormat = {
    type: "update",
    name: "menu",
    target: coffeeListBox,
    list: config.coffeList,
  };
  dataDrawing(drawFormat);
}

function rendomId() {
  return parseInt(Math.random() * 50000000000);
}
