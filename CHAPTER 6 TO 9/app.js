//___________________________________________ANS: 1___________________________________________

var a = +prompt("Enter any number: ");


document.write("<br />The value of a is: " + a);



document.write("<br /><br />The number of ++a is: " + ++a);



document.write("<br />Now The value of a is: " + a);



document.write("<br /><br />The number of a++ is: " + a++);



document.write("<br />Now The value of a is: " + a);



document.write("<br /><br />The number of --a is: " + --a);



document.write("<br />Now The value of a is: " + a);



document.write("<br /><br />The number of a-- is: " + a--);



document.write("<br />Now The value of a is: " + a);

//____________________________________________________ANS: 2___________________________________


var a = 2, b = 1;


var result = --a - --b + ++b + b--;


document.write("<br /> --a => means a = 1  decreament is done. <br /> --b => means b = 0 fist decreament is done.<br />++b=>means b=1 first increament is done.<br /> b-- => means value print and then decreament will be done in next step. <br /> Result: " + result);

//________________________________________________ANS : 3__________________________________________-



var name = prompt(" What is your name : ");





document.write("<br /> Hellow ! " + name);

//__________________________________________ANS : 5____________________________________________


document.write("<br /><br />Table of 5");


var num = +prompt("Enter A number: ");


if (num > 0) {


    for (var i = 1; i <= 10; i++) {


        document.write("<br/>" + num + " * " + i + " = " + i * num);


    }


}


else {


    for (var i = 1; i <= 10; i++) {


        document.write("<br/>" + 5 + " * " + i + " = " + i * 5);


    }
}

//________________________________________ANS: 6__________________________________________________


var subject1 = prompt("Enter subject 1: ");

var subject2 = prompt("Enter subject 2: ");

var subject3 = prompt("Enter subject 3: ");

var TMarkSub1 = 100;

var TMarkSub1 = 100;

var TMarkSub2 = 100;

var TMarkSub = 300;

var Obtsub1 = +prompt("Obtained marks of subject 1: ");

var Obtsub2 = +prompt("Obtained marks of subject 2: ");

var Obtsub3 = +prompt("Obtained marks of subject 3: ");

Total = Obtsub1 + Obtsub2 + Obtsub3;

Percentage1 = (Obtsub1/TMarkSub1) * 100;

Percentage2 = (Obtsub2/TMarkSub2) * 100;

Percentage3 = (Obtsub3/TMarkSub3) * 100;

Percentage = (Total/TMarkSub) * 100;


document.write("<h3>Subjects<h3>" + "<br>" + subject1 + "=>  100 out of: " + Obtsub1 + "<br>" + subject2 + " =>  100 out of : " + Obtsub2 + "<br >" + Subject3 + "=>  100 out of: " + Obtsub3);

document.write("<br>Total Marks: "+Total);

document.write("<br>Percentage: "+Percentage+"%");