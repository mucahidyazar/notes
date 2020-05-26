//let element = document.querySelector("#clear-todos");

//

//Element'i secme
//console.log(element);
//console.log(element.getElementsByClassName("clear-todos"));

//id ile secme
//console.log(element.id);
//console.log(element.classList);
//console.log(element.className);

//Const ta belirtilen elementin yazi icerigini almak
//console.log(element.textContent);

//innerHTML
//console.log(element.innerHTML);

//console.log(element.href);

//Elementin style degerlerini cekmek
//console.log(element.style);


/*
//Style Ozelliklerini Degistirmek
element.className = "btn btn-primary";
element.style.color = "red";
element.style.marginLeft = "20px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
element.textContent = "Deneme";
element.style.backgroundColor = "black";

//Dinamik olarak html eklenmez. asagidaki gibi
//element.textContent = "<b>YAZAR </b>";
//Yukaridaki kod gibi dinamik html eklemek istedigimiz zaman innerHTML kullaniriz.
element.innerHTML ="<span color:red><b>YAZAR</b></span>";
*/


const elements = document.querySelectorAll(".list-group-item");


elements[1].style.backgroundColor = "red";
elements.forEach(function(el){
    el.style.color = "green";
});

//Child kullanimi first child ve nthchild(1) ayni degerleri verir.
let element2;

elements2 = document.querySelector("li:first-child");
elements22 = document.querySelector("li:nth-child(1)");

//nth-child() parantez icine hangi sayi yazilirsa yazilan elaman sayisinin sirasindaki child secilir.
elements2 = document.querySelector("li:nth-child(2)");
elements2 = document.querySelector("li:nth-child(3)");

//Bizim indeximizde 4 tane li oldugu icin, li:last-child ile li:nth-child(4) ayni islevi gorur.
elements2 = document.querySelector("li:last-child");
elements2 = document.querySelector("li:nth-child(4)");

//Yada secmek istediklerimiz bir sira halinde oldugunu varsayarsak tek haneli siradaki 1.3.5.7. gibi sonsuza kadar gider varsa siradaki leri secebiliriz ODD ile. EVEN ise ciftlerde yapar aynisini.
element2 = document.querySelector("li:nth-child(odd)");
element2 = document.querySelector("li:nth-child(even)");


//Ayni zamanda asagidaki gibide tekli secebilirdik
elements2 = document.querySelectorAll("li")[0];
elements2 = document.querySelectorAll("li")[1];
elements2 = document.querySelectorAll("li")[2];
elements2 = document.querySelectorAll("li")[3];



//forEach ile kullanalim
element2 = document.querySelectorAll("li:nth-child(odd)");
element2.forEach(function(fu1){
    fu1.style.backgroundColor = "purple";
});

console.log(elements2);

