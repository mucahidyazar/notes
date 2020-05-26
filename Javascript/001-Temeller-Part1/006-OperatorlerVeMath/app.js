let sonuc;

const sayi1 = 10;
const sayi2 = 4;

//Temel Aritmetik Islemler
sonuc = sayi1 + sayi2;
sonuc = sayi1 - sayi2;
sonuc = sayi1 * sayi2;
sonuc = sayi1 / sayi2;
sonuc = sayi1 % sayi2;


//Pi Sayisini alma
sonuc = Math.PI;

//Yuvarlama .5'lar ust sayiya yuvarlanir, alti alt sayiya.
sonuc = Math.round(3.5);
sonuc = Math.round(3.2);
sonuc = Math.round(3.9);

//Tum sayilari bir ust sayiya yuvarlama icin ceil, bir alt sayiya yuvarlamak icin floor kullanabiliriz.
sonuc = Math.ceil(3.1);
sonuc = Math.floor(3.9);

//Karekokunu bulmak icin sqrt
sonuc = Math.sqrt(16);
sonuc = Math.sqrt(20);

//Ustunu alma. Ilk sayi sonra kac ustu olacagi. Karesi kupu gibi.
sonuc = Math.pow(8,2);
sonuc = Math.pow(4,4);

//En Yuksek ve En Dusuk Sayiyi Bulmak
sonuc = Math.max(20,-50,60,80,95);
sonuc = Math.min(20,-50,60,80,95);
sonuc = Math.max(sayi1, sayi2);

//RANDOM 0 dahil 1 dahil degil. Arada ondalikli rastgele degerler uretir.
sonuc = Math.random();

//0 ve 20(20 dahil degil) arasini isteseydik yapmamiz gereken suydu. *20 yazmak.
sonuc = Math.random() * 20;

//+1 yazarsakda sonuna 1-21 arasi degerler olurdu. +4 yazsaydik 4-24 arasi degerler olurdu.
sonuc = Math.random() * 20+4;

//Duz bir sayi elde etmek istiyorsakda floor veya ceil komutlariyla asagi veya yukari tam sayiya donderebiliriz.
sonuc = Math.floor(Math.random()*20+3);
sonuc = Math.ceil(Math.random()*15+8);



console.log(sonuc);