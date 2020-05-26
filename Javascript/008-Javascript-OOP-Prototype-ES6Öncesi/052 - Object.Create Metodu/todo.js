// Object Create metodu bir obje olustururken prototipini bir baska objeden olusturmamizi sagliyor.

const denemeObje = {
    text1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}



//Prototypelari tekrar anlatacak olursak buradaki objemiz Prototype olarak Javascript gelistiricilerinin tanimladigi ana Object prototype'ini referans aliyor.

//Ve simdi biz yeni bir object create ederek bu ikisini protoype goren bir obje yaratacagiz object create metodu ile.

const emp = Object.create(denemeObje);

//Bu sekilde olusturdugumuzda emp objemiz protoyype olarak obje mizi protoype olarak goruyor ve obje objemizde Object objesini protoype olarak goruyor. Ayni zamanda emp objemizde Object ana objemizden protoype olarak faydalanabiuliyor.

// Peki nerede kullanilacak ? Object Create bizim kalitim islemlerimizdfe kullanilacak.

//emp objemize asagidaki gibi deger tanimlayabiliriz.

emp.name = "Mucahid";
emp.age = 30;


console.log(emp);

