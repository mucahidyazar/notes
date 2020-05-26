class requests{
    
    sendPOST(url,data){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(albumEkle => albumEkle.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
            
        })
        
    }
    
}

const sendP = new requests();
sendP.sendPOST("https://jsonplaceholder.typicode.com/albums", {userId:25, title:"Mucahid Yazar"})
.then(datas => console.log(datas))
.catch(error => console.log(error))