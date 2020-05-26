//Spread Operatoru

//Bu sekilde yazarsak dizi seklinde cikti alir
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1);
//Bu sekilde yazarsak duz metin gibi yazar
console.log(...array1);


//Veya bu sekilde Destructingde Uygulayabiliriz.
const [a,b, ...array2] = array1;
console.log(a,b); //Boyle sadece 1 ve 2 yi yazar.
console.log(a,b,...array2); //Boyle ise 1 ve 2 ve array2nin 3-4-5-6-7-8-9 duz metin gibi yazilir.



//veya


const diller = ["Turkce", "Almanca", "Ingilizce"];
console.log(diller); //Bu sekilde dizi gibi yazar
console.log(...diller); //Bu sekilde duz

const diller2 = ["Ispanyolca", "Fransizca", ...diller];
console.log(diller2);//Bu sekilde dizi seklinde diller2'nin 2 dili + diller'in 3 dili toplam 5 dil yazar
console.log(...diller2); // Bu sekilde 5 dili duz yazar.





//ORNEK KULLANIM
const numbers = [10, 15, 20, 25];
const [a1,b1,c1,d1] = numbers;
const function1 = (a, b, c, d) => console.log(a+b+c+d);
function1(numbers[0],numbers[1], numbers[2], numbers[3]); //Uzun Yontem

//Spread Operatoruyle kisa yontemi
function1(...numbers);

//Destructing Operatoruyle Kisa Yontemi
// En iyisi tabiki SPREAD
function1(a1, b1, c1, d1)