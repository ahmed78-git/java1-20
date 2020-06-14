//_______________________________________ANS : 1_________________________________________

 var city=prompt("Enter Your city: ");

 if(city=="Karachi"){

     alert("Welcome to city of Lights");

 }

//___________________________________ANS : 2___________________________________________

 var gender=prompt("Gender: ");

 if(gender=="male"){

    alert("Good Morning Sir!");

 }

 else if(gender=="female"){


     alert("Good morning Mam!");
 }

 //________________________________ANS : 3____________________________________________

 var signal=prompt("What is the color of Traffic signal: )");



 if(signal=="Red"){


     
     alert("Must Stop!");

 }

 else if(signal=="Yellow"){


     alert("Ready to move!");


 }
 else if(signal=="Green"){


    alert("Move now!");
 }

//______________________________________ANS : 4____________________________________________

 var fuel=+prompt("Remaining fuel in your car: (in liters)");




 if(fuel<0.25){



    alert("Please refill  fuel in your car");


 }


 else{


     alert("Set!")


 }


 //__________________________________________ANS : 5_______________________________________

//{a}

 var a = 4; 


 if (++a === 5){ 


     alert("Given condition for variable a is true");


  }


 //OUTPUT:      given condition for variable a is true

 //b)


  var b = 82; 


  if (b++ === 83){ 


      lert("Given condition for variable b is true");


      } 


//Output: no output occur

//C


var c = 12;


 if (c++ === 13){


      alert("condition 1 is true");


     }



 if (c === 13){
     
    alert("condition 2 is true"); 

} 


 if (++c < 14)
 
 
 { alert("condition 3 is true");


}



  if(c === 14)
  
  { alert("condition 4 is true"); 

}



 //OUTPUT: Condition 2 is true    


  //        Condition 4 is true
 
 
 //d)
  var materialCost = 20000;
  
  
  var labourCost = 2000; 


 var totalCost = materialCost + labourCost; if (totalCost === labourCost + materialCost)
 
 {
       alert("The cost equals");
    
    }

  //OUTPUT: The cost equals

  //e)
   if (true)
   
   { alert("True"); }
   
   
   if (false)
   
   { alert("False"); }

  //Output: True

  //f)

  if("car" < "cat")
  
  {
        alert("car is smaller than cat"); }

       //Output; car is smaller than cat

//______________________________ANS : 6_______________________________________

 var msub1=+prompt("Obtained marks of subject 1: ");


 var msub2=+prompt("Obtained marks of subject 2: ");


 var msub3=+prompt("Obtained marks of subject 3: ");


 Total=msub1+msub2+msub3;


 Percentage=(Total/300)*100;


 if(Percentage>=80){


     var grade=("A-One<br>Remarks: Excellent");


 }
 else if(Percentage>=70){


     var grade=("A<br>Remarks: Good");


 }
 else if(Percentage>=60){


     var grade=("B<br>Remarks: You need to improve");


 }
 else if(Percentage<60){


    var grade=("Fail<br>Remarks: Sorry ")

 }

 document.write("<h1>Marks Sheet<h1><br >");

 document.write("<br>Total Marks: "+300);

 document.write("<br>Obtained Marks: "+Total);

 document.write("<br>Percentage: "+Percentage+"%");

 document.write("<br>Grade: "+grade);

//_______________________________________________ANS : 7______________________________________

var secret= 7;


 var user=+prompt("Guess the secret number: ");


 if(user>secret && user<9){


   alert("Close enough to correct the answer!");


 }

 else if(user==secret){


   alert("Bingo! Correct answer");


 }


 else{


   alert("Sorry! try again.");


 }


//____________________________________________________ANS : 8___________________________________

 var num=+prompt("Write a number to check whether the number is divisible by 3 or not: ");


 if(num%3==0){


  alert("This number is divisible by 3");


 }


 else{


   alert("This number is not divisible by 3");


 }


//________________________________________________ANS : 9________________________________

 var num=+prompt("Enter a number to check even or odd: ");


 if(num=num%2==0){


  alert("This number is Even");


 }


 else{


   alert("This number is Odd");   
   
   
 }

//________________________________________ANS : 10______________________________________

 var temp=+prompt("Enter Temperature: ");


 if(temp>40){


  alert("It is too hot outside.");



 }


 else if(temp>30){


   alert("The Weather today is Normal.");


 }


 else if(temp>20){



   alert("Today’s Weather is cool.");


 }else if(temp>10){


   alert("OMG! Today’s weather is so Cool.");


 }

//_________________________________________ANS: 11_____________________________________

 var num1=+prompt("Enter first number: ");


 var num2=+prompt("Enter second number: ");


 var oper=prompt("Enter operation: ");


 if(oper==="+"){


   alert(num1+num2);


 }


 else if(oper==="-"){


   alert(num1-num2);

 }


 else if(oper==="*"){


   alert(num1*num2);


}


 else if(oper==="/"){

   alert(num1/num2);

 }
 else if(oper==="%"){

   alert(num1%num2);

 }
