class REGISTER{
    
    constructor(){
        
    }
    
    registerUser(){
        fetch("users.json")
        .then(res=> res.json())
        .then(users=> console.log(users))
        .catch(rej=> console.error(rej));
    }
    
}