// LOCALSTROAGE

// setItem
//localStorage.setItem("denemekey1", "denemevalue1");
//localStorage.setItem("denemekey2", "denemevalue2");
//localStorage.setItem("denemekey3", "denemevalue3");

// getItem = key degerini yazip value degerini almak.
// const denemevalue = localStorage.getItem("denemekey1");


//const series = ["dizi1", "dizi2", "dizi3", "dizi4", "dizi5"];
// Dizileri String olarak ve Bozmadan DIZI olarak saklamak
// String olarak saklamak istersek setItem bunun icin yeterli fakat dizi olarak bozmadan saklamak icin asagidaki adimlari uygulamak gerekiyor

// String olarak
// localStorage.setItem("diziler", series);

// Dizi olarak LOCALSTROAGE'ye eklemek
//localStorage.setItem("dizi1", JSON.stringify(series));

// Dizi olarak LOCALSTROAGE'den cekmek
//const series1 = JSON.parse(localStorage.getItem("dizi1"));






//PROOJE
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", fonk1);

function fonk1(x){
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.push(value);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
    x.preventDefault();
}

