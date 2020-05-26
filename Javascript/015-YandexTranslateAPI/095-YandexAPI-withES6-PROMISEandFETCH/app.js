const translateForm = document.getElementById("translate-form");
const word = document.querySelector("#word");
const lang = document.querySelector("#language");

addEventListeners();

function addEventListeners(){
    
    translateForm.addEventListener("submit", translate);
    lang.onchange = function(){
        UI.changes(lang);
    }
    
}





function translate(event){
    
    TR.translate(word, lang)
    .then(res => UI.writeOutputWord(res))
    .catch(rej => console.error(rej));
    
    event.preventDefault();
}