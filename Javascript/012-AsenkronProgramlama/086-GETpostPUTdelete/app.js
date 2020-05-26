class AJAXkomutlar{
    
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    
    GET(url, callback){        
        this.xhr.open("GET", url, true);
        this.xhr.onload = function(){
            if(this.status==200){
                callback(null, this.responseText);
            }else{
                callback("GET request : Alirken bir hata ile karsilasildi.", null);
            }
        }
        this.xhr.send();
    }
    
    POST(url, data, callback){
        this.xhr.open("POST", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = function(){
            if(this.xhr.status==201){
                callback(null, this.xhr.responseText);
            }else{
                callback("POST request : Gonderimde bir hata ile karsilasti.", null);
            }
        }.bind(this)
        this.xhr.send(JSON.stringify(data));
    }
    
    PUT(url, data, callback){
        this.xhr.open("PUT", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () =>{
            if(this.xhr.status==200){
                callback(null, this.xhr.responseText);
            }else{
                callback("PUT request : Guncellemede bir hata olustu.", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    
    DELETE(url, callback){
        this.xhr.open("DELETE", url, true);
        this.onload = function(){
            const xHr = this.xhr;
            if(xhr.status==200){
                callback(null, xHr.responseText);
            }else{
                callback("Delete request : Silme isleminde bir hata ile karsilasildi.", null);
            }
        }
        this.xhr.send();
    }
    
}

const requests = new AJAXkomutlar();
requests.GET("https://jsonplaceholder.typicode.com/albums", function(Error, Command){
    if(Error==null){
        console.log(Command);
    }else{
        console.log(Error);
    }
});

requests.POST("https://jsonplaceholder.typicode.com/albums", {userId:25, title:"Mucahid Yazar"}, function(Error, Command){
    if(Error==null){
        console.log(Command);
    }else{
        console.log(Error);
    }
});

requests.PUT("https://jsonplaceholder.typicode.com/albums/53", {userId:2525, title:"Mucahid Yazar"}, function(Error, Command){
    if(Error==null){
        console.log(Command);
    }else{
        console.log(Error);
    }
});

requests.DELETE("https://jsonplaceholder.typicode.com/albums/52", function(Error, Command){
    if(Error==null){
        console.log(Command + " DELETE islemi basariyla gerceklesti");
    }else{
        console.log(Error);
    }
});