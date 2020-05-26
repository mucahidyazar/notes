//forIn Dongusu = Arrayler Objeler Stringler Nodelistler uzerinde gezinmemizi saglar.
// Ornekler

const obje1 = {
    name: "Mucahid",
    lastname: "Yazar",
    age:29
}

const array1 = ["C#", "C++", "Phyton"];

const text1 = "Maltepe University";

//forIn Kullanimi
//OBJECTS
for(let prop in obje1){
    console.log(prop); // Busadece name last name gibi degerleri verecek.
    
    // Eger buradaki gibi obje mizi ve koseli parentezle prop eklersek tanimli degerlerimizin tanimlarida karsisina yazilir.
    console.log(prop, obje1[prop]); 
}


//ARRAYS
for(let index in array1){
    console.log(index); //Bu sadece index numaralarini yazar
    
    //Eger index numaralarinin karsisina degerlerini yazmak istersek arrayimizin ismi ve icine koseli parantezlerle index yazmamiz gerekiyor.
    console.log(index, array1[index]);
}


//TEXT
for(let index in text1){
    console.log(index); //Bu sadece harflerin index numaralarini yazar
    
    //Eger index numaralarinin karsisina harflerin hangi harf yani degerlerini yazmak istersek textimizin ismi ve icine koseli parantezlerle index yazmamiz gerekiyor.
    console.log(index, text1[index]);
}



//forOf
//Bu dongu OBJEler uzerinde calismaz. Text Arrayler Nodelist lerde calisir.
//forIn deki array veya nodelist veya text'e koseli parentez acip yazdigimiz islemle ayni islemi yapiyor.

//OBJE - forOf
for(let value of array1){ //DIKKAT VALUE ve OF
    console.log(value);
}

//Ayni islem - OBJE - forin
for(let index in array1){ //DIKKAT INDEX ve IN
    console.log(array1[index]);
}

//TEXT forOF
for(let value of text1){
    console.log(value);
}

