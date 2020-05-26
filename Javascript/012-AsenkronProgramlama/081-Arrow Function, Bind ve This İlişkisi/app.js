//BIND VE ARROW FUNCTIONLAR
//BINDla tanimlanan this'in window objesini gostermesi aslinda arrow functionlarla hicbirsey yapilmadan da yapiliyor aslinda. Yani Arrow functionlar icinde ki thisler window scope unu gosterirler.


//ORNEK

 const denemeObje = {
     name: "Mucahid",
     
     //tellName: function(){
         //console.log(this.name); 
         //console.log(this) //Buradaki THIS denemeObje'mizi gosteriyor. Eger fonksiyonumuzu kapattiktan sonra .bind(this) yazarsak buradaki this window scope unu gosterir.
         // Bunu arrow functionlarla .bind(this kullanmadan asagidaki gibide yapabilirdik.)
     //}.bind(this),
     
     // Bu alan window scope'unu gosterir.
     
     
     tellName2: () => console.log(this) // Yukaridaki .bind(this)'i kullanmadan bu sekilde arrow functionlarlada this in scope unu windows yapabiliriz.
     
 }
 
 denemeObje.tellName2();