const inputSearch = document.getElementById("inputSearch");
const inputSearchBtn = document.getElementById("inputSearchBtn");
const searchLiset = document.getElementById("searchLiset");
const viewAllBtn = document.getElementById("viewAllBtn");
const orderList = document.getElementById("orderList");
const detail = document.getElementById("detail");
const loadingbar = document.getElementById("loadingbar");

const config = {
  keyword: "",
  coffeeMenuList: [],
  checkList: new Set(),
  selected: null,
  pending: true,
};
async function main() {
  const { data } = await axios.get(api.coffeeData);
  loadingbar.classList.add("load");
  config.coffeeMenuList = data.list;
  console.log(config.coffeeMenuList, "?");
  const intializeFormat = {
    list: config.coffeeMenuList,
  };
  intialize(intializeFormat);
}
setTimeout(() => {
  main();
}, 1000);

inputSearch.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    inputSearchBtn.click();
  }
});

inputSearchBtn.addEventListener("click", function (e) {
  config.keyword = inputSearch.value.trim();
  inputSearch.value = "";
  const containList = config.coffeeMenuList.filter((item) => {
    return item.name.indexOf(config.keyword) !== -1;
  });
  console.log(containList, "containList");

  searchLiset.innerHTML = "";
  $(searchLiset).html(containList.map((item) => makeCoffeCard(item)));
  const checkFormat = {
    list: [...config.checkList],
    selected: config.selected,
  };
  setMenetListCheck(checkFormat);
});

viewAllBtn.addEventListener("click", function () {
  const drawFormat = {
    type: "update",
    name: "allMenu",
    target: searchLiset,
    list: config.coffeeMenuList,
  };
  dataDrawing(drawFormat);
  const checkFormat = {
    list: [...config.checkList],
    selected: config.selected,
  };
  setMenetListCheck(checkFormat);
});

// check change
searchLiset.addEventListener("change", function (e) {
  const target = e.target;
  const targetId = target.id;

  if (config.checkList.has(targetId)) {
    config.checkList.delete(targetId);
  } else {
    config.checkList.add(targetId);
  }
  config.selected = targetId;

  const checkFormat = {
    list: [...config.checkList],
    selected: config.selected,
  };
  setMenetListCheck(checkFormat);

  const detailFormat = {
    item: config.selected,
    coffeeMenuList: config.coffeeMenuList,
    target: detail,
  };
  setDetail(detailFormat);

  const orderFormat = {
    list: [...config.checkList],
    coffeeMenuList: config.coffeeMenuList,
  };
  setOrder(orderFormat);
});

function makeItemInfoElement(config) {
  const { item } = config;
  return `
  <div class="coffee__card_box name">
    ${item.name}
  </div>
  <div class="coffee__card_box price">
  ${numberWithCommas(item.price)} 원
  </div>
  `;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setDetail(config) {
  const { item, coffeeMenuList, target } = config;
  const findItem = coffeeMenuList.find((coffee) => String(coffee.id) === item);

  console.log(findItem, "set Detail");
  const result = `
    ${makeItemInfoElement({ item: findItem })}
  `;
  $(target).html(result);
}

function setOrder(config) {
  // const { list, coffeeMenuList } = config;
  // const orderMenuList = coffeeMenuList.filter(
  //   (item) => list.indexOf(String(item.id)) !== -1
  // );
  // const resultList = orderMenuList.map((item) => {
  //   return `
  //   <div>${item.name} : ${item.price} 원</div>
  // `;
  // });
  // const sumList = orderMenuList.map((item) => item.price);
  // let resultSum = 0;
  // if (sumList.length) {
  //   resultSum = sumList.reduce((x, y) => x + y);
  // }
  // const result = `
  //   <div>
  //     ${resultList.map((item) => item).join("")}
  //   </div>
  //   <div>총 주문 금액: ${resultSum} 원</div>
  // `;
  // $(orderList).html(result);
}

function setMenetListCheck(config) {
  const { list, selected } = config;
  const menuList = Array.from(
    document.querySelectorAll('input[data-name="menuList"]')
  );
  menuList.map((item) => {
    if (selected === item.id) {
      item.checked = true;
    } else {
      item.checked = false;
    }
    // if (list.indexOf(item.id) !== -1) {
    //   item.checked = true;
    // } else {
    //   item.checked = false;
    // }
  });
}

function dataDrawing(config) {
  const { type, name, list, target } = config;
  if (type === "update") {
    if (name === "allMenu") {
      $(target).html(list.map((item) => makeCoffeCard(item)));
    }
  }
}

function makeCoffeCard(item) {
  return `
  <div class="coffee__list_box">
  <label class="coffee__check_label" for="${item.id}">
   <input type="checkbox" id="${
     item.id
   }" data-name="menuList" hidden class="inputCheckbox">
    <div class="coffee__card">
      <span class="coffee__check_box">
         <input type="checkbox" id="${item.id}" data-name="menuList" hidden>
      </span>
      <div class="coffee__card_box img">
        <img
          src="${item.src}"
          alt="" class="coffee__card_img">
      </div>
      ${makeItemInfoElement({ item: item })}
    </div>
  </label>
</div>
  `;
}

function intialize(config) {
  const { list } = config;

  $(searchLiset).html(list.map((item) => makeCoffeCard(item)));
}
