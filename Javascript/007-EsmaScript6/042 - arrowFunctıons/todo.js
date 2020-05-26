//Esma Script 6 ile function lari daha kisa yazabiliriz

//Ornek asagidaki fonksiyon ilk olarak normal daha sonra Esmasvript ile yazilacak.
const deneme1 = function(){
    console.log("Merhaba");
}
deneme1();

//Yada Asagidaki gibi cagirabiliriz Arrow functionslar ile
const deneme2 = () => {
    console.log("Mucahid");
}
deneme2();

//Yada iki paremetrili olarak asagidaki gibi Arrow functionslar kullanilabilir
const deneme3 = (parametre1, parametre2) => {
    console.log("Merhaba", parametre1, parametre2);
}
deneme3("Mucahid", "Yazar");

//Eger fonksiyonumuz tek parametre alacaksa Parametre parantezinide yazmaya gerek kalmiyor.
const deneme4 = parametre1 =>{
    console.log("Selam", parametre1);
}
deneme4("Mucahid");

//Eger fonsiyonumuz tek bir islem yapiyorsa suslu parantezlerimizide yazmaya gerek kalmiyor.
const deneme5 = parametre1 => console.log("Nasilsin", parametre1); 
deneme5("Mucahid");

//Eger asagidaki gibi bir return donduruyorsak
const cube = function(x){
    return x*x*x;
}
console.log(cube(4));
//Bu return'ude tek islem oldugu icin tek satirda yazabilir ve returnude tek satir isleminde yazmayabiliriz.
const kare = x => x*x;
console.log(kare(5));