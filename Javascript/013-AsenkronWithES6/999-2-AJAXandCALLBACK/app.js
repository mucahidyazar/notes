class requests{
    
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    
    getRequest(url, callback){        
        this.xhr.open("GET", url, true);
        this.xhr.onload = function(){
            if(this.status == 200){
                callback(null, this.responseText);
            }else{
                callback("Bu bir hatadir", null);
            }
        }
        this.xhr.send();        
    }
    
    
    
    postRequest(url, data, callback){
        this.xhr.open("POST", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = function(){
            if(this.xhr.status==201){
                callback(null, this.xhr.responseText);
            }else{
                callback("Bu bir hatadir", null);
            }
        }.bind(this)
        this.xhr.send(JSON.stringify(data));
    }
    
    
    
    putRequest(url, data, callback){
        this.xhr.open("PUT", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => {
            if(this.xhr.status==200){
                callback(null, this.xhr.responseText)
            }else{
                callback("Bu bir hatadir", null)
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    
    
    
    delRequest(url, callback){
        this.xhr.open("DEL", url, true);
        this.xhr.onload = function(){
            if(this.status==200){
                callback(null, this.responseText);
            }else{
                callback("Bu bir hatadir", null);
            }
        }
        this.xhr.send();
    }
    
}


const requs = new requests();
requs.getRequest("https://jsonplaceholder.typicode.com/albums", function(err, message){
    if(err==null){
        console.log(message);
    }else{
        console.error(err);
    }
});

requs.postRequest("https://jsonplaceholder.typicode.com/albums", {userId:25, title:"Mucahid Yazar"}, function(Err, Msg){
    if(Err==null){
        console.log(Msg);
    }else{
        console.error(Err);
    }
});

requs.putRequest("https://jsonplaceholder.typicode.com/albums/61", {userId:25555, title:"Talha Talha Talha"}, function(err,msg){
    if(err==null){
        console.log(msg);
    }else{
        console.error(err);
    }
})

requs.delRequest("https://jsonplaceholder.typicode.com/albums/52", function(err, msg){
    if(err==null){
        console.log(msg + " Del Request basariyla gerceklestirildi");
    }else{
        console.error(err);
    }
})