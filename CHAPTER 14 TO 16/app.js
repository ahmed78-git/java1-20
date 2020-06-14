//________________________________ANS : 1_____________________________________-

 var num=+prompt("How many students names yo want to written: ");

 for(var i=0;i<num;i++){

 var name=[];

 name=prompt("Enter names: ");

 alert(name);

 }

//_________________________________ANS: 2_________________________________________


 var num=+prompt("How many students names yo want to written: ");
 
 for(var i=0;i<num;i++){

 var name={};


 name=prompt("Enter names: ");

alert(name);

 }

//____________________________________ANS : 3________________________________________

 var string=["Ahmed","Ahsan","Maryam"];

 alert(string);


//______________________________ANS : 4__________________________________________

 var num=[126,245,456];

 alert(num);

//______________________________ANS : 5____________________________________________

var boolean = [];

 var num = 5;  

 for (var i = 0; i < num; i++) {

   boolean.push(false);

   alert(boolean);
 }

//_________________________________ANS: 6__________________________________

 var mix=["Ahmed ",128,"256",1];

 alert(mix);

//________________________________ANS : 7___________________________________-

 var dates=["1)SSC"+"\n2)HSC"+"\n3)BCS"+"\n4)BS"+"\n5)BCOM"+"\n6)MS"+"\n7)M.phil"+"\n8)PhD"];

 alert(dates);

//______________________________ANS: 8__________________________________________

 var students=["Micheal","John","Tony"];

 var score=[320,230,480];

 percentage1=(500/score[0])*100;

 percentage2=(500/score[1]*100);

 percentage3=(500/score[2]*100);

 alert("Score of "+students[0]+" is "+score[0]+".Percentage: "+percentage1);

 alert("Score of "+students[1]+" is "+score[1]+".Percentage: "+percentage1);

 alert("Score of "+students[2]+" is "+score[2]+".Percentage: "+percentage1);

//_______________________________ANS : 9_________________________________________

 alert("Colors Are: ");

 var color=["red","yellow","green","blue","pink"];

 alert(color);

 var what=prompt("what color you want to add to the beginning: ");

 color.unshift(what);

 alert("Add color in the behginning: "+color);

 var what=prompt("what color you want to add to the End: ");

 color.push(what);

 alert("Add color in last: "+color);


 alert("2 more colors are added.");

 color.unshift("black","white");

 alert("Add 2 Colors: "+color);

 color.shift();

 alert("Delete First Color: "+color);
 
 color.pop();

 alert("Delete Last Color: "+color);

 var index=+prompt("Which index you want to add a color: ");

 var which=prompt("Which color: ");

 color[index]=which;

 alert("Adding what you want: "+color);

 var index2=+prompt("Which index you want to delte colors: ");

 var index3=+prompt("How many colors you want to delete: ");

 color.splice(index2,index3);

 alert("After deleting "+index3+" colors.We have left:  "+color);


//_____________________________________ANS : 10_________________________________________

 var student=[320,230,480,120];

 alert("Score of Students: "+student);

 student.sort();


 alert("After sorting students numbers we have: "+student);

//___________________________________ANS : 11__________________________________________

 var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

 alert("Cities List: \n"+cities);

 var selected=cities.slice(2,5);

 alert("Selected Cities: \n"+selected);

//______________________________ANS : 12_______________________________________

 var arr = ["This" , " is ", " my ", " cat"];

 alert("Array: \n"+arr);

 var string=["This "+" is"+" my"+" cat"];

 alert("String: "+string); 