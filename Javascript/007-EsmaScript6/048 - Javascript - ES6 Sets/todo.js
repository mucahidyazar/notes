//SET ler  yani KUME ler
const mySet = new Set();
//Ayni deger yani 100 iki kere tanimlasak alt alta yazsakda 1 kere eklenir sadece kumeye yani sete.
mySet.add(100);
mySet.add(100);

mySet.add(3.14);
mySet.add("Mustafa");

//Dizi ekleyebiliriz.
mySet.add([1,2,3]); 

//Obje ekleyebiliriz
mySet.add({a:1, a:2});



//Yada tek satirda da tamamlayabiliriz.
const mySet02 = new Set([100, 3.15, "Deneme", [1,2,3,4,5], {ada:10, ede:20}]);

console.log(mySet);
console.log(mySet02);

//Eleman sayisini SIZE ile sorgulayabiliriz. mySet'2 2 tane 100 tanimlamistik eger o elemani olsaydi 6 eleman gosterecekti ama 2 tane ayni deger tanimlanmadigindan tasinmadigindan eleman size ini set size ini 5 gorecegiz.
console.log(mySet.size);


//DELETE metodu = set lerimiz kumelerimiz icinden birsey silmez istedigimizde kullaniriz.
mySet.delete("Mustafa");
console.log(mySet);


//HAS METHODU
//Setlerimiz kumelerimiz icinde aradigimiz seyin olup olmadigini false veya true boealan degerler geri donus alarak gorebiliriz.
console.log(mySet.has(100)); //TRUE
console.log(mySet.has(3.14)); //TRUE
console.log(mySet.has("Mustafa")); //FALSE Cunku onu biraz once silmistik :)
console.log(mySet.has([1,2,3])); //FALSE Cunku bir onceki derste gormustuk yukaridakiler primitive iken bu reference bir deger oldugu icin bellekte ayni yerleri gostermediklerinden dogru donemez.


//forEach METHODU = Bu methodla dizilerde oldugu gibi buradada setlerimiz uzerinde gezebiliriz.
mySet02.forEach(function(everyMySet){
    console.log(everyMySet);
});


//for OF ile gezinme
for(let value of mySet02){
    console.log(value);
}




//SET lerden ARRAY olusturma.
//Yukarida olsuturdugumuz sET ler aslinda ARRAY'den SET olusturmaydi :)
const array01 = Array.from(mySet);
console.log(array01);