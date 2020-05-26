const todoInput = document.querySelector(".form-control");

let element = todoInput;

//Classlist almak
element = todoInput.classList;

//Classliste yeni class eklemek
todoInput.classList.add("Deneme1");

//Baska Turlu ekleme = Bununla ayni zamanda olan bir deger degistirilebilirde. Bu sekilde eklenirse diger onceden olan degerler silinir. Yada onlarida yazip en son ekleyecegin degeri de ekleyeceksin.
todoInput.setAttribute("class", "Deneme2 Deneme3");

//Silmek icinse asagidaki gibi yapariz
todoInput.classList.remove("Deneme3");

//veya bu sekilde komple classi silebiliriz.
todoInput.removeAttribute("class");

todoInput.setAttribute("class", "Deneme1 Deneme2 Deneme3 Deneme4");

//placeholder dada degisiklikler yapabiliriz.
todoInput.setAttribute("placeholder", "Degistirmek istediginiz texti buraya yaziniz");




element = todoInput;

/*
Herhangi bir attribute varmi kullanilmismi sorgulayip FALSE ve TRUE degerler geri donusu alabiliriz.
element = todoInput.hasAttribute("name");
*/



console.log(element);