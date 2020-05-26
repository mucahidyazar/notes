//MAPler Key ve Value lerden olusur.

//ORNEK
let myMap = new Map(); //Olusturma

const key1 = "Mustafa";
const key2 = {a:10, b:20};
const key3 = () => 3;

// SET = keyleri MAP'e atama
myMap.set(key1, "String Deger");
myMap.set(key2, "Object Literal Deger");
myMap.set(key3, "Function Deger");

// GET = keyleri secme
console.log(myMap.get(key1)); // Bunu yazarsak SET kisminda ayarladigimiz key1'in degeri "String Deger" ciktisini alacagiz.
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);


// MAP icinde kac DEGER veya KEY var bulmak icin
// SIZE kullanilir.
console.log(myMap.size);


// MAP icinde GEZME
const cities = new Map();
cities.set("Anakra", 5);
cities.set("Istanbul", 15);
cities.set("Izmir", 4);

//function'da once VALUE sonra KEY
//icinde once KEY sonra VALUE MAP'in aslindaki gibi
cities.forEach(function(value,key){
    console.log(key, value);
});
//Usteki cikti bize asagiyi verir.
//Anakra 5
//Istanbul 15
//Izmir 4



//forOf ile gezinip Degerleri alma
for(let value of cities){
    console.log(value);
}
//["Anakra", 5] Bu sekilde Array gibi cikti aliriz.

for(let [key, value] of cities){
    console.log(key,value);
}
//Anakra 5
//Istanbul 15
//Izmir 4
//Bu seferde eskisi gibi boyle cikti aliriz.


//Sadece Value veya Keyleri duz metin olarak almak
for(let value of cities.values()){
    console.log(value);
}
for(let key of cities.keys()){
    console.log(key);
}




// ARRAYLER'den MAP OLUSTURMA
const array1 = [["key1", "value1"],["key2","value2"]];
const lastMap = new Map(array1);
console.log(lastMap);

// MAPLER'den ARRAY OLUSTURMA
const array2 = Array.from(cities);
console.log(array2);