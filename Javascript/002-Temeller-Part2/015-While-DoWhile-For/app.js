//WHILE
let sayi1 = 1;

while(sayi1<10){
    console.log(sayi1);
    sayi1++;
}

//BREAK
//Donguyu direk olarak sonlandirmaya yarar.
//Asagidaki gibi bir kosul olustururuz ve bu kosul saglandiktan sonra break ile dongunun daha erken durmasini saglayabiliriz.
//Mesela asagida dpngu 10 a kadar kontrol edilsin demisiz ama ayriyeten if koyarak eger dongu 5'e esit olursa direk sonlansin diye if ile break vermisiz.
let sayi2 = 1;

while (sayi2<10){
    console.log(sayi2);
    if(sayi2==5){
        break;
    }
    sayi2++;
}


//CONTINUE
//Bu kod ilede dongumuzu direk en basina sarariz. Dongu islemi continue ya gelince altina hicbir islem yapmadan en bastan baslayip calismaya devam eder.
//Bu kodlada asagidaki gibi bir islem yapabiliriz.
let sayi3 = 1;

while(sayi3<20){
    if(sayi3==4 || sayi3==8 || sayi3==12 || sayi3==16){
        sayi3++;
        continue;
    }
    console.log(sayi3);
    sayi3++;
}


//DO WHILE
let sayi4 = 0;
do{
    console.log(sayi4);
    sayi4++;
}
while(sayi4<10);


//DIZI ve WHILE
const dizi1 = ["Ahmet", "Mehmet", "Cengiz", "Muhammet"];
let sayi5 = 0;
while(sayi5<dizi1.length){
    console.log(dizi1[sayi5]);
    sayi5++;
}


//DIZI ve FOR Dongusu
for(let sayi6 = 0; sayi6<dizi1.length; sayi6++){
    console.log(dizi1[sayi6]);
}


//FOR EACH
//Ayni islemleri for each ile daha kisa surede dah az kodla yapabiliyoruz.
//for each dizeleri tek tek geziyor. Asagidaki gibi kullaniyoruz.
//Asagida
//dizi1 e forEach yapip icinde tek tek gezmesini sagliyoruz.
//forEach'e gezinirken yapmasi icin bir fonksiyon tanimliyoruz.
//Fonksiyoruna ForEach gezerken ki oldugu dizini parantez icine ekliyoruz.
//parantez icine ekledigimiz dizi1 consolelog ile yazdiriliyor.
// index ilede siralamalarini yazdiririz.
dizi1.forEach(function(dizi1, index){
    console.log(dizi1, index);
});



//MAP fonksiyonu
const users = [
    {name:"Mucahid", age:27},
    {name:"Talha", age:23},
    {name:"Furkan", age:19}
];

const names = users.map(function(user){
    return user.name;
});
console.log(names);

const ages = users.map(function(user){
    return user.age;
});
console.log(ages);




//LET KEY IN
const users2 = {
    name: "Mucahid",
    lastname: "Yazar",
    age: 27
}

for(let key in users2){
    console.log(key, users2[key]);
}