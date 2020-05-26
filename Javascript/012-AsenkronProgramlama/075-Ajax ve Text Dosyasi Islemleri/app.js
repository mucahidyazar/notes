//XMLHttpRequest Status Kodlari
// 200 OK
// 403 Forbidden
// 404 Not Found
// 505 Internal Server Error

//onreadystatechange e fonksiyon ekledigimizzde readystate degistigi zaman direk olarak bu fonksiyon calisacak. Bu sekilde AJAX i kullanacagiz.

const btn = document.getElementById("btn").addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        //console.log(this.readyState);
        //this burada window degil xhr objemizdir.
        //Bu sekildede xhr objemizin readyState indeki degisiklikleri konsola yazdiracagiz.
        
        //Nedir bu degisiklikler
        //Holds the status of the XMLHttpRequest
        //0: request no initialized - Istek yuklenmedi
        //1: server connection established - Server baglantisi saglandi
        //2: request received - istek alindi
        //3: processing request - Istek isleniyor
        //4: request fnished and response is ready - Istek bitti ve response hazir.
        
        //Yukaridaki console log ciktrimiz 1-2-3-4 degerlerinide gosterecektir.
        
        
        
        //console.log(this.status);
        //Buradada readyState 1 degerinde 0 ciktisi aliriz.
        //2-3-4 degerlerindede 200 yani OK ciktisi aliriz.
        
        
        
        if(this.readyState==4 && this.status==200){
            // Eger readystate 4 ve status 200 ise response hazirdir. Ve eger hazirsa
            console.log(this.responseText);
        }
        
        
        
        //Bu eski bir yontem daha kisa sadece response hazirken calisan onload yontemimizle bunu daha kisa yapabiliriz.
        xhr.onload = function(){
            console.log(this.responseText);
        }
        //Burasi sadece readyStatei kontrol eder. Status icin ayrica icinde if le kosula baglamak gerekir. Sadece readyState 4 oldugunda calisir. Ornek. 
        xhr.onload = function(){
            if(this.status===200){//Kontrol boyle saglanir.
                console.log(this.responseText);
            }
        }
        //onprogress de sadece readyState 3 oldugunda calisir.
        
        
        
        //Bos Dive yazdirmak
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
        
    }
    
    
    xhr.open("GET", "textDosyasi.txt", true);
    //GET ile al diyoruz. 
    //ikincci kisima alacagimiz dosyanin ismini yaziyoruz.
    //Son degerede Asenkronsa true degilse false degerini veriyoruz.
    
    xhr.send();
    //Bu sekildede gonderiyoruz islemimizi.
    
    
    
    //Bu derste TEXT olarak aldik bir sonraki derste JSON olarak alacagiz. Fakat JSON.parse kullanip JSON arrayi veya objesine cevirmeye calisacagiz.
    
});