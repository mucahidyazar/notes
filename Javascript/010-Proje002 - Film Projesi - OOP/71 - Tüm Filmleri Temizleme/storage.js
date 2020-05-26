function STORAGE(){
    
}

STORAGE.prototype.addFilmToStorage = function(filmEkle){
    let films = this.getFilmFromStotrage();
    films.push(filmEkle);
    localStorage.setItem("films", JSON.stringify(films));
}

STORAGE.prototype.getFilmFromStotrage = function(){
    let getFilms;
    
    if(localStorage.getItem("films") === null){
        getFilms = [];
    }else{
        getFilms = JSON.parse(localStorage.getItem("films"));
    }
    return getFilms;
}

STORAGE.prototype.deteteFilmFromStorage = function(filmTitle){
    let films = this.getFilmFromStotrage();
    films.forEach(function(film, index){
        if(film.Title===filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}

STORAGE.prototype.clearAllFilmsFromStorage = function (){
    localStorage.removeItem("films");
}