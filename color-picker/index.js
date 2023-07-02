const colorPicker = document.getElementById("color-picker");
const colorsDiv = document.querySelector(".colors-div");
let colorsArr = [];
let colorPickerValue = colorPicker.value.slice(1);
const btn = document.querySelector("button");
const select = document.querySelector("select");
let selectValue = "";

select.addEventListener("change", function (e) {
  selectValue = e.target.value;
});

colorPicker.addEventListener("change", function (e) {
  colorPickerValue = e.target.value.slice(1);
});

btn.addEventListener("click", function () {
  const getColors = fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${selectValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArr = [];
      data.colors.forEach((color) => {
        colorsArr.push(color.hex.value.slice(1));
        renderColors();
      });
    });
});

function renderColors() {
  let html = "";
  for (let color of colorsArr) {
    html += `
  
    <div class="color-div" style="background: #${color}">
    <p class="color-code">#${color}</p>
    </div>

    `;
  }
  colorsDiv.innerHTML = html;
}
