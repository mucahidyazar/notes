class requests{
    
    async getR(url){        
        const resp1 = await fetch(url);
        const resp2 = await resp1.json();
        
        return resp2;        
    }
    
    
    
    async postR(url,data){
        const resp1 = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json"
            }
        });
        const resp2 = await resp1.json();
        
        return resp2;
    }
    
    
    
    async putR(url, data){
        const resp1 = await fetch(url, {
            method:"PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json"
            }
        });
        const resp2 = await resp1.json();
        
        return resp2;
    }
    
    
    
    async delR(url){
        const resp1 = await fetch(url, {
            method: "DEL"
        });
        const resp2 = await resp2.json();
        
        return resp2;
    }
    
}
const requs = new requests();



requs.getR("https://jsonplaceholder.typicode.com/albums")
.then(res => console.log(res))
.catch(cat => console.error(cat));

requs.postR("https://jsonplaceholder.typicode.com/albums", {titleId: 2500025, title:"Mucahid Yazar"})
.then(res => console.log(res))
.catch(rej => console.error(rej));

requs.putR("https://jsonplaceholder.typicode.com/albums/53", {titleId:252525, title:"Mucahid Erzurum Erzurum Mucahid"})
.then(res => console.log(res))
.catch(cat => console.error(cat));

requs.delR("https://jsonplaceholder.typicode.com/albums/61")
.then(res => console.log(res + " DEL request basarili bir sekilde gorevini yerine getirdi"))
.catch(cat => console.error(cat));