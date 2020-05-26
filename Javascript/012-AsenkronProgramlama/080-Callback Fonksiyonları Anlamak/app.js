// Aslinda callback fonksiyonlarimiz baska bir fonksiyon fakat biz bunlari baska fonksiyonlara parametre olarak gonderiyoruz.


//ASENKRON CALLBACK ISLEMLERI
//Butona tikladigimiz anda once proccess1 sonra proccess2 fonksiyonlarimiz calisacak.

document.getElementById("btn").addEventListener("click", function(){
    //Aslinda burada bir call back islemimiz var. Click eventi oldugumuzda fonksiyonumuzu cagiriyoruz yani call liyoruz bu bir callback eventidir.
    
    setTimeout(function proccess1(){
        //Aslidna settimeout islemimiz icinde ki functionumuzda bir callback islemidir.
        console.log("Proccess 1 : Bu setTimeout islemidir. Ayni zamanda setTimeout islemi icindeki function ise bir callback opsiyonu fonksiyonudur");
    }, 1000);
    
    proccess2();
    function proccess2(){
        console.log("Proccess 2 : Bu bir asenkron islemdir. Bu yuzden once Proccess 2 yi goreceksiniz cunku proccess 1, 1 saniye sonra baslayacak.");
    }
});


//SENKRON CALLBACK islemleri
// Senkron islemlerde ise oncelikle bir islem yapilir ve biter daha sonra ikinci islem baslar. Asenkronda herkes kendi kosuluna baglidir ama senkronda herkes sirasiyla hareket eder. Ornegin asagida proccess 4, proccess 3'ten once hareket edemez.

document.getElementById("proccesses").addEventListener("click", proccesses);

function proccesses(){
    function proccess3(callback){
        setTimeout(function(){
            console.log("Ben Proccess3, 2 saniye sonra yazilacagim fakat Proccess4 2 saniyeden sonra 4 saniye daha gectikten sonra yazilacak. Cunku bu bir SENKRON islemdir.");
            callback();
        }, 2000);
    }
    
    function proccess4(){
        setTimeout(function(){
            console.log("Proccess4, Proccess3 2 saniye sonra basladiktan sonra, 4 sani daha bekleyip calismistir.");
        }, 4000);
        
    }
    
    proccess3(proccess4);
}




//ORNEK UYGULAMA
let array = ["English", "Spanish", "French"];
const dilEkle = document.getElementById("dilEkle");
dilEkle.addEventListener("click", dilleriYazdir);

function dilleriYazdir(){
    setTimeout(function(){
        function dilleriYazdira(callback){

            array.forEach(function(dil){
                console.log(dil);

            });
            callback();
        }

        function dilPush(){
            array.push("Arabic");
        }

        dilleriYazdira(dilPush);
    }, 2000);
}