const loadingBox = el("loadingBox");
const coffeeListBox = el("coffeeListBox");
const inputSearch = el("inputSearch");

const detailModal = el("detailModal");
const modalHeader = el("modalHeader");
const modalBody = el("modalBody");
const modalFooter = el("modalFooter");
const modalForm = el("modalForm");

const config = {
  message: {
    noData: "No data. Please search for other products.",
    loading: "Loading. Please wait.",
  },
  coffeList: [],
  pending: true,
  selected: null,
  cart: [],
  order: {
    name: null,
    price: null,
    count: null,
    temper: null,
    size: null,
  },
};

const loadingToggle = toggleLoadingBar(loadingBox);
const setPopup = {
  title: modalHeader,
  content: modalBody,
  footer: modalFooter,
};
const openPopup = popup(setPopup);

/**
 * NOTE: 초기 데이터 요청
 */
axios.get(api.getCoffeeMenuList).then((item) => {
  config.coffeList = item.data.list;
  config.pending = false;
  loadingToggle(config.pending);
  console.log(config.coffeList);
  main();
});

/**
 * NOTE: input search 입력하여, 데이터 filter후 drawing
 */
inputSearch.addEventListener("keyup", function (e) {
  const target = e.target;
  const targetValue = target.value.trim();
  if (e.key === "Enter") {
    const filterList = config.coffeList.filter(
      (item) => item.name.indexOf(targetValue) !== -1
    );

    const drawFormat = {
      type: "update",
      name: "menu",
      target: coffeeListBox,
      list: filterList,
    };
    dataDrawing(drawFormat);
  }
});

modalForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

modalForm.addEventListener("change", function (e) {
  e.preventDefault();
  const target = e.target;
  const targetName = e.target.name;

  if (targetName === "size" || targetName === "temper") {
    console.log(target.value, "size or temper");
  }
  console.log(target);
  console.log(target.value);
  console.log(targetName);
});

/**
 * NOTE: event card click
 */
coffeeListBox.addEventListener("change", function (e) {
  const target = e.target;
  const targetId = target.getAttribute("data-number");
  config.selected = Number(targetId);

  const findCoffeeFormat = {
    id: config.selected,
    list: config.coffeList,
  };
  const findItem = findCoffeeItem(findCoffeeFormat);

  const modalFormat = {
    target: detailModal,
    title: "Product Detail.",
    content: modalDetailContentElement(findItem),
  };
  console.log(findItem);
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
