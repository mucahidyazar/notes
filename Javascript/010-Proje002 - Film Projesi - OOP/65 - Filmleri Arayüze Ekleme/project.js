const form = document.getElementById("film-form");
const title = document.getElementById("title");
const director = document.getElementById("director");
const url = document.querySelector("#url");

const ui = new UI();

eventListeners();

function eventListeners(event){
    form.addEventListener("submit", eventSubmit);
}

function eventSubmit(event){
    const value1 = title.value;
    const value2 = director.value;
    const value3 = url.value;
    if(value1===""||value2===""||value3===""){
        //Error Message
    }else{
        const filmEkle = new film(value1,value2,value3);
        
        ui.addFilmToUI(filmEkle);
    }
    ui.clearInputs(title, director, url);
    event.preventDefault();
}