// Object Create metodu bir obje olustururken prototipini bir baska objeden olusturmamizi sagliyor.

function denemePerson(){
    
}

denemePerson.prototype.test1 = function(){
    console.log("Test 1");
}

denemePerson.prototype.test2 = function(){
    console.log("Test 2");
}



function denemeEmployee(name,age){
    this.name = "Mucahid";
    this.age = 30;
}



denemeEmployee.prototype = Object.create(denemePerson.prototype);

const denemeEMP = new denemeEmployee("Mucahid", 30);

console.log(denemeEMP);

