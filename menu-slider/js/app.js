let menuBar = document.querySelector("[data-menu-bar]");
let menuBtn = document.querySelector("[data-menu-btn]");
let menuClose = document.querySelector("[data-menu-close]");

menuBtn.addEventListener("click", () => {
  menuBar.classList.remove("-translate-x-full");
});

menuClose.addEventListener("click", () => {
  menuBar.classList.add("-translate-x-full");
});
