let burger = document.querySelector(".burger-wrap");
let menu = document.querySelector(".nav-wrap");
let header = document.querySelector(".header-wrap");
let clickBtn = document.querySelector(".click-button");

burger.addEventListener("click", function () {
  burger.classList.toggle("rotate-burger");
  header.classList.toggle("header-burger");
  menu.classList.toggle("nav-wrap-burger");
  clickBtn.classList.toggle("visible");
  menu.classList.toggle("visible");
});
