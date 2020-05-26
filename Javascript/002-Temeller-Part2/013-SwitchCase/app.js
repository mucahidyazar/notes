const islem = 1;

switch(islem){
    case 1:
        console.log("Islen No : 1");
        break;
    case 2:
        console.log("Islem No : 2");
        break;
    case 3:
        console.log("Islem No : 3");
        break;
    default:
        console.log("Gecersiz islem");
        break;
}

//If Else ile yapacaklarimizi daha kisa yazmamiza yariyor bir nevi.
//break alt islem dogru oldugunda alt koda gecmeyi engelliyor. Eger yazilmazsa islem dogru oldugunda cikmaz ve alttakileri sorgulamaya devam eder.
//case ile islemin degerlerini sorguluyoruz. case eger 1 se gibi.
//default ise else gibi eger hicbir case degilse anlamini tasiyor.