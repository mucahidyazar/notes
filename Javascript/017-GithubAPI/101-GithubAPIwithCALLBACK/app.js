const githubForm = document.querySelector("#github-form");
const githubName = document.querySelector("#githubname");
const lastUsers = document.querySelector("#last-users");
const clearLastUsers = document.querySelector("#clear-last-users");
const gthb = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(event){
    let username = githubName.value.trim();
    if(username==""){
        alert("Lutfen bir kullanici adi giriniz");
    }else{
        gthb.getGithubData(username)
        .then(res => {
            if(res.user.message === "Not Found"){
                //Hata Mesaji
                ui.showAlert("danger", "Kullanici bulunamadi");
            }
            else{
                ui.addAllSearchedUsersToUI(username);
                Storage.addStorageAllSearchedUsers(username);
                ui.showUserInfo(res.user);
                ui.showRepos(res.repo);
            }
        }) //Eger return olan user yada repodan sadece birisini almak isterseniz res.repo veya res.user yazmaniz yeterlidir.
        .catch(rej => ui.showAlert("danger", rej));
    }
    
    ui.clearGithubName();
    
    event.preventDefault();
}

function clearAllSearched(){
    if(confirm("Tum arama gecmisini silmek istediginize emin misiniz?")){
        Storage.clearStorage();
        while(lastUsers.firstElementChild !== null){
            lastUsers.firstElementChild.remove();
        }
    }
}

function getAllSearched(){
    const users = Storage.getStorageAllSearchedUsers();
    users.forEach(function(user){
        let result;
        result += `
            <li class="list-group-item">${user}</li>
`
    });
    lastUsers.innerHTML = result;
}