let menuContainer = document.querySelector("[data-menu-bar-container]");
let menuBar = document.querySelector("[data-menu-bar]");
let menuBtn = document.querySelector("[data-menu-btn]");

menuContainer.addEventListener("click", () => {
  menuContainer.classList.add("invisible");
  menuContainer.classList.add("pointer-events-none");
  menuBar.classList.add("-translate-x-full");
});

menuBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

menuBtn.addEventListener("click", () => {
  menuContainer.classList.remove("invisible");
  menuContainer.classList.remove("pointer-events-none");
  menuBar.classList.remove("-translate-x-full");
});
