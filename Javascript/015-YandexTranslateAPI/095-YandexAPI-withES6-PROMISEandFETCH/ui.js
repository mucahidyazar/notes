class UI{
    
    constructor(){
        this.outputWord = document.getElementById("outputWord");
        this.outputImage = document.getElementById("outputImage");
        this.outputLanguage = document.getElementById("outputLanguage");
    }
    
    static writeOutputWord(translatedWord){
        outputWord.textContent = translatedWord.text[0];
    }
    
    static changes(langs){
        outputImage.src = `images/${langs.options[langs.selectedIndex].value}.png`;
        outputLanguage.textContent = 
        langs.options[langs.selectedIndex].textContent;
    }
}