const name = "Mucahid Yazar";
const company = "Yazar A.C.";
const department = "Development";
const salary = 5000;

/*

console.log("Name : " + name + "\n" + "Company : " + company + "\n" + "Department : " + department + "\n" + "Salary : " + salary);

//Yukaridaki satiri asagidaki gibi daha basit bir sekildede yapabiliriz.
const a = `Isim:${name}\nCompany:${company}\nDepartment:${department}\nSalary:${salary}`;

*/


//En sik kullanilan hali
//Bu templatelerimizin icinde Javascript kodlarinida calistirabiliriz.

function f1(){
    return "Template basari ile calistirildi.";
}

const deneme = `

    <ul>
        <li>${name}</li>
        <li>${company}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${f1}</li>
    </ul>  

`;


//Body nin icinde innerHTML'ine yukarida olustudugumuz stringi yazdiririz.
document.body.innerHTML = deneme;