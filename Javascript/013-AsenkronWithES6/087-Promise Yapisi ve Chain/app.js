function promiseYapisi(data){
    
    return new Promise(function(resolve,reject){
        
        setTimeout(function(){
            if(typeof data==="string"){
                resolve(data);
            }else{
                //new Error() yapisini kullanirsak sanki javascriptte hata aliyormusuz gibi cikti aliriz. Ekstra altta console.log yerine rejectin gonderdigi yeride console.error yaparsak errorumuz kirmizi ve dikkat cekici sekilde console da gozukur.
                reject(new Error("data string olmadigindan islem hatali sekilde gerceklesti."));
            }
        }, 2000);
        
    });
    
}

// Ust satirda olumlu olmasi halinde resolve ile, olumsuz olmasi halinde reject ile gonderilen deger alt satirda  response un yerine gececek.
// Olumlu Promiseleri yakalamak icin then,
// Olumsuz Promiseleri yakalamak icin catch,
promiseYapisi(22).then(function(responseDegeri){
    console.log("Gelen deger : " + responseDegeri);
}).catch(function(rejectDegeri){
    console.error(rejectDegeri);
});


//Arrow Fucntionlarla yukaridaki yapinin yazilmis hali
promiseYapisi(22)
    .then(responseDegeri => console.log("Gelen deger : " + responseDegeri))
    .catch(rejectDegeri => console.error(rejectDegeri));



// Promise Chain yapimizda 1 den fazla(Ornek 5-10 tane) .THEN yapisi kurabilir ve olumlu sonuclar alabiliriz. Fakat olumsuzlar icin sadece 1 tane .CATCH yapisi kullanilir. 

//Altta 2 yapili bir PROMISE CHAIN kuracagim.

function ikiReturnPromise(data2){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof data2 === "number"){
                resolve(data2+2);
            }else{
                reject(console.error("Hatali"));
            }
        }, 3000);
    });
}

ikiReturnPromise(15)
    .then(responseDegeri => {
    console.log(responseDegeri);
    return responseDegeri + 2;
})
    .then(responseDegeri2 => console.log(responseDegeri2))
    .catch(rejectDegeri => console.log(rejectDegeri));





//Altta 3 fonksiyonlu
function threeReturnPromises(data3){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(data3);
            if(typeof data3=="number"){
                resolve(data3+2);
            }else{
                reject(console.error("Hatali"));
            }
        }, 4000);
    });
}

threeReturnPromises(50)
    .then(resolveDegeri => {console.log(resolveDegeri); return resolveDegeri+5;})
    .then(resolveDegeri2 => {console.log(resolveDegeri2); return resolveDegeri2+20;})
    .then(resolveDegeri3 => console.log(resolveDegeri3))
    .catch(rejectDegeri => console.log(rejectDegeri));