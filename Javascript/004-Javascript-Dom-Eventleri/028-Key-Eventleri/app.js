//Keyboards Events

//keypress == Basili tuttukca seri seri yazar. Tab scrool gibi ozerl butonlar calismaz.

//document.addEventListener("keypress", run);



//keydown Tusa basilma islemi oldugu andan itibaren komut calisir.
//document.addEventListener("keydown", run);



//keyup = Tusa basilma isleminden sonra elimizi cektigimizde tus eski haline dondugunde komutu gerceklestirir.
//document.addEventListener("keyup", run);




/*function run(x){
    console.log(x.which); //Tuslarin ASCI degerlerini goruruz bu sekilde
    console.log(x.key); //Hangi tusa basarsak onu goruruz
}*/

const todoListHeader = document.getElementsByClassName("card-header")[0];
const todoInput = document.getElementsByClassName("form-control")[0];

todoInput.addEventListener("keyup", changetlh);

function changetlh(x){
    todoListHeader.textContent = x.target.value;
}







// Asci tablolarini bu adreste bulabilirsiniz
// http://www.asciitable.com/