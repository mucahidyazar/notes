//Elementleri secme

let element;


//Element'in id sine gore element secme
element = document.getElementById("todo-form");
element = document.getElementById("todo");

//Element'in class ina gore element secme
element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("form-group");
element = document.getElementsByClassName("list-group-item")[1];

//Tag(li-div gibi)'e gore element secme
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");
element = document.getElementsByTagName("li")[0];


//Query Selector = Bununla sadece kosulumuza ilk uyan ve karsimiza cikan ilk degeri secebiliriz.
element = document.querySelector("#todo-form"); //id
element = document.querySelector(".list-group-item"); //class
element = document.querySelector("div"); //tag ilk div


//QuerySelector All = Bu metodlada query selectorla yapabildigimizi kosullarin hepsi icin yapabiliriz
element = document.querySelectorAll("li");


//QuerySelectorAll bize coklu seyleri nodeList ile dondurur bu listeler dizilere benzer. icinde forEach ile gezebiliriz.
element.forEach(function(x){
    console.log(x);
});


console.log(element);