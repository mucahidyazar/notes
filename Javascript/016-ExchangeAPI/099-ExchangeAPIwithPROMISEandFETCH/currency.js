class Currency{
    
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = null;
        this.url="https://api.exchangeratesapi.io/latest?base=";
    }
    
    exchange(){
        
        return new Promise((resolve, reject)=>{
            
            fetch(this.url + this.firstCurrency)
            .then(res => res.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const amountN = Number(this.amount);
                let total = parity*amountN;
                resolve(total);
            })
            .catch(rej => reject("Hata"));
            
        });
        
    }
    
    changeAmount(amount){
        this.amount = amount;
    }
    
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
    
}