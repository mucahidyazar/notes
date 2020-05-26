function deneme(name, age){
    if(typeof name === "undefined") name="Tanimlanamayan bilgi";
    if(typeof age === "undefined") age="Tanimlanamayan bilgi";
    console.log(`Name : ${name}, Age : ${age}`);
}

deneme("Mucahid", 27);


//RETURN
//Fonksiyonlarda hesapladigimiz degerleri disari cikarmamiza yariyor.
//Fonksiyonlarda hesaplanan degerler return haric baska hicbir turlu disari cikartilip kullanilamazlar. Bunun icin return e ihtiyacimiz vardir.
// Return fonksiyonlari sonlandirir ayni zamanda. Altina yazilan hicbir kod gecerli degildir.

function sayi1(x){
    return x*x;
}

function sayi2(x){
    return x*x*x;
}

console.log(sayi2(sayi1(2)));



    
    
function hello(){
    return "Hello";
}

console.log(hello());



    
//Function Expression : Const ile tanimlama yapildiktan sonra fonksiyon tanimlanan durumlardir.
const hello2 = function(x,y){
    console.log(`Name : ${x}, Lastname : ${y}`);
}

hello2("Mucahid", "Yazar");


//Immediately Invoked Function Expression (IIFE)
//Turkcesi = Tanimlandigi yerde calisan fonksiyonlar
//En alttaki Murat kismi fonksiyon name kismina yazilicak calistirildiginda.
(function(name){
    console.log("Merhaba : " + name);
})("Murat");





//Tekrar

const database = {
    host : "localhost",
    get : function(){
        console.log("Elde edildi");
    },
    update: function(id){
        console.log(`${id} numarali id guncellendi`);
    },
    delete: function(id){
        console.log(`${id} numarali id silindi`);
    }
}

console.log(database.host);
database.get();
database.update(25);
database.delete(16);