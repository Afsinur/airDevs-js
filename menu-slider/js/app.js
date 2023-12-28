let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("parent");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
});
