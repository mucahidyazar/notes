const translateForm = document.getElementById("translate-form");
const trns = new TRNS();
const ui = new UI();
const text = document.getElementById("word");
const lang = document.getElementById("language");

translate();

function translate(){
    
    translateForm.addEventListener("submit", translateStart);
    
    lang.onchange = function(){
        ui.changeIL(lang);
    }
    
}


function translateStart(event){
    
    trns.changeValues(text, lang);
    
    trns.translated(function(err, msg){
        if(err==null){
            console.log(msg);
            ui.addMsgToUI(msg);
            
        }else{
            console.error(err);
        }
    });
    
    event.preventDefault();
    
}