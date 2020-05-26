class UI{
    
    constructor(){
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }    
    
    addTotalToUI(value){
        this.outputResult.value = value;
    }
    
    firstCurrency(value){
        this.outputFirst.textContent = value.options[value.selectedIndex].textContent;
    }
    
    secondCurrency(value){
        this.outputSecond.textContent = value.options[value.selectedIndex].textContent;
    }
    
}