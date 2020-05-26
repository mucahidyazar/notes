class TR{
    
    constructor(){
        
        
        
    }
    
    static translate(word, lang){
        this.api = "trnsl.1.1.20191019T073646Z.fc8063037dbe0dd2.297d7f7c3fb851d6e3b257fb8c6f013677a4956e";
        const link = `https://translate.yandex.net/api/v1.5/tr.json/translate
?key=${this.api}&text=${word.value}&lang=${lang.options[lang.selectedIndex].value}`
        return new Promise((resolve, reject)=>{
            fetch(link)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(rej => reject(rej));            
        });
    }    
}