class UI{
    
    constructor(firstSelect, secondSelect){
        
        this.firstSelect = firstSelect;
        this.seconSelect = secondSelect;
        
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
        
    }
    
    changeFirst(){
        this.outputFirst.textContent = firstSelect.options[firstSelect.selectedIndex].textContent;
    }
    
    changeSecond(){
        this.outputSecond.textContent = secondSelect.options[secondSelect.selectedIndex].textContent;
    }
    
    displayResult(total){
        this.outputResult.value = total;
    }
    
}