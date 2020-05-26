//PRIMITIVE VERI TIPLERI
// Burada esıtlık sorgulanırken degerler sorgulanıyor kıyaslanıyor.
//let sayi1 = 0; Reference veri tipi
//ESITTIR
//let sayi2 = 0;


//REFERENCE VERI TIPLERI
// Burada esıtlık sorgulanırken bellektekı adresler kıyaslanıyor. Reference veri tipleri hepsi bellekte ayri yeri gosterirler.
//cont array1 = {"adana", "istanbul"};
//ESIT DEGILDIR
// cont array2 = {"adana", "istanbul"};


//MAP ORNEGI
const map01 = new Map();
map01.set("Ankara", 5);
map01.set("Istanbul", 15);
map01.set("Izmir", 4);



//Bu sekilde map01 MAP imin key degeri Ankara olan objemin icinden Value'sini almak istedigimde, parantez icinde altta tanimaldigim "Ankara" ile map01 in keylerini karsilastiriyor ve ayni olanin value sini console a yazdiriyor.
console.log(map01.get("Ankara"));

//map01.set([1,2,3], 50);
//Ama ustteki degeri ise console ile asagidaki gibi sorguladigimizda reference veri tipleri (yani bu [1,2,3]) oldugu icin eslestirme yapilamaz. 
//console.log(map01([1,2,3]));

//Ama asagidaki gibi deger atayarak reference veritipimizi primitive yaparak eslestirmeleri gerceklestirebiliriz.
const key01 = [1,2,3];
map01.set(key01, 50);
console.log(map01.get(key01));

