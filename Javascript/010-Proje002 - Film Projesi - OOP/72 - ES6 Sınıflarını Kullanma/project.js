const form = document.getElementById("film-form");
const title = document.getElementById("title");
const director = document.getElementById("director");
const url = document.querySelector("#url");
const dFilm = document.querySelector("#delete-film");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clearFilms = document.querySelector("#clear-films");

eventListeners();

function eventListeners(event){
    form.addEventListener("submit", eventSubmit);
    document.addEventListener("DOMContentLoaded", function(){
        let films = STORAGE.getFilmFromStotrage();
        UI.loadAllFilmsToUI(films);
    });
    cardBody2.addEventListener("click", deleteFilm);
    clearFilms.addEventListener("click", clearAllFilms);
}

function eventSubmit(event){
    const value1 = title.value;
    const value2 = director.value;
    const value3 = url.value;
    if(value1===""||value2===""||value3===""){
        //Error Message
        UI.alertMessage("danger", "Please write something to inputs...");
    }else{
        const filmEkle = new film(value1,value2,value3);
        
        UI.addFilmToUI(filmEkle);
        STORAGE.addFilmToStorage(filmEkle);
        UI.alertMessage("success", "Adding is done");
    }
    UI.clearInputs(title, director, url);
    event.preventDefault();
}

function deleteFilm(event){
    if(event.target.id === "delete-film"){
        UI.deleteFilmFromUI(event.target);
        STORAGE.deteteFilmFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
    
}

function clearAllFilms(){
    if(confirm("Are you sure about this?")){
        UI.clearAllFilmsFromUI();
        STORAGE.clearAllFilmsFromStorage();
    }
}