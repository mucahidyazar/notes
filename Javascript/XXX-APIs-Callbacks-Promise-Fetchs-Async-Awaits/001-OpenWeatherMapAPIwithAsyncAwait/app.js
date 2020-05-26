const submit = document.getElementById("form");
const input = document.getElementById("input");
const ui = new UI();


eventListeners();

function eventListeners(){
    
    submit.addEventListener("submit", getWeather);
    
}


function getWeather(event){
    ui.getWeatherFromAPI(input.value);
    
    event.preventDefault();
}