//DOM nedir?
//Document Object Model
//DOM yani html etiketi ve icindekilerinin olusturdugu modeldir.

//Window Object
let value;

//Altta yazan document cagirma modellerinin hepsi aynidir.
//document ile html yapisina erisim saglariz.
value = window.document;
value = this.document;
value = document;


//document.all ile html yapisindaki tum elemanlara, yapialra ulasiriz.
//document.all.lenght ilede html yapisindaki tum yapilarin sayisini aliriz.
value=document.all;
value=document.all.length;

//Ayrica ozel olarak HTMLdeki diger kisimlara asagidaki gibi document all ve [] isaretini kullanarak siralamaya gore erisebiliriz. Mesela body 8'de ona erismek icin [] bu isaretin icine 8 yazmak yeterli olurdu
value = document.all[1];
console.log(value);
value = document.all[2];
console.log(value);

//Bodye asagidaki 2 sekildede ulasabiliriz. Yanliz 8 yazan sayidaki html sayfasina bagli olarak degisebilir.
value = document.all[8];
value = document.body;
console.log(value);

//Digerleri
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.URL;
value = document.characterSet;


//HTMLcollection uzerinde gezinmek icin for dongusunu kullanabiliriz.
const collection = document.all;
for(let x=0; x<collection.length-1; x++){
    console.log(collection[x]);
}


//Yukarida ki islemi forEach ile bu sekilde yapamayiz oncelikle collection'i bir ARRAY'e yani diziye cevirmemiz gerekiyor.
const collection02 = Array.from(document.all);
collection02.forEach(function(x2){
    console.log(x2);
});

