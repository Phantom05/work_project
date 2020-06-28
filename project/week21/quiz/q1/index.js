//---------------------function------------------//
function el(name) {
  return document.querySelector(`#${name}`);
}

// ----------------- index -----------------//
const selectBox = el("selectBox");
const inputBox = el("inputBox");
const addList = el("addList");
const searchList = el("searchList");

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    console.log(selectBox.value);
  }
});
