//Statik Metodlar
// Bu metodlar bize obje olusturmadan metod olusturmamizi saglar.

// Obje olusturarak Metod
class Matem1{
    cube(x){
        console.log(x*x*x);
    }
}

const cube1 = new Matem1(); //Obje olusturmadan kasit bu
cube1.cube(3);



//Static Metod
//Burada obje olusturmadan bu metodlari static bir sekilde olusturup kullanabiliriz.
class Matem2{
    static kube(x){
        console.log(x*x);
    }
}

Matem2.kube(5);


// Static metodlar ornegim Matem2'deki statik metod Matem2'nin prototype inde gozukmez.
// Fakat obje olusturulan metodda ornegin Matem1 de cube fonksiyonunu prototype'da goruruz.
// Static metodlari new metodunu kullanip yeni obje olusturarak cagiramayiz.
// Fonksiyonlu metoduda Obje ismini kullanip fonksiyon ismini yazarak cagiramayiz.




// Aslinda eskiden bazi Statik metodlarimizi kullandim bazilarini hatirlamak icin yaziyorum
// Object Create metodu
// Math metodlari