const inputNum = document.querySelector("#inputNum");
const makeBtn = document.querySelector("#make");
var here = document.querySelector(".pyramid");

function boxMaker() {}

makeBtn.addEventListener("click", makebox);
here.addEventListener("click", colors);
here.addEventListener("click", inter);

function makebox(e) {
  e.preventDefault();
  const number = inputNum.value;

  var output = "";
  for (let i = 1; i <= number; i++) {
    output += "<div>";
    for (let j = 0; j < i * 2 - 1; j++) {
      output += "<div class='count'></div>";
    }
    output += "</div>";
  }
  $(".pyramid").append(output);
}

function deletebox() {
  $(".pyramid div").remove();
}

function colors() {
  deletebox();

  const number = inputNum.value;

  var output = "";
  for (let i = 1; i <= number; i++) {
    output += "<div>";
    for (let j = 0; j < i * 2 - 1; j++) {
      var ranN1 = Math.round(Math.random() * 255);
      var ranN2 = Math.round(Math.random() * 255);
      var ranN3 = Math.round(Math.random() * 255);
        output += `<div class='count' style='background-color: rgb(${ranN1},${ranN2},${ranN3})'></div>`;
    }
    output += "</div>";
  }
  $(".pyramid").append(output);
}
function inter() {
  setInterval(colors, 1000);
}
