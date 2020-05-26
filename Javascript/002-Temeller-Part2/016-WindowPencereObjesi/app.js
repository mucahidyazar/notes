//THIS
// this aslinda bizim uzerinde bulundugumuz objedir.
// Javascriptte en genel obje Window objesidir.

//alert ("Deneme 1 2 3");


/*
CONFIRM = Soru sorup true yada false donusler almamizi saglar.
const deneme = confirm("Emin misin?");

if(deneme){
    console.log("Silin gitsin");
}
else{
    console.log("Birsey yapma");
}

or

if(confirm("Emin misin?")){
    console.log("Silin gitsin");
}
else{
    console.log("Birsey yapma");
}
*/


//PROMPT = Soru Sormamizi saglar ve cevap girilmesini saglar.
/*
const cevap = prompt("2+2=?");
if(cevap=="4"){
    console.log("Cevap DOGRU");
}
else{
    console.log("Cevap YANLIS");
}
*/

//Bazi Degerler
let value;

value = window;
value = window.location;
value = window.location.host; // gibi 127.0.0.1:58873
value = window.location.hostname; // gibi 127.0.0.1
value = window.location.port; // gibi 58873
value = window.location.href;

console.log(value);


//Sayfa Yenileme Kodu
/*
if(confirm("Sayfa yenilensin mi?")){
    window.location.reload();
}
else{
    console.log("Sayfa isteginiz uzerine yenilenmedi");
}
*/


//Pencerenin Dis olculerini Alma Yukseklik/Genislik
value = window.outerHeight;
value = window.outerWidth;
console.log(value);

//Pencerenin gorunen ic olculerini alma Yukseklik/Genislik
value = window.innerHeight;
value = window.innerWidth;
console.log(value);