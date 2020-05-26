async function responses(data){
    
    let promise = new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            if(typeof data == "string"){
                resolve(data);
            }else{
                reject("Bu bir string degildir");
            }
        }, 1000);
        
    });
    
    const response = await promise;
    
    return response;
    
}

responses("Mucahid Yazar")
.then(res => console.log(res))
.catch(rej => console.error(rej));

responses(55)
.then(res => console.log(res))
.catch(rej => console.error(rej));





//DOVIZ KURLARINI PROMISE OLARAK ALMAK ASYNC VE AWAIT KULLANARAK
async function getAllCurrency(url){
    const cur1 = await fetch(url);
    const cur2 = await cur1.json();
    
    console.log(cur2);
}
getAllCurrency("https://api.exchangeratesapi.io/latest");


//Veya RETURN yaparak PROMISE dondurup sonrada THEN ve CATCH ile yakalayabiliriz.
async function getAllCurrency2(url){
    const cur3 = await fetch(url);
    const cur4 = await cur3.json();
    
   
    return cur4;
    
}
getAllCurrency2("https://api.exchangeratesapi.io/latest")
.then(resP=>console.log(resP))