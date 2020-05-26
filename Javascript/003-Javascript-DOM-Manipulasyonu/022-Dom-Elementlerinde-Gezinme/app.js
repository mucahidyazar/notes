let value;

const body1 = document.body;
const todolist1 = document.querySelector(".list-group");
const lists1 = document.querySelector(".list-group-item");




//Child lari bu sekilde buluruz ama burada alt satira gecilmeleri bile text seklinde goruruz. Bunlari gormemek icin children kullanmak gerekiyor.
value = body1.childNodes;
value = body1.children;

value = todolist1.children;
value = todolist1.children[0];
value = todolist1.firstElementChild;
value = todolist1.lastElementChild;
value = todolist1.children[1].textContent = "Todoooo 1";

//Child Sayisini bulmak
value = todolist1.children.length;
value = todolist1.childElementCount;


//ParentElement ile elementimizin icinde bulundugu elementi secebiliriz. babasinin babasini bile secebiliriz.
value = lists1.parentElement;
value = lists1.parentElement.parentElement;
value = lists1.parentElement.parentElement.parentElement;
value = lists1.parentElement.parentElement.parentElement.parentElement;
value = lists1.parentElement.parentElement.parentElement.parentElement.parentElement;

//Yukarda body'e kadar ciktik parent elementlerinde, istersek asagiya dogruda children ile inebiliriz.
lists1.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children;


//Istersek kardesler arasi sira derecesinde ileri veya geriyede gidebiliriz. previous/next ElementSibling kodlariyla. Eger siralama disina cikarsak null degeri aliriz.
value = lists1.previousElementSibling;
value = lists1.nextElementSibling;
value = lists1.nextElementSibling.nextElementSibling;






console.log(value);