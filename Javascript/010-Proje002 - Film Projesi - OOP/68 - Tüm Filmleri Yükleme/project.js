const form = document.getElementById("film-form");
const title = document.getElementById("title");
const director = document.getElementById("director");
const url = document.querySelector("#url");
const dFilm = document.querySelector("#delete-film");

const ui = new UI();
const st = new STORAGE();

eventListeners();

function eventListeners(event){
    form.addEventListener("submit", eventSubmit);
    document.addEventListener("DOMContentLoaded", function(){
        let films = st.getFilmFromStotrage();
        ui.loadAllFilmsToUI(films);
    });    
}

function eventSubmit(event){
    const value1 = title.value;
    const value2 = director.value;
    const value3 = url.value;
    if(value1===""||value2===""||value3===""){
        //Error Message
        ui.alertMessage("danger", "Please write something to inputs...");
    }else{
        const filmEkle = new film(value1,value2,value3);
        
        ui.addFilmToUI(filmEkle);
        st.addFilmToStorage(filmEkle);
        ui.alertMessage("success", "Adding is done");
    }
    ui.clearInputs(title, director, url);
    event.preventDefault();
}