//function Employee(name, age){
//    this.name = name;
//    this.age = age;
//    this.showInfos = function(){
//        console.log("Name : " + this.name + "Age : " + this.age);
//    }
//}
//
//const emp1 = new Employee("Mustafa", 30);
//console.log(emp1);


function shops(shopname,workers){
    this.name = shopname;
    this.workers = workers;
    this.fonksiyon1 = function(){
        console.log(shopname + " adli bu market " + workers + "kadar calisana sahiptir.");
    }
}

console.log(shops);



const market1 = new shops("Mopas", 5050);
console.log(market1);
market1.fonksiyon1();

const market2 = new shops("Gokkusagi", 950);
console.log(market2);
market2.fonksiyon1();

//Bu sekilde shops isimli objemizi referans alarak yuzlerce satir kod yazmaktan kurtuluruk ve bir tane referans alinan objemizle yuzlerce satir kodu rahatlikla yazabiliriz. Prototype dedigimiz olay budur.
// Yani market1 ve market2 nin prototype nesnesi shops's dur. bu yuzden new shops yaziyoruz ve buda onlarin prototype o oldugunu soyluyor bize. Aslinda shops unda prototype i vardir. O da javascript gelistiricilerinin bizlere sunduklaridir.

// Hemde bellek bu sekilde gereksiz yere isgal edilmemis oluyor.



function banks(bankname,cashmachines){
    this.name = bankname;
    this.workers = cashmachines;
}
//Asagidaki sekildede banks objemizin prototype'ne banksinformation fonksiyonu atadik.
//Objemizin ismi olmadigi icin object olarak gozukecek
//Onun prototype ida Ana Object dosyasi olacak.
banks.prototype.banksinformation = function(){
    console.log(this.name + " adli bankanin " + this.workers + " adet bankamatik cihazi bulunmaktadir.");
}
const bank1 = new banks("Garanti", 250);
const bank2 = new banks("Ziraat", 500);

bank1.banksinformation();
bank2.banksinformation();
console.log(bank1);
console.log(bank2);
console.log(banks);
