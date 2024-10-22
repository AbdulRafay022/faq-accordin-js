"use strict";
const pluses = document.querySelectorAll(".plus");
const minuses = document.querySelectorAll(".minus");
const faqs = document.querySelectorAll(".faqs");

pluses.forEach(function (plus, i) {
  plus.addEventListener("click", (e) => {
    faqs[i].classList.toggle("hidden");
    pluses[i].classList.toggle("hidden");
    minuses[i].classList.remove("hidden");
  });
});
minuses.forEach(function (minus, i) {
  minus.addEventListener("click", (e) => {
    faqs[i].classList.toggle("hidden");
    minuses[i].classList.toggle("hidden");
    pluses[i].classList.remove("hidden");
  });
});
