function UI(){
    
}

UI.prototype.addFilmToUI = function (newFilm) {
    const tbody = document.querySelector("#films");
    tbody.innerHTML += `<tr>
        <td><img src="${newFilm.Url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.Title}</td>
        <td>${newFilm.Director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
}

UI.prototype.clearInputs = function(value1, value2, value3){
    value1.value = "";
    value2.value = "";
    value3.value = "";
}



