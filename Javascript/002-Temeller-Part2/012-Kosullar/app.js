// == Esitse

// === Tiplerde, Degerlerde ayni olmali String "2" ve 2 false olmasi icin === isareti ile kontrol edilmesi saglanir.
// if ile sorgularken birisi string birisi numara olursa ikisinide stringe cevirir.

// != Esit degil midir?
// !== 
// > Buyukse
// < Kucukse
// >= Buyuk esittir
// <= Kucuk Esittir





// Mantiksal Baglaclar

//Not Operatoru (!) : Bir degeri false ise true ya, true ise false a cevirir.
console.log(2==2); // Burada sonuc dogruyken
console.log(!(2==2)); // Not operatoru ile burada cikan sonuc false dir.

// And Operatoru && Belirlenen tum hususlarin dogru olmasi gerekiyorki true sonucunu alalim

// Or operatoru || Belirlenen kosullarin sadece birisi dogru olursa true olmasi icin yeterli olur


// IF Eger dogruysa calisir.


// ELSE Ustteki if blogu calismazsa Else calisir. Yani eger deilse anlamina gelir.


// ELSE IF Bununla If'ten sonra yeni ifler tanimlayabiliriz. Ornegin ilk elfle 1 se su islemi yap dedikten sonra else if le 2 ise sunu yap, tekrar yeni elfe if le 3 se sunu yap diye kosullar belirleyebiliriz. En sonda tum degerlere uygunluk yoksa olacak else taniminida yazabilirizz.
/*
const islem = 1;

if(islem===1){
    console.log("Islem 1 basarili");
}
else if(islem===2){
    console.log("Islem 2 basarili"):
}
else if(islem===3){
    console.log("Islem 3 basarili"):
}
else if(islem===4){
    console.log("Islem 4 basarili"):
}
else{
    console.log("Gecersiz Islem");
}
*/


//Ternary Operatoru : Bu operatorle if else olan tek islem barindiran islemleri daha kisa asagidaki gibi yazabiliriz. Soru isaretinden sonra eger dogruysa ne olacagi cift noktadan sonra eger yanlissa ne olacagi yazilir.
const number = 150;
console.log(number === 150 ? "Sayi esit" : "Sayi esit degil");


//Sadece tek islemlerde if else else if komutlarini suslu parantezleri kullanmadan yazabiliriz.