//____________________________________ANS : 1_________________________________________________

 var character = prompt("Enter a character: (for number change +prompt)");


 if (character == character.toUpperCase()) {


  alert ('upper case letter');


 }


 else if (character == character.toLowerCase()){


 alert ('lower case letter');

 }
 else{


     alert("number");
 }

//_______________________________________ANS : 2____________________________________________

 var num1=+prompt("Enter integer 1: ");

 var num2=+prompt("Enter integer 2: ");

 if(num1>num2){


    alert("Integer 1 is Greater: ");


 }

 else if(num2>num1){


     alert("Integer 2 is Greater");


 }


 else if(num1==num2){


    alert("Both are equal");


 }


//___________________________________________ANS : 3________________________________________


 var num1=+prompt("Enter integer: ");


 if(num1>0){


     alert("Number is Positive: ");


 }


 else if(num1<0){


     alert("Number is negative");


 }


else if(num1==0){


    alert("Number is 0");

 }

//_______________________________________ANS : 4_______________________________________

 var cha=prompt("Enter a character to check whether it is vowel or not: ");

if(cha=="a" || cha=="e" ||cha=="i" ||cha=="o" ||cha=="u"){


     alert("It is vowel");

 }

 else{

    alert("It is not vowel");
    
}

//________________________________ANS : 5___________________________________________

 passw1="8ball";


 passw2="pubg";

 alert("Welcome to our data base!");

 Passw1=prompt("Enter Password1: ");

 if(passw1==Passw1){


     alert("Password 1 is correct");
 }
 else{

     alert("Wrong password");

 }
 Passw2=prompt("Enter Passwrd2: ");



 if(passw1==Passw1 && passw2==Passw2){

 alert("Password 2 is also correct. <br>Welcome!");


 }

 else{

     alert("password2 or password 1  is wrong");
 }

//____________________________________ANS : 6________________________________________

 var greeting;

  var hour = 13;

   if (hour < 18)
    {
       alert( greeting = "Good day");
    }
         else{ 

             alert(greeting = "Good evening"); }

//______________________________________________ANS : 7___________________________________

 var time=+prompt("Enter Time in 24 hour format: ");


 if(time>=0000 && time<1200){


     alert("Good Morning");


 }

 else if(time>=1200 && time<1700){


     alert("Good AfterNoon");


 }else if(time>=1700 && time<2100){


     alert("Good Evening");

 }else if(time>=2100 && time<=2359){

     alert("Good Night");
 }