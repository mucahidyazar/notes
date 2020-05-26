//Localdeki TXT dosyasindan veri alma FETCH ve Promise ile
function getTextFile(){
    
    fetch("metinbelgesi.txt").then(responseDegeri => responseDegeri.text())
    .then(metin => console.log(metin))
    .catch(error => console.error("Bir hata"));
    
}
//getTextFile();



//Localdeki JSON dosyasindan veri alma FETCH ve Promise ile
function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
//getJsonFile();



//API'den doviz kurlarini cekmek FETCH ve PROMISE ile
function getAllExchanges(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(exchanges => exchanges.json())
    .then(allExchanges => {
        console.log(allExchanges.rates.TRY);
    })
    .catch(rejectD => console.log("Doviz kurlari alinamadi"));
}

//getAllExchanges();


