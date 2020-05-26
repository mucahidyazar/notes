//API nedir?
// Application Programming Interface - Uygulama Programlama Arayuzu
// Api'lar bir uygulamanin bir takim fonksiyonlarinin baska uygulamalar tarafindan kullanilmasidir. Tipki bir onceki ornekte oldugu gibi.

//Github da bize json datalari veren bir api dir ayni zamanda.

// Fakat her api text api degildir. Ekran kartlarimizinda bir api i vardir.

// Api lar firmalar tarafindan baskalari sitelerinde kullansin ve kendi sitelerinin reklami tanitimi olsun diye yapilan uygulamalardir. Bazende sirf ucretsiz olarak sadece hizmewt icin paylasilan api larda vardir.












// REST API nedir?
// REST API da bizim web application lar arasi iletisim sagladigimiz bir api turu. Yaninda birde SOAP denilen bir mimaride var. Ingilizce acilimi Representational State Transfer.

//API ye gore daha hizli.
//REST mimarisine dayaniyor.
// Stateless bir yapiya sahip bu yuzden daha hizli. Yani bir web sitesine istek gonderirken onceki istek kayitlarini tutmuyor ve bu sayede daha hizli veri alisverisi yapiyor.
// Genelde REST API da HTTP isteklerinde bulunuyoruz.
// Yaptigimiz islemlere gore REST API genellikle bize JSON objesi donderecek

//Bircok programlama dili ile rest api kullanilabilir.





// HTTP ISTEKLERI

// GET : Endpoint'e(Url)'ye gore belli verileri alir
// POST : Endpoint'e(Url)'ye gore belli bir veriyi gonderir.
// PUT : Endpoint'e(Url)'ye gore belli bir veriyi gunceller.
// DELETE : Endpoint'e(Url)'ye gore belli bir veriyi siler.







//API Endpointleri

// GET https://api.example.com/posts
//Turm postlari aliriz.

// GET https://api.example.com/posts/1
//ID'si 1 olan Postu aliriz.

// POST https://api.example.com/posts
//Icinde birsey gonderirsek yeni bir postumuz olusabilir.

// PUT https://api.example.com/posts/1
//ID/si 1 olan postumuzu guncelleyebiliriz.

// DELTE https://api.example.com/posts/1
//ID'si 1 olan postumuzu sileriz.