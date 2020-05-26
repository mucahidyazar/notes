//Normalde this bizim window ekranımızı tanımlayan bir koddur. 
// Fakat altta this functıon a atadıgımız ısme ozellıkler tanımlayan bir kod oluyor.
function employee(){ //Bu bir yapici fonksiyondur. / Constructor
    this.name = "Mustafa";
}

//Eger asagidaki gibi bir deger tanimalr ve new ile yukaridaki fonksiyonu isaret edersek emloyee den bir tane obje olusturmus oluyoruz.
//Ve console log yazdigimizda ise  bu yeni objemizin name degerinin "Mustafa" oldugunu goruruz.
const emp1 = new employee();
console.log(emp1);

//Aslinda yukaridaki this emp1 i gosteriyor anlamina geliyor buda.
//Yukarida ki gibi asagida da emp2 tanimlasak onunda degerleri aynisini gosterirdi.
//Ve bu sekilde kullanmak pek mantikli degil
const emp2 = new employee();
console.log(emp2);



//Fakat asagidaki gibi kullanirsak mantikli bir kullanim yapmis oluruz.
//function workers(name1, age1, salary1){
//    this.name = name1;
//    this.age = age1;
//    this.salary = salary1;
//}
//
//const worker1 = new workers("Mustafa", 25, 5000);
//const worker2 = new workers("Ahmet", 45, 4000);
//console.log(worker1);
//console.log(worker2);
//Bu sekilde kullanirsak her olusturdugumuz obje kendi parantezleri icindeki ozellikleri tasir.



//yada



//function workers(name1, age1, salary1){
//    this.name = name1;
//    this.age = age1;
//    this.salary = salary1;
//    
//    console.log(this); // Yukarida iki tane console log komutu disarida yaziliydi tek fark burada iceride yazili olmasi ve icinde THIS olmasi. Sonuc yine ayni yukariyla.
//}
//
//const worker1 = new workers("Mustafa", 25, 5000);
//const worker2 = new workers("Ahmet", 45, 4000);



//Yada Function ozelligini kullanarak asagidaki gibi yazabiliriz. Console ciktisi duz yazi olarak gelecek.
function workers(name1, age1, salary1){
    this.name = name1;
    this.age = age1;
    this.salary = salary1;
    
    this.showInfos = function(){
        console.log(this.name, this.age, this.salary);
    }
}

const worker1 = new workers("Mustafa", 25, 5000);
const worker2 = new workers("Ahmet", 45, 4000);


worker1.showInfos();