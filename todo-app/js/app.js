let todoForm = document.querySelector("[data-todo-form]");
let todoListContainer = document.querySelector("[data-todo-list]");

let dataBase = [];

todoForm.addEventListener("submit", (e) => {
  //preventing the default behavour of the from
  e.preventDefault();
  //getting the input value
  let val = e.target.textData.value;
  //making an object for "dataBase"
  let obj = { todo: val };
  //saving the data
  dataBase.push(obj);
  //shoing the data to the html page
  todoListContainer.innerHTML = "";
  dataBase.forEach((obj, i) => {
    todoListContainer.innerHTML += `<p>${obj.todo}</p>`;
  });
  //reseting the form's inputs value
  e.target.reset();
});
