class denemeObje{
    
    constructor(){
        
        this.xhr = new XMLHttpRequest();
        
    }
    
    
    GET(url, callback){
        
        this.xhr.open("GET", url, true);
        
        this.xhr.onload = function(){
            
            if(this.status == 200){
                callback(null, this.responseText);
            }else{
                callback("Bir hata ile karsilasildi.", null);
            }
        }
        
        this.xhr.send();
        
    }
    
}


const albums = new denemeObje();
albums.GET("https://jsonplaceholder.typicode.com/albums", function(err, degerler){
    if(err===null){
        console.log(degerler);
    }else{
        console.log(err);
    }
});