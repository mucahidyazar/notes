const buttonTodoEkleyin = document.getElementsByClassName("card-header")[0];

const cardbody = document.getElementsByClassName("card-body")[0];



//Mouse Events

//CLICK
//buttonTodoEkleyin.addEventListener("click", fonksiyon1);

//MOUSEDOWN KEYDOWN gibi isliyor. Mouse tiklayinca isler. Click ile ayni gibi. Click kullanin siz yinede
//buttonTodoEkleyin.addEventListener("mousedown", fonksiyon1);

//MOUSEUP KEYUP benzeri
//buttonTodoEkleyin.addEventListener("mouseup", fonksiyon1);

//MOUSEOVER = Mouse uzerine geldigi anda komut isler. Eger bodye yazarsak mouse mouse bodye ve altindaki her eleman icin ayri ayri calisir ve isler.
cardbody.addEventListener("mouseover", fonksiyon1);

//MOUSEOUT = Mouse outta yukaridaki gibi ayni sekilde calisir tek farki uzerine geldigimiz seyden sonra uzerinden mouse u cektigimizde calisir.
cardbody.addEventListener("mouseout", fonksiyon1);


//Yukaridakiler tanimlanan alandaki tum tagler icin calisiyordu. Ama altta tanimlananlar sadece baslik belirlendiyse basligin ustunde calisir. basligin icindeki ul ve li ler icin ayri calismaz.
//MOUSENTER = Uzerine geldiginde
//MOUSELEAVE = uzerinden ciktiginda
const clearTds = document.getElementById("clear-todos");
clearTds.addEventListener("mouseenter", fonksiyon1);
clearTds.addEventListener("mouseleave", fonksiyon1);


function fonksiyon1(x){
    console.log(x.type);
}
