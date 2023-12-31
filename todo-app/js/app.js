let todoForm = document.querySelector("[data-todo-form]");
let todoListContainer = document.querySelector("[data-todo-list]");

let dataBase = [];

todoForm.addEventListener("submit", (e) => {
  //preventing the default behavour of the from
  e.preventDefault();
  //getting the input value
  let val = e.target.textData.value;
  //making an object for "dataBase"
  let obj = { id: mkId(), todo: val };
  //saving the data
  dataBase.push(obj);
  //shoing the data to the html page
  todoListContainer.innerHTML = "";
  dataBase.forEach((obj, i) => {
    todoListContainer.innerHTML += `
      <p data-todo-id="${obj.id}">${obj.todo}</p>
    `;
  });
  console.log(dataBase);

  let allTodoP = document.querySelectorAll("[data-todo-id]");
  allTodoP.forEach((itm) => {
    itm.addEventListener("click", (e) => {
      console.log(e.target.dataset.todoId);
    });
  });
  //reseting the form's inputs value
  e.target.reset();
});

function mkId() {
  let randomNumber = `${Math.random()}`;
  let onlyNumbers = randomNumber.slice(2, randomNumber.length);
  let uniqID = `id_${onlyNumbers}`;

  return uniqID;
}

// const arr = [
//   { id: "id_5638316917048742", todo: "1. ghum theke utha" },
//   { id: "id_779154663243744", todo: "2. namaz pora" },
//   { id: "id_26911164250716624", todo: "3. hatte jaoya" },
//   { id: "id_10896248764510719", todo: "4. ca khaoya" },
//   { id: "id_9854961201947519", todo: "5. kaje bosa" },
// ];

// function deleteAndReturnAnArray(e) {
//   let filteredArray = arr.filter((obj, i) => {
//     if (obj.id != e) {
//       return true;
//     }
//   });

//   return filteredArray;
// }

// let filteredArr = deleteAndReturnAnArray("id_779154663243744");

// console.log(filteredArr);
