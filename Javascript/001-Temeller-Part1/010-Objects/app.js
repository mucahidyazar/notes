let value;

const programmer = {
    name : "Mucahid Yazar",
    company : "Yazar A.C.",
    department : "Developing",
    email : "mucahidyazar@gmail.com",
    age : 27,
    family : [
    {mothername:"Zeynep Yazar", age:50},
    {fathername:"Bayram Yazar", age:55}
    ],
    adress : {
        city : "Istanbul",
        street : "Ressam Sokak",
        no : 19,
        apartment : 9
    },
    statue : function(){
        console.log("Issiz. Calismiyor.");
    }
}



value = programmer.name;
//or
value = programmer["name"];

value = programmer.age;

value = programmer.family[0].mothername;
value = programmer.family[1].fathername +" "+ programmer.family[1].age;


console.log(value);