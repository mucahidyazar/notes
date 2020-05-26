let value;

value = document;

//Scriptlere erismek, uzunluk. dizinleri
/*
console.log(document.scripts);
console.log(document.scripts.length);
console.log(document.scripts[0]);
console.log(document.scripts[3]);
*/


//Linklere erismek, dizinler ve linklerin attribute unu secmek
value = document.links;
value = document.links.length;
value = document.links[0];
value = document.links[document.links.length-1];

value = document.links[0].getAttribute;
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");

//className de getAttribute ile ayni gorevi gorur.
value = document.links[document.links.length-1].className;

//classList adi uzerinde liste olarak
value = document.links[document.links.length-1].classList;


//Formlari gorme, form sayilarini bulma, formlari secme. id ile secme. name ile secme, attributelari secme, methodu secme
value = document.forms;
value = document.forms.length;

//id ile secme
value = document.forms[0];

//name ile secme, asagida name i form olan formlar secilir.
value = document.forms["form"];

//formlarin attributelarini secme
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].className;
value = document.forms[0].getAttribute("class");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");

console.log(value);