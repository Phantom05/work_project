const api = {
  getCoffeeMenuList: "../coffeeMenu.json",
};

function searchCenterElement(config = {}) {
  const {
    text = "No data. Please search for other products.",
    className = "",
  } = config;
  return `<div class="coffee__search_info ${className}">${text}</div>`;
}

function createCoffeeCardElement(item = {}) {
  return `
  <div class="coffee__item_box">
  <label for="item_${item.id}" class="block">
    <input type="radio" name="coffee_item" id="item_${
      item.id
    }" hidden class="coffee__checkbox" data-number="${item.id}">
    <div class="coffee__item_card">
      <div class="coffee__item_row img">
        <img
          src="${item.src}"
          alt="" class="coffee__item_img">
      </div>
      <div class="coffee__item_row name">
        <p class="coffee__item_title">${item.name}</p>
      </div>
      <div class="coffee__item_row price">
        <p class="coffee__item_price">${numberWithCommas(item.price)} 원</p>
      </div>
    </div>
  </label>
</div>
  `;
}

function el(name) {
  return document.querySelector(`#${name}`);
}

function toggleLoadingBar(element) {
  return function (pending) {
    if (pending) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };
}

function dataDrawing(config = {}) {
  const { type, name, list, target } = config;

  if (type === "update") {
    if (name === "menu") {
      $(target).html(list.map((item) => createCoffeeCardElement(item)));
    }
    if (name === "cart") {
    }
    if (name === "detail") {
    }
  }
  if (type === "delete") {
  }
}

function findCoffeeItem(config) {
  const { id, list } = config;
  const findItem = list.find((item) => item.id === id);
  return findItem;
}

function popup(setConfig) {
  const {
    title: titleElemen,
    content: contentElem,
    footer: footerElem,
  } = setConfig;
  return function (config) {
    const { target, title, content, footer } = config;
    $(titleElemen).html(title);
    $(contentElem).html(content);
    $(footerElem).html(footer);
    $(target).modal();
  };
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function modalDetailContentElement(item) {
  const { src, name, price, id } = item;
  return `
  <div class="row modal__content_box" data-name="modal_${id}">
  <div class="col-md-6">
    <div class="modalDetail__row">
      <img
        src="${src}"
        alt="" class="coffee__item_img large">
    </div>
  </div>
  <div class="col-md-6">
    <div class="modalDetail__row">
      <div class="modal__item_name">${name}</div>
    </div>
    <div class="modalDetail__row">
      <div class="modal__item_price">${numberWithCommas(price)} 원</div>
    </div>

  </div>
</div>
  `;
}
