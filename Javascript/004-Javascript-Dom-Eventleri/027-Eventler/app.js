const path1 = document.getElementById("todo-form");
const path2 = document.getElementsByName("button1")[0];
const button1 = document.createElement("button");
button1.className = "btn btn-primary";
button1.type = "submit";
button1.textContent = "Hersey guzel";

const closeTodos = document.querySelectorAll(".fa-remove");

/*path1.onfocus = function deneme1(x){
    console.log("Focus Basarili");
}*/

/*path1.addEventListener("focus", function deneme1(x){
    console.log("Focus Basarili");
})*/

/*path2.onclick = function deneme2(x){
    console.log("Click/Submit Basarili");
    x.preventDefault();
}*/

/*path2.addEventListener("click", function deneme2(x){
    console.log("Click-Submit Basarili");
    x.preventDefault();
});*/



closeTodos.forEach(function deneme3(x){
    x.addEventListener("click", function deneme4(x2){
        x = x.parentElement.parentElement;
        x.remove();
    });
});


path1.appendChild(button1);

console.log(closeTodos);
//console.log(path2);