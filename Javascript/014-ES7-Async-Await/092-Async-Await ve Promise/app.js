// ASYNC = bize return new Promise yapisini tek kelimeyle sagliyor. ORnek olarak asagidaki 2 tapida aslinda birbirinin aynisi ve sonuclar birebir ayni.

function pro(data){
    return new Promise((resolve, reject)=>{
        if(typeof data == "number"){
            resolve(data);
        }else{
            reject(console.log("Hata"));
        }
    });
}
console.log(pro(55));


async function pro2(data2){
    if(typeof data2=="number"){
        return data2;
    }else{
        return console.log("Hata");
    }
}
console.log(pro2(68));


// AWAIT = Await asagida 2 saniye bekliyor ve resolve'u aliyor. Daha sonra console loga isliyor ve pesinden gelen diger console.loga oyle islemesine izin veriyor.
// AWAIT sadece ASYNC icinde kullanilabilir!!!

async function pro3(data3){
    
    let promise = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Bu bir degerdir")
        }, 2000);
    });
    
    let response = await promise;
    
    console.log(response);
    console.log("Naber");
}
pro3("Amerika");



// response umuzu THEN ilede yakalayabiliriz. RETURN sart tabi.
async function pro4(data4){
    
    let promise = new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Bu bir degerdir")
        }, 2000);
    });
    
    let response = await promise;
    
    return response;
}
pro3("Amerika").then(res=>console.log(res));