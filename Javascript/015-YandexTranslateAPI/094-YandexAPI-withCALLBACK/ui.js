function UI(){
    this.outputWord = document.getElementById("outputWord");
    this.outputimage = document.getElementById("outputImage");
    this.outputLang = document.getElementById("outputLanguage");
}


UI.prototype.addMsgToUI = function(msg){
    this.outputWord.textContent = msg;
}

UI.prototype.changeIL = function(lang){
    this.outputimage.src = `images/${lang.value}.png`;
    this.outputLang.textContent = lang.options[lang.selectedIndex].textContent;
}