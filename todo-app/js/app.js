let todoForm = document.querySelector("[data-todo-form]");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.textData.value);
});
