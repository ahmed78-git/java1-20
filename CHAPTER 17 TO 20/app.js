//_________________________________ANS : 1______________________________________

 var myArray = [

     ["cats","dogs","monkeys","horses"],

    ["apples","oranges","pears","bananas"]

 ];

//___________________________________ANS : 2__________________________________________

var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//__________________________________ANS : 3_____________________________________

     for(var i=1;i<=10;i++){

         document.write(i+"<br>");
     }
//___________________________________ANS: 4_______________________________________

var num=+prompt("Enter a number for multiplication table: ");

 var num2=+prompt("How many times you want: ");

 document.write("Multiplication Table of: "+num+"<br />");

 document.write("Length: "+num2+"<br /><br />");

 for(var i=1;i<=num2;i++){
     
     document.write(num+" * "+i+" = "+num*i+"<br />");
 }


//___________________________________ANS : 5___________________________________

 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for(var i=0;i<fruits.length;i++){

     document.write("<br>"+fruits[i]);

 } 


 document.write("<br><br><br><br>")

 for(var a=0;a<fruits.length;a++){

     document.write("<br>Element at index "+a+" is "+fruits[a]);
 }

//________________________________________ANS : 6__________________________________


 document.write("<h3>Counting: </h3>")

 for(var a=1;a<=15;a++){

     document.write(a+" ,");
 }
 document.write("<h3>Reverse Counting: </h3>")

 for(var b=10;b>=0;b--){

     document.write(b+" ,");
 }
 document.write("<h3>Even: </h3>")

 for(var c=0;c<=20;c=c+2){

     document.write(c+" ,");
 }
 document.write("<h3>Odd: </h3>")

 for(var d=1;d<20;d=d+2){

     document.write(d+" ,");
 }
 document.write("<h3>Series: </h3>")

 for(var e=3;e<=21;e=e+2){

     document.write(e-1+"k, ");
 }


//__________________________________________ANS: 7______________________________________

 var A = ["cake", "apple pie", "cookie", "chips", "patties"];

 var B=prompt("Welcome to the Backery.What do you want to sir/ma'am?");

 for(var b=0;b<1;b++){

 for(var i=0;i<=A.length;i++){

     if(B==A[i]){

         alert(B+"is available at index "+i);

         break;
     }
 }
 if(B!=A[i]){

         alert("We are sorry."+B+" is no availble in our backery");
 } 
 }

//_____________________________________________ANS : 8____________________________________

 var A = [24, 53, 78, 91, 12];

 var b=Math.max(...A);

 alert("The Largest number is : "+b);

//_________________________________________ANS : 9____________________________________

 A = [24, 53, 78, 91, 12];

 var b=Math.min(...A);

 alert("The Minimum number is : "+b); 

//_________________________________ANS : 10____________________________________

 for(var i=1;i<=20;i++){
     
     document.write(i*5+", ");
 }