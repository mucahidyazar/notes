class putDelete{
    
    putRequest(url, data){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url, {
            
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }

            })
            .then(guncelleme=>guncelleme.json())
            .then(guncel=>resolve(guncel))
            .catch(error=>reject(error))

        });
        
        
    }
    
    
    
    delRequest(url){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url, {
                method: "DELETE"
            }).then(del => resolve(del + " Silme islemi basarili"))
            .catch(err => reject(err + " Silme islemi basarisiz"))
            
        });
        
    }
    
}

const put = new putDelete();
put.putRequest("https://jsonplaceholder.typicode.com/albums/10", {
    userId: 2525, title:"Mucahid Mucahid Mucahid YAZAR"
})
.then(resol=>console.log(resol))
.catch(rejec=>console.log(rejec))

put.delRequest("https://jsonplaceholder.typicode.com/albums/11")
.then(reso=>console.log(reso))
.catch(reje=>console.log(reje))