const inputSearch = document.getElementsByClassName("form-control")[1];



// FOCUS
// Odaklanma yaptigimizda geri bildirim aliriz. Her focus yaptigimizda calisir.
inputSearch.addEventListener("focus", fonk);

// BLUR
// Focus islemini terkettigimizde calisir.
inputSearch.addEventListener("blur", fonk);


// SELECT - CUT - COPY - PASTE
// Yukaridaki islemleri yaptigimizda geri donus aliriz. Ornegin belirledigimiz alanda secme yaptigimizda veya kes kopyala yapistir yaptigimizda ne olmasini istedigimizi yapabiliriz. Ornegin ben sadece arama kisminda yapilan islemlerin mesajlarini konsola yazi yazdiracagim asagida.
inputSearch.addEventListener("select", fonk1);
inputSearch.addEventListener("cut", fonk2);
inputSearch.addEventListener("copy", fonk3);
inputSearch.addEventListener("paste", fonk4);







function fonk(x){
    console.log(x.type);
}

function fonk1(x){
    console.log("Select is done");
}

function fonk2(x){
    console.log("Cut is done");
}

function fonk3(x){
    console.log("Copy is done");
}

function fonk4(x){
    console.log("Paste is done");
}