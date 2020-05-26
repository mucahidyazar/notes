//DESTRUCTING aslinda dizi ve objelerimizden veri cekme kolayligi sagliyor.

//Asagidaki ornege bakalim.
let number1, number2;
arr = [100,200,300,400,500];

//Normalde
number1 = arr[0];
number2 = arr[1];
console.log(number2-number1);
//Yukaridaki gibi yaptigimizda number 1 arr nin 0. indexindeki deger number2 de 1. indexindeki degeri aliyor. Bu bizim uzun yontemimiz. Destructing bunu kisaltiyor.

//DESTRUCTING
[number1, number2] = arr;
console.log(number2-number1);
//Koseli paranteze alinip tanimlanan degerleri icine yazarsak ve bunuda dizemize esitlersek yine yukaridaki dizemizden sirasiyla yazildiklari degerleri alirlar.

//Veya tanimlamayida en basinda yapabiliriz.
const [sayi1, sayi2]=arr;
console.log(sayi2-sayi1);




//Objelerden cekerken ise suslu parantez kullaniriz.
const aile ={
    anneyas:50,
    babayas:55,
    cocuk1yas:28,
    cocuk2yas:25,
    cocuk3yas:20
}
// const {anneyas, babayas, cocuk1yas, cocuk2yas, cocuk3yas} = aile;
// console.log(anneyas, babayas, cocuk1yas, cocuk2yas, cocuk3yas);

//Objelerden alacagimiz degeri, obje icinde tanimladigimiz degerlerle ayni kullanmaliyiz.
//Veya cift nokta ile tanimlama yapmaliyiz tekrar asagidaki gibi
const {anneyas:number01, babayas:number02, cocuk1yas:number03, cocuk2yas:number04, cocuk3yas:number05} = aile;
console.log(number01, number02, number03, number04, number05);





//ORNEK-1
const getLangs = () => ["English", "CSS", "Photoshop", "Html"];
const [lang1, lang2, lang3, lang4] = getLangs();
console.log(lang1, lang2, lang3);




//ORNEK-2
const family = {
    mother: "Zeynep",
    father: "Bayram",
    child: "Mucahid"
}
const {mother, father, child} = family;
console.log(mother, father, child);



//ORNEK-3
const personalOne = {
    name : "Mucahid",
    lastname : "Yazar",
    age : 28,
    salary : 5000,
    statue : () => console.log("Suan ISSIZ ve CALISMIYOR")
}
const {name:isim, lastname:soyisim, age:yas, salary:maas, statue:durum} = personalOne;
console.log(isim, soyisim, yas, maas);
durum();