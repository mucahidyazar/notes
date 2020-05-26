//employees.jsonumuzun icindeki 3 tane json objemizin icindeki calisanlari AJAX kullanim indeximize cagiracagiz.

//JSON objelerimizin icindeki name department salary gibi anahtarlarimiz kural olarak stringin icine almamiz gerekiyor.

document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees(){
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "employees.json", true);
    
    xhr.onload = function(){
        
        let list = document.getElementById("employees");
        
        if(this.status == 200){
            
            const employees = JSON.parse(this.responseText);
            
            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;
            });
            
        }
        
    }
    
    xhr.send();
}


// Bu kendi serverimiz uzerinden yaptigimiz bir calisma oldu.