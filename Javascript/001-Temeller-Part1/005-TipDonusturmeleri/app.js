let value;


//Veri tiplerini stringe cevirme

//Number
value=123;
console.log(value);
console.log(typeof value);

//String
value=String(123);
console.log(value);
console.log(typeof value);

//Boelan degeri STRING'e cevirme
value=String(true);
console.log(value);
console.log(typeof value);
value=String(false);
console.log(value);
console.log(typeof value);

//Function'i STRING'e cevirme
value = String(function(){console.log()});
console.log(value);
console.log(typeof value);

//Array'leri STRING'e cevirme
value = String([1,2,3,4]);
console.log(value);
console.log(typeof value);

//Yani kisaca hersey STRING'e cevrilebilir.

 
//Veya asagida ki gibi farkli bir yontemlede Stringe cevirebiliriz. toString() yontemi.

value=(10).toString();
console.log(value);
console.log(typeof value);

value=(3.15).toString();
console.log(value);
console.log(typeof value);





//Veri Tiplerini Sayilara Cevirmek
value = Number("123");
console.log(value);
console.log(typeof value);

value = Number(456);
console.log(value);
console.log(typeof value);
//Normal sayilari ayni zaman da parseInt koduylada Number'a cevirebiliriz.
value = parseInt("789");
console.log(value);
console.log(typeof value);

value = Number("3.11");
console.log(value);
console.log(typeof value);
//Ondaliklari sayilari parseFloat koduylada number'a cevirebiliriz.
value = parseFloat("3.12");
console.log(value);
console.log(typeof value);
//NULL degeri 0 demektir.
value = Number(null);
console.log(value);
console.log(typeof value);



/*Number tipine donusturemeyecegimiz verilerde NaN yani Not a Number hatasi alacagiz.Bu kodlar hata verecegi icin PASIF edilmistir.
value = Number(Deneme);
console.log(value);
console.log(typeof value);

value = Number("Deneme");
console.log(value);
console.log(typeof value);

value = Number(undefined);
console.log(value);
console.log(typeof value);

Fonksiyon ve arraylerde sayiya cevrilemezler. Denersek eger NaN hatasi aliriz.*/



//CONST ilede asagidaki gibi tanim yapabiliyoruz. Birisi yazi Birisi sayi olunca ikisini birlestirir ve orayi STRING olarak gorur javascript asagidaki gibi.
const adana = 39 + ".Deneme";
console.log(adana);
console.log(typeof adana);

const adana1 = "30" + 50;
console.log(adana1);
console.log(typeof adana1);
//Burayi NUMBER olarak birlestirmek istiyorsak NUMBER veya toInt'i kullanmamiz gerekiyor.
const adana2 = Number("30") + 50;
console.log(adana2);
console.log(typeof adana2);
//or
const adana3 = parseInt("40") + 50;
console.log(adana3);
console.log(typeof adana3);