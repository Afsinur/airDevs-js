const addForm = document.querySelector("[data-todo-form]");
const listContainer = document.querySelector("[data-todo-list]");

let dataBase = [];

function delAndShow() {
  let todoItemLi = document.querySelectorAll("[data-todo-id]");

  todoItemLi.forEach((p) => {
    p.addEventListener("dblclick", (e) => {
      let id = e.target.dataset.todoId;

      let filteredArray = dataBase.filter((obj, i) => {
        if (obj.id != id) {
          return true;
        }
      });

      dataBase = filteredArray;
      localStorage.setItem("arifTodo", JSON.stringify(dataBase));

      listContainer.innerHTML = ``;
      dataBase.forEach((obj, i) => {
        listContainer.innerHTML += `<p data-todo-id="${obj.id}">${obj.todo}</p>`;
      });

      delAndShow();
    });
  });
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //add
  let val = addForm.textData.value;
  let obj = { id: `id_${Date.now()}`, todo: val };
  dataBase.push(obj);

  localStorage.setItem("arifTodo", JSON.stringify(dataBase));

  listContainer.innerHTML = ``;
  dataBase.forEach((obj, i) => {
    listContainer.innerHTML += `<p data-todo-id="${obj.id}">${obj.todo}</p>`;
  });
  //delete

  delAndShow();

  //reset form
  addForm.reset();
});

function init() {
  let stringArray = localStorage.getItem("arifTodo");

  if (stringArray != null) {
    let dbArr = JSON.parse(stringArray);

    dataBase = dbArr;

    listContainer.innerHTML = ``;
    dataBase.forEach((obj, i) => {
      listContainer.innerHTML += `<p data-todo-id="${obj.id}">${obj.todo}</p>`;
    });

    delAndShow();
  } else {
    listContainer.innerHTML = `no data found!`;
  }
}

init();
