//Ecmascript 6 siniflarina literaturde Syntactic Sugar deniliyor.

//Eski Sinif ve Obje olusturma yontemi
function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.denemeFonk1 = function(){
    console.log("Name : " + this.name + " Age : " + this.age + " Salary : " + this.salary);
}

const newEmployee = new Employee("Mucahid", 27, 2500);

console.log(newEmployee);
newEmployee.denemeFonk1();





//Yeni Sinif ve Obje olusturma yontemi
class Workers{
    constructor(workername, workerage, workersalary){
        this.name = workername;
        this.age = workerage;
        this.salary = workersalary;
    }
    bilgileriGoster(){
        console.log("Name : " + this.name + " Age : " + this.age + " Salary : " + this.salary);
    }
}

const worker1 = new Workers("Ahmet", 20, 5000);
console.log(worker1);
worker1.bilgileriGoster();