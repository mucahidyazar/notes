class UI{
    
    constructor(){
        
        this.api = "ae275a38d8042378492af090ee15fb28";
        this.informations = document.getElementById("informations");
        
    }
    
    async getWeatherFromAPI(city){
        
        const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api}`);
        const weatherJSON = await getWeather.json()
        .then(res => this.addWeatherToUI(res))
        .catch(rej => console.error(rej));
        
    }
    
    addWeatherToUI(values){
        this.informations.innerHTML = `
            <ul>
                <li>Country : ${values.sys.country}</li>
                <li>City : ${values.name}</li>
                <li>City ID : ${values.id}</li>
                <li>Degrees : ${values.main.temp}</li>
                <li>Time Zone : ${values.timezone}</li>
            </ul>
`;
    }
    
}