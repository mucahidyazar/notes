//SCOPE KAVRAMI
//3 cesit SCOPE kavrami vardir. Global scope, functional scope, blog scop.

//Bu alanda yazilan kodlar Global Scope icindedir.

function(){
    //Bu alanda yazan kodlar Functional Scope alani icindedir.
}

if(){
   //Bu alanda yazanlarda Blog Scoplari icindedir.
   }

   
   
//Functional scope alaninda tanimlanmis var let const gibi degiskenler hicbir zaman Global alandaki veya Blog alanindaki Scopelarla etkilesime girmezler ve o alanlarda varolamazlar.
   
//Blog alaninda olan VAR degiskenleri disarda var olmaya devam ederler. LET veya CONST ise disarda var olamazlar. 
//Blog alaninda tanimlanan VAR degiskeni Global alandaki tanimlanmis VAR degiskenini etkileyebilir. Buna dikkat etmek lazim.