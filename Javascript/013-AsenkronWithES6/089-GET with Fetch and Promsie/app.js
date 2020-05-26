//class requests{
//    
//    getRequests(url){
//        return new Promise((resolve, reject)=>{
//            fetch(url)
//                .then(re => re.json())
//                .then(data=>resolve(data))
//                .catch(err => reject(err));
//        });
//    }
//    
//}
//
//const requ = new requests();
//requ.getRequests("https://jsonplaceholder.typicode.com/albums")
//.then(re1 => console.log(re1))
//.catch(re2 => console.error(re2));

class requests{
    
    getRequests(url){
        
        return new Promise((resolve, reject)=>{
            
            fetch(url)
            
                .then(albums=>albums.json())
                .then(data=>resolve(data))
                .catch(error=>reject(error));
            
        })
        
    }
    
}

const requ = new requests();
requ.getRequests("https://jsonplaceholder.typicode.com/albums")
.then(write=>console.log(write))
.catch(error=>console.log(error));