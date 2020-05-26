//Once package.jsonumuzu olusturuyoruz

//Daha sonra babellarimizi kuruyoruz
//Burada @babel-cli i yuklememize gerekyok.
//Cunku wepack babel ile iletisim kurarak, babeli kendisi calistiriyor
//Anca webpack ile babel arasindaki iliskiyi saglamak icin 
//babel-loader modulunu kurmamiz gerekiyor

//Ve webpack i indiriyoruz.
//Webpacki commandlinedan kullanmak icin once webpack-cli
//ve daha sonra webpack in kendisini --save-dev olarak indiriyoruz.

// Webpackin calistigini gosterme ornegi
//Ve daha sonra ana dizinimizde src adinda bir klasor olusturalim
//Icinde index.js - app1.js ve app2.js dosyalarini olusturalim.

//app1 ve app2de alttaki ornekteki gibi export yazarak yaziyoruz.
//index.js dede bunlari import ediyoruz.
//Bizde webpack e configuration dosyasi olusturarak diyecegiz ki
//index.js ye bak ve export edilen dosyalari
//tek bir dosya halinde ortaya cikar diyecegiz.

//Configuration dosyasi olusturmak
//Hazir configuration dosyamiz = webpack.config.js
//Detaylari onun icinde


//Config dosyasindan sonra
//webpack imizi local olarak kullanmak icin package.json dosyamizi
//asagidaki gibi script olarak tanimliyoruz.
//"build": "webpack ---watch"

//Niye watch
//Cunku app1 app2 index.js gibi dosyalar degisebilir
//Herseferinde bunlari yazmamak icin otomatik olarak
//tanimasini watch ile istiyoruz.

//Ve npm run build diyerek webpacketimizi calistiriyoruz.
//Sonra bundles klasoru altinda bundle.js olusacak
//Iste bu app1 app2 index.js nin birlestirilip tek bir js
//dosyasi olarak webpack lemesidir.

//Daha sonra olusan bundle.js mizi index.html olusturup tanimlayalim
//Bundan sonra app1 app2 index.js lerde yapacagimiz tum degisiklikler
//otomatik olarak webpack ile anlik olusturulup bundleye aktarilacaktir.
//Yani tekarar tekrar webpack olusturmamiza gerek yoktur.