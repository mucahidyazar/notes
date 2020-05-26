const inputAmount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const cur = new currency("USD", "TRY");
const ui = new UI();




eventListeners();

function eventListeners(){
    inputAmount.addEventListener("input", exchange);
}


function exchange(){
    cur.exchange(inputAmount)
    .then(res=> ui.addTotalToUI(res))
    .catch(rej=>console.error("Hata : " + rej));
}


firstCurrency.onchange = function(){
    cur.firstSelected(firstCurrency);
    ui.firstCurrency(firstCurrency);
    exchange();
}

secondCurrency.onchange = function(){
    cur.secondSelected(secondCurrency);
    ui.secondCurrency(secondCurrency);
    exchange();
}