let inputToDo = document.querySelector(".input-text");
let btnadd = document.querySelector(".btn");
let elementToDo = document.querySelector(".ul-list");
let form = document.querySelector(".form-wraper");

form.addEventListener("click", function (item) {
  //   1. get elements from inputToDo,
  item.preventDefault();
  let inputValue = inputToDo.value;
  if (inputValue == "") {
    return;
  }

  //   2. Chavagdot inputToDo mnishvneloba ul li shi
  let listTodo = document.createElement("li");
  //   წაშლის ღილაკი :
  let listDeleteBtn = document.createElement("button");
  listDeleteBtn.classList.add("delete-btn");
  let delecteicon = document.createElement("i");
  delecteicon.classList.add("fa-solid", "fa-delete-left");
  listDeleteBtn.appendChild(delecteicon);

  listTodo.textContent = inputValue;
  listTodo.classList.add("lists-style");
  elementToDo.appendChild(listTodo);
  listTodo.appendChild(listDeleteBtn);

  listDeleteBtn.addEventListener("click", function () {
    listTodo.remove();
  });
  //   3. remove inputToDo
  inputToDo.value = "";
});

let clearBtn = document.querySelector(".clearList");
clearBtn.addEventListener("click", function () {
  elementToDo.innerHTML = "";
});
