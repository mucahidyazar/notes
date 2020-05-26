const registerForm = document.getElementById("registerForm");
const RG = new REGISTER();


eventListeners();

function eventListeners(){
    
    registerForm.addEventListener("submit", register);
    
}

function register(event){
    RG.registerUser();
    
    event.preventDefault();
}