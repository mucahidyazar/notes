class Storage{
    
    static getStorageAllSearchedUsers(){
        let searched;
        if(localStorage.getItem("searched")===null){
            searched = [];
        }else{
            searched = JSON.parse(localStorage.getItem("searched"));
        }
        return searched;
    }

    static addStorageAllSearchedUsers(username){
        let searched = this.getStorageAllSearchedUsers();
        if(searched.indexOf(username) === -1){
            searched.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(searched));
    }
    
    static clearStorage(){
        localStorage.removeItem("searched");
    }
    
    
}