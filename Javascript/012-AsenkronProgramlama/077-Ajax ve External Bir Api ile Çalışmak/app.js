document.getElementById("change").addEventListener("click", change);

function change(){
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
    
    xhr.onload = function(){
        
        const exchangeRates = JSON.parse(this.responseText);
        const rates = exchangeRates.rates;
        const turkishLira = rates.TRY;
        const inputEuro = Number(document.getElementById("amount").value);
        const kacTL = document.getElementById("tl");
        kacTL.value = inputEuro*turkishLira;
        
    }
    
    
    
    
    
    
    xhr.send();
    
}