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