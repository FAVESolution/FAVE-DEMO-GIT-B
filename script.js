const plusBtn = document.querySelector(".plus");
const counter = document.querySelector(".content");

let count = 0;
plusBtn.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});
