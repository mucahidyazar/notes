let sonuc;
const firstname = "Mucahid";
const lastname = "Yazar";
const langs = "CSS, Html, Javascript, Bootstrap";

//Birlestirme
sonuc = firstname + " " + lastname;
sonuc = firstname + " Yazar";

//Birimin uzunlugu / Kelimenin Uzunlugu
sonuc = firstname.length;

//Concat ile yanina parantez acip STRING ekleme
sonuc = firstname.concat(" ", lastname, " ", "Erzurum");

//Sirasiyla, Kucuk ve Buyuk harfe cevirmek
sonuc = firstname.toLowerCase();
sonuc = lastname.toUpperCase();

//Degiskenin icindeki herhangi bir dizindeki degeri alma. Ucuncu Dorduncu harfi gibi. Ilk deger 1 degil 0 olarak tanimlanir.
sonuc = firstname[0];
sonuc = firstname[3];
sonuc = firstname[1+3]; //(4) demek bir nevi
sonuc = firstname[firstname.length -1] //Son elemani bu sekildede secebiliriz. Stringimizin boyutunu bilmedigimiz zamanlarda bu yontemi kullaniriz genelde.

//Char At: Yukaridaki ile ayni method'dur.
sonuc = firstname.charAt(0);
sonuc = firstname.charAt(3);
sonuc = firstname.charAt(1+3);
sonuc = firstname.charAt(firstname.length-1);

//Icindeki karakterin hangi kacinci sirada oldugunu gostermek. Yoksa -1 yazar.
sonuc = firstname.indexOf("l"); //-1 yazacak cunku Mucahidde l yok.
sonuc = firstname.indexOf("u"); //Buyuk Kucuk harf duyarliligi vardir.
sonuc = firstname.indexOf("d");

// Split : Bu methodla yukaridaki  langs de yer alan her bir elemanimizi virgul referans alinarak bolunecek ve her birisi bir array'e yerlestirilecek.
sonuc = langs.split(",");

//Replace : Bununlada langs'de yer alan kelimelerde degisiklik yapabilecegiz. Ilkine degistirmek istedigimizi sonra virgul koyup neyle degismesini istedigimizi yazacagiz.
sonuc = langs.replace("CSS", "Phyton");

//Includes : Bu metodlada bir degisken icinde aradiginiz bir deger varmi onu sorgulayabilir ve true yada false seklinde bir donus alabilirsiniz.
//Tek bir harfde kelimede arayabiliriz.
sonuc = langs.includes("CSS");
sonuc = langs.includes("C");
sonuc = langs.includes("Z");


console.log(sonuc);