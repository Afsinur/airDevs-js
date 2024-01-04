let todoForm = document.querySelector("[data-todo-form]");
let todoListContainer = document.querySelector("[data-todo-list]");

let dataBase = [];

function deleteAndReturnAnArray(e) {
  let filteredArray = dataBase.filter((obj, i) => {
    if (obj.id != e) {
      return true;
    }
  });

  return filteredArray;
}

function runAfterAddClick() {
  let allTodoP = document.querySelectorAll("[data-todo-id]");

  allTodoP.forEach((itm) => {
    itm.addEventListener("dblclick", (e) => {
      //after delete update database
      dataBase = deleteAndReturnAnArray(e.target.dataset.todoId);
      showDbToHtmlPage();
    });
  });
}

todoForm.addEventListener("submit", (e) => {
  //preventing the default behavour of the from
  e.preventDefault();
  //getting the input value
  let val = e.target.textData.value;
  //making an object for "dataBase"
  let obj = { id: `id_${Date.now()}`, todo: val };
  //saving the data
  dataBase.push(obj);
  showDbToHtmlPage();
  //reseting the form's inputs value
  e.target.reset();
});

function showDbToHtmlPage() {
  //shoing the data to the html page
  todoListContainer.innerHTML = "";
  dataBase.forEach((obj, i) => {
    todoListContainer.innerHTML += `
      <p data-todo-id="${obj.id}" class="p-2 bg-gray-100 cursor-pointer text-sm font-semibold">
        <span class="select-none pointer-events-none">
          ${obj.todo}
        </span>
      </p>
      `;
  });

  runAfterAddClick();
}
