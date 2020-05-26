const numbers = [1,5,10,20,30,40,50];
const words = ["Mucahid", "Ali", "Furkan", "Talha", "Zeynep", "Bayram"];

let value;

value = numbers.length;


numbers[2] = 1000;
value = numbers[2];

//Kacinci sirada onu ogreniriz
value = numbers.indexOf(1000);

/*
//Push ile sonuna Unshift ile basina yeni eleman ekleyebiliriz.
numbers.push(5000);
value = numbers;
numbers.unshift(500);
value = numbers;
*/

//Degerleri basindan veya sonunda cikartmak veya atmak icinde sirasiyla POP ve SHIFT kullaniriz.
numbers.shift();
numbers.pop();
value=numbers;

/*
//Belirli bir araliktan atmak icinde splice kullaniriz. Parantez icinde ilk hangi aralik olmasi gerektigi, daha sonra hangi alana kadar gitmesi gerektigi ayzilir. 1,5 = arrayin 2. elenanin'dan 5. elemanina kadar demek ama 5 dahil degil
numbers.splice(1,3);
value=numbers;
*/

//Reverse ile array icindeki elemanlari ters siralayabiliriz
numbers.reverse();
value=numbers;

//.sort ile siralama yapariz ama yanlzica ilk bastaki sayilari veya harflerin buyukluk kucukluk iliskisine bakar.
numbers.sort();
value=numbers;

//Kucukten buyuge siralama
numbers.sort(function(x,y){
    return x-y;
});
value=numbers;

//Buyukten Kucuge siralama
numbers.sort(function(x,y){
   return y-x; 
});
value=numbers;

console.log(value);

