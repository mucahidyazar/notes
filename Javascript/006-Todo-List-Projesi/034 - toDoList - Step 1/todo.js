const addToDoForm = document.getElementById("todo-form");
const addToDoInput = document.getElementById("todo");
const toDoList = document.querySelector(".list-group");
const cardBody01 = document.querySelectorAll(".card-body")[0];
const cardBody02 = document.querySelectorAll(".card-body")[1];
const filterTodos = document.getElementById("filter");
const clearTodos = document.getElementById("clear-todos");

allEventListeners();

function allEventListeners(){
    addToDoForm.addEventListener("submit", addToDo);
}

function addToDo(event){
    const newTodo = addToDoInput.value.trim();
    addToDoUI(newTodo);
    event.preventDefault();
}

function addToDoUI(event){
    const toDoLi = document.createElement("li");
    const toDoa = document.createElement("a");
    toDoLi.className = "list-group-item d-flex justify-content-between";
    toDoa.href = "";
    toDoa.className = "delete-item";
    toDoa.innerHTML = '<i class = "fa fa-remove"></i>';
    toDoLi.appendChild(document.createTextNode(event));
    toDoLi.appendChild(toDoa);
    toDoList.appendChild(toDoLi);    
}



