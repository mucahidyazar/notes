function TRNS(){
    
    this.xhr = new XMLHttpRequest();
    this.api = "trnsl.1.1.20191019T073646Z.fc8063037dbe0dd2.297d7f7c3fb851d6e3b257fb8c6f013677a4956e";
    
}


TRNS.prototype.changeValues = function(text, lang){
    this.text = text.value;
    this.lang = lang.value;
}


TRNS.prototype.translated = function(callback){
    
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.api}&text=${this.text}&lang=${this.lang}`;
    this.xhr.open("GET", endpoint, true);
    
    this.xhr.onload = function(){
        if(this.status==200){
            callback(null, JSON.parse(this.responseText).text[0]);
        }else{
            callback("Hata", null);
        }
    }
    
    this.xhr.send();
    
}