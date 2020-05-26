let value;

//Simdiki zamani almak icin asagidaki parantez icindeki kisim bos birakilirsa Javscript bize simdiki zamani atar
const now = new Date();

//Zamana tanimlama Cesitleri
//En sik Kullanilan - Ay Gun Yil
const date1 = new Date("10-31-1991 09:15:30");

const date2 = new Date("October 31 1991");

const date3 = new Date("10/31/1991");


//Tarihin ayin hangi gunu / yuzyilin kacinci yili / ve haftanin kacinci gunu oldugunu secme/bulma
value = date1.getMonth();
value = date1.getYear();
value = date1.getDate();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();


//Asagidaki sekildede istedigimiz degerleri tarihlere atayabilir yada tarihleri degistirebiliriz. 0 ilk olarak kabul edilir.
value = date1.setMonth(0); //Ocak
value = date1.setFullYear(1991);
value = date1.setDate(2); //Carsamba
value = date1.setHours(10);
value = date1.setMinutes(40);
value = date1.setSeconds(50);
value = date1.setMilliseconds(55);

value = date1;

console.log(value);