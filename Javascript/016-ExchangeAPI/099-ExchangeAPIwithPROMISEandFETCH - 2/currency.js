class currency{
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }
    
    exchange(inpAmo){
        return new Promise((resolve, reject)=>{
            fetch(this.url+this.firstCurrency)
            .then(res => res.json())
            .then(data => {
                const amount = inpAmo.value;
                const baseA = data.rates[this.secondCurrency];
                let total = amount*baseA;
                resolve(total);
            })
            .catch(rej => reject(rej));    
        });
        
    }
    
    firstSelected(value){
        this.firstCurrency = value.options[value.selectedIndex].textContent;
    }
    secondSelected(value){
        this.secondCurrency = value.options[value.selectedIndex].textContent;
    }
    
}

