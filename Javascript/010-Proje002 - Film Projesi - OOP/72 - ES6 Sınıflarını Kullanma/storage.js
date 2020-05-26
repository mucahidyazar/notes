class STORAGE{
    
    static addFilmToStorage(filmEkle){
        let films = this.getFilmFromStotrage();
        films.push(filmEkle);
        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFilmFromStotrage(){
        let getFilms;

        if(localStorage.getItem("films") === null){
            getFilms = [];
        }else{
            getFilms = JSON.parse(localStorage.getItem("films"));
        }
        return getFilms;
    }

    static deteteFilmFromStorage(filmTitle){
        let films = this.getFilmFromStotrage();
        films.forEach(function(film, index){
            if(film.Title===filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
    
}

