class deneme{
    
    constructor(){
        
        this.xhr = new XMLHttpRequest();
        
    }
    
    
    GET(url, callback){
        
        this.xhr.open("GET", url, true);
        
        this.xhr.onload = function(){
            
            console.log(this);
            if(this.status === 200){
                callback(null, this.responseText);
            }else{
                callback("Herhangi bir hata gerceklesti", null);
            }
            
        }
        
        this.xhr.send();
        
    }
    
}

const albums = new deneme();
albums.GET("https://jsonplaceholder.typicode.com/albums", function(err, responseBurada){
    if(err===null){
        console.log(responseBurada);
    }else{
        console.log(err);
    }
});


//IF ve icindeki this.xhr.status ve this.xhr.responseText yazan kisimlardan xhr kisimlarini kaldirdim. Cunku thisler zaten xhr'i gosteriyor scope olarak.

//Veya kaldirmayip, if kosulumuzun sonuna .bind(this) yazarak this'i denemeyi gosterecek sekilde ayarlayabiliriz.

//Veya onuda yapmayiz this.xhr.onload = den sonra fonksiyonumuzu arrow fonksiyonu olarak yaparsak icindeki thisler deneme objemizi gosterecektir.

//veya url altinda const ile bir dehisken tanimlayip bu degiskeni this'e esitlersek, onload fonksiyonumuz icinde this.xhr yerlerine degiskenimizin adini yazabiliriz.