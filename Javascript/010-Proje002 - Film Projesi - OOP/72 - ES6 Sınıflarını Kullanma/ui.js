class UI{
    
    static addFilmToUI(newFilm) {
        const tbody = document.querySelector("#films");
        tbody.innerHTML += `<tr>
            <td><img src="${newFilm.Url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.Title}</td>
            <td>${newFilm.Director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
    }

    static clearInputs(value1, value2, value3){
        value1.value = "";
        value2.value = "";
        value3.value = "";
    }




    static alertMessage(type, message){
        const cardBody1 = document.querySelector(".card-body");
        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        cardBody1.appendChild(alertDiv);

        setTimeout(function(){
            alertDiv.remove();
        },1000);
    }

    static loadAllFilmsToUI(films){
        const filmList = document.querySelector("#films");
        films.forEach(function(event){
            filmList.innerHTML += `<tr>
            <td><img src="${event.Url}" class="img-fluid img-thumbnail"></td>
            <td>${event.Title}</td>
            <td>${event.Director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        });
    }

    static deleteFilmFromUI(event){
        event.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI(){
        const films = document.getElementById("films");
        while(films.firstElementChild !== null){
            films.firstElementChild.remove();
        }
    }
    
}

