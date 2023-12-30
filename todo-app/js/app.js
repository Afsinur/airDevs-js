let todoForm = document.querySelector("[data-todo-form]");
let todoListContainer = document.querySelector("[data-todo-list]");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let val = e.target.textData.value;
  todoListContainer.innerHTML += `<p>${val}</p>`;

  e.target.reset();
});
