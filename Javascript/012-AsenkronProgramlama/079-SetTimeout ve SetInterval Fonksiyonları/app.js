//SetTimeout
//Belli bir sure sonra islemimizi calistirmaya yarar.
const baslat = document.getElementById("baslat");
const durdur = document.getElementById("durdur");
durdur.addEventListener("click", stop);

//function calistir(){
//    setTimeout(function(){
//        console.log("SetTimeout'u butona tikladiktan 1 saniye sonra calisacak sekilde ayarladim");
//    }, 1000);
//}



let valueDegiskeni = 0;
//SetInterval ise belli bir saniye araliklarla belirledigimiz seyi surekli yapmayi saglar.
//Asagida bir degisken tanimlayacagiz ve bu degisken buyona bastiktan sonra yarim saniyede bir artacak sekilde setInterval ile ayarlayacagiz.

    let intBaslat = setInterval(function(){
        valueDegiskeni ++;
        console.log("Sayi = " + valueDegiskeni);
    }, 500);

//Bunu durdurmazsak bu sonsuza kadar gider. istersek buna birde durdurma butonu ekleyebiliriz.
//Durdurmayi clearInterval ile yapabiliriz.


    
function stop(){
    clearInterval(intBaslat);
}