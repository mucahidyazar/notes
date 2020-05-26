// Kalitim - Inheritance
// Yani bir objenin baska bir objeden ozelliklerini alma islemine kalitim yani Inheritance diyoruz. 

function Person(name, age){
    this.name = name;
    this.age = age;
}



Person.prototype.bilgileriGoster = function () {
    console.log("Name : " + this.name + " Age : " + this.age);
}


function calisan(name, age, salary){
//    this.name = name;
//    this.age = age;
    Person.call(this, name, age) //Buradaki this Calisan oluyor ve name age ise Person'un degerleri oluyor ve oradan cagiriliyor.
    this.salary = salary;
}


calisan.prototype = Object.create(Person.prototype);

//Asagidaki degerler olmasina ragmen bilgilerigoster fonksiyonu calisan objesinin prototype inda bu fonksiyonu bulamayacagi icin onun ustundeki person prototype ina gidecek ve orada buldugu fonksiyonu yazdiracak. Ve sonuc olarak biz sadece Hakan ve 35 i gorecegiz.
const cal = new calisan("Hakan", 35, 5000);

//Fakat biz kendimiz bir fonksiyon olusturursak once kendi prototypeimizi kontrol edeceginden Persona hic ugramayacak ve boylelikle ucunude yazdirabiliriz. Bu isleme OVERRITING deniliyor.

calisan.prototype.bilgileriGoster = function(){
    console.log("Name : " + this.name + " Age : " + this.age + " Salary : " + this.salary);
}

cal.bilgileriGoster(); //Burasi artik once kendi icindeki fonksiyonlari kontrol edeceginden ust prototype i hic kontrol etmez.

function temizlik(company, birthyear){
    console.log(this.name, this.age, this.salary, company, birthyear);
}

temizlik.call(calisan, "Anka", 1991);