// Eski Kalitimsal Yontem Kullanimi

function Employee(father,mother,child){
    this.fname = father;
    this.mname = mother;
    this.cname = child;
}

Employee.prototype.showInfos = function(){
    console.log("Father name : " + this.fname + " Mother name : " + this.mname + " Child name : " + this.cname);
}

const worker1 = new Employee("David", "Lisa", "NO");

console.log(worker1);
worker1.showInfos();

function emp1(grandfather, grandmother){
    this.gfather = grandfather;
    this.gmother = grandmother;
}

emp1.prototype = Object.create(Employee.prototype);

emp1.prototype.bilgileriGoster = function(){
    console.log("Father name : " + this.fname + " Mother name : " + this.mname + " Child name : " + this.cname + " Grandfather name : " + this.gfather + " Grandmother name : " + this.gmother);
}

const em = new emp1("Aslan", "Asli", "Murat", "Selcuk", "Halime");
console.log(em);
em.bilgileriGoster();










// Yeni Yontem
class Person{ //Bu tur basliklara SuperClass BaseClass deniliyor.
    constructor(names, ages){
        this.name = names;
        this.age = ages;
    }
    sInfos (){
        console.log("Name : " + this.name + " Age : " + this.age);        
    }
}

// Hemen alt satirdaki kod aslinda Object Create ile oluisturulan kodun aynisi.
// Yani Employe ile extends yaptigimizda Person daki metodlarimizi miras almaya calisacagiz
// Yani extends yazdiktan sonra sectigimiz class imizi prototype imiz yapacagiz.
// Yani Person Employe'nin prototype i olacak.
class Employe extends Person {
//Ustteki tur basliklara DerivedClass Subclass ChildClass deniliyor
    constructor(name1,age1,salary1){
//        this.name = name1;
//        this.age = age1;
        // Yukaridaki 2 metodu eski yontemle call ile cagirdigimzi gibi buradada super ile Persondan yani Prototype imizdan cagirabiliriz.
        super(name1,age1);
        this.salary = salary1;
    }
    sInfos(){ //Overwriting = Yani usttede bu fonksiyon var eger burada olmasaydi prototype i Person oldugu icin oraya gidip bu fonksiyonu oradan alacakti. Burada oldugu icin overwriting yapiyor.
        console.log("Name : " + this.name1 + " Age : " + this.age1 + " Salary : " + this.salary);        
    }
}

const em2 = new Employe("Deneme1", 25, 25);
console.log(em2);