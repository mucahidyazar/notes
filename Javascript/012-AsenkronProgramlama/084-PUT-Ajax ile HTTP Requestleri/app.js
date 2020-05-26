class Obje{
    
    constructor(){
        
        this.xhr = new XMLHttpRequest();
        
    }
    
    
    
    GET(url, callback){
        
        this.xhr.open("GET", url, true);
        
        this.xhr.onload = function(){
            
            if(this.status == 200){
                callback(null, this.responseText);
            }else{
                callback("GET request : Bir hata ile karsilasildi");
            }
            
        }
        
        this.xhr.send();
        
    }
    
    
    
    
    POST(url, data, callback){
        
        this.xhr.open("POST", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        
        this.xhr.onload = function(){
            if(this.status==201){
                callback(null, this.responseText);
            }else{
                callback("POST request : Bir hata ile karsilasildi.");
            }
        }
        
        this.xhr.send(JSON.stringify(data));
        
    }
    
    
    
    PUT(url, data, callback){
        this.xhr.open("PUT", url, true);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = function(){
            if(this.status==200){
                callback(null, this.responseText);
            }else{
                callback("PUT request : Guncellemesinde bir hata ile karsilasildi.", null);
            }
        }
        
        
        this.xhr.send(JSON.stringify(data));
    }
    
}


const albums = new Obje();
albums.GET("https://jsonplaceholder.typicode.com/albums", function(error, albumler){
    if(error==null){
        console.log(albumler);
    }else{
        console.log(error);
    }
});

albums.POST("https://jsonplaceholder.typicode.com/albums", {userId:15, title:"Deneme adana eklendi"}, function(Error, Deger){
    if(Error==null){
        console.log(Deger);
    }else{
        console.log(Error);
    }
});

albums.PUT("https://jsonplaceholder.typicode.com/albums/10", {userId:25, title:"Mucahid Yazar"}, function(Error, Guncelleme){
    if(Error==null){
        console.log(Guncelleme);
    }else{
        console.log(Error);
    }
});