const burger = document.querySelector(".burger");
const mobile_menu = document.querySelector(".mobile_menu");

burger.addEventListener("click", () => {
  mobile_menu.classList.toggle("show");
});
