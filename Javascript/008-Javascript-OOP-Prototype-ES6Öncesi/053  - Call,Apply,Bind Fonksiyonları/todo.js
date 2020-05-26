// CALL

const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number1: 30,
    number2: 40
}

function deneme(number3, number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

//deneme(100,200);

//Bu sekilde yazarsak this scope olarak windowu gosterdigi icin tanimsiz deger olacak ve sonuc NaN olacak. Fakat call ile obj1 veya obj2 objelerimizi cagirirsak this.number1-2 artik scope olarak obj1-2 objleerini gorecek ve toplama islemi basariyla gerceklesecek. Asagidaki gibi...

deneme.call(obj1, 100, 200);
deneme.call(obj2, 200, 400);


function deneme2(number3, number4, number5){
    console.log(this.number1 + this.number2 + number3 + number4);
}




// APPLY
// Bu metodda ise tek fark objemiz cagrildiktan sonra cagrilan fonksiyon objemizin parametreleri koseli parametreler icine yazilmasidir. Klan islemleri aynidir.
deneme2.apply(obj1,[10,20])





//BIND
//BIND ise bize kopya bir fonksiyon olusturuyor. Ve kullanimida asagidaki sekilde.
function deneme3(number3, number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyDeneme1 = deneme3.bind(obj1);
const copyDeneme2 = deneme3.bind(obj2);

console.log(copyDeneme1(100,50));
console.log(copyDeneme2(20,20));

//180 ciktisini verir.