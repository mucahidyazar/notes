// NEDIR SESSION STROAGE VE LOCAL STROAGE

// SESSION STROAGE = Tarayicimizi veya sekmemizi kapatana kadar internet sitelerinin sakladigi verilerdir. Bu veriler tarayicimizi kapatmamiz ile birlikte Session Stroage alanindan silinir.

// LOCAL STROAGE = Bu ise tarayicxiyi veya sekmeyi kapatmakla gitmez. Verilerin depolandigi yerel dosyalardan silmedigimiz surece internet sitelerinin bizim bilgisayarlarimizda depolamak istedikleri verileri buralarda saklarlar.


/*const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");





add.addEventListener("click", additem);
del.addEventListener("click", delitem);
clear.addEventListener("click", clearitems);

function additem(x){
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function delitem(x){
    sessionStorage.removeItem(deletekey.value);
}

function clearitems(x){
    sessionStorage.clear();
}*/















const addkey1 = document.getElementById("add");
const addvalue1 = document.getElementById("delete");
const addclear1 = document.getElementById("clear");

const ikey = document.getElementById("addkey");
const ivalue = document.getElementById("addvalue");
const iclear = document.getElementById("deletekey");


addkey1.addEventListener("click", fonk88);
function fonk88(x){
    sessionStorage.setItem(ikey.value, ivalue.value);
}

addvalue1.addEventListener("click", fonk89);
function fonk89(x){
    sessionStorage.removeItem(iclear.value);
}

addclear1.addEventListener("click", fonk90);
function fonk90(x){
    sessionStorage.clear();
}


