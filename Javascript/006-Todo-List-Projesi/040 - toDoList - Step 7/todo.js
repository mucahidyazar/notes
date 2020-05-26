const addToDoForm = document.getElementById("todo-form");
const addToDoInput = document.getElementById("todo");
const toDoList = document.querySelector(".list-group");
const cardBody01 = document.querySelectorAll(".card-body")[0];
const cardBody02 = document.querySelectorAll(".card-body")[1];
const filterInputTodos = document.getElementById("filter");
const clearTodos = document.getElementById("clear-todos");

allEventListeners();

function allEventListeners(){
    addToDoForm.addEventListener("submit", addToDo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);   cardBody02.addEventListener("click", deleteToDo);
    filterInputTodos.addEventListener("keyup", filterTodos);
}



function deleteToDo(event){
    if(event.target.className==="fa fa-remove"){
        event.target.parentElement.parentElement.remove();
        deleteToDoFromStorage(event.target.parentElement.parentElement.textContent);
        showAlert("success", "Silme islemi basariyla gerceklestirildi");
    }
    event.preventDefault();
}

function deleteToDoFromStorage(deletedToDo){
    let todos = isThereAnyTodo();
    todos.forEach(function(event, index){
        if(event===deletedToDo){
            todos.splice(index,1);
            console.log("sdafasf");
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}




function addToDo(event){
    const newTodo = addToDoInput.value.trim();
    if(newTodo==""){ 
        showAlert("danger", "Lutfen birseyler yazin!");
    }else{
        addToDoUI(newTodo);
        addToDoToStorage(newTodo);
        showAlert("success", "Ekleme basariyla gerceklestirildi");
        newTodo = "";
    }
    
    
    event.preventDefault();
}



function showAlert(type, message){
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    cardBody01.appendChild(alertDiv);
      
    //setTimeout ile 1 Saniye sonra remove kodunu calistirarak showAlert'imizi siliyoruz.
    setTimeout(function(){
        alertDiv.remove();
    },1000);
}



function addToDoToStorage(newToDo){
    const todos = isThereAnyTodo();
    todos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function isThereAnyTodo(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
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



function loadAllTodosToUI(){
    let todos = isThereAnyTodo();
    todos.forEach(function(todo){
        addToDoUI(todo);
    });
}



function filterTodos(event1){
    let fit = event1.target.value.toLowerCase();
    const todos = document.querySelectorAll(".list-group-item");
    todos.forEach(function(event2){
        const todosli = event2.textContent.toLowerCase();
        if(todosli.indexOf(fit)===-1){
            event2.setAttribute("style", "display: none !important");
        }else{
            event2.setAttribute("style", "display: block");
        }
    });
}