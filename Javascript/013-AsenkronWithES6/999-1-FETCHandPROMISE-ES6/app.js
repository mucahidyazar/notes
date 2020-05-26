class requests{
    
    getRequest(url){
    
        return new Promise((resolve,reject)=>{

            fetch(url).then(requ=>requ.json())
            .then(data=>resolve(data))
            .catch(error=>reject("Bu bir hatadir"))

        })
    
    }
    
    
    
    postRequest(url, data){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(jdata => jdata.json())
            .then(data => resolve(data))
            .catch(catchD => reject(catchD))
            
        })
        
    }
    
    
    
    putRequest(url,data){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url,{
                method: "PUT",
                body: JSON.stringify(data),
                headers:{
                    "Content-type": "application/json"
                }
            })
            .then(jdata => jdata.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
        
    }
    
    
    
    delRequest(url){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url)
            .then(jdata => jdata.json())
            .then(jdata => resolve(jdata + " DEL Request : basariyla sonuclandirildi."))
            .catch(error => reject(error)) 
        
        
        })
        
    }
    
}

const requ = new requests();
requ.getRequest("https://jsonplaceholder.typicode.com/albums")
.then(res1=>console.log(res1))
.catch(cat1=>console.error(cat1))

requ.postRequest("https://jsonplaceholder.typicode.com/albums", {userId:25, title:"Mucahid Yazar"})
.then(res2=>console.log(res2))
.catch(cat2=>console.error(cat2))

requ.putRequest("https://jsonplaceholder.typicode.com/albums/53", {userId: 252525, title:"Mucahid Mucahid Mucahid"})
.then(res3 => console.log(res3))
.catch(cat3 => console.error(cat3))

requ.delRequest("https://jsonplaceholder.typicode.com/albums/61")
.then(res4 => console.log(res4))
.catch(cat4 => console.log(cat4))