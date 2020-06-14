//  CHAPTER 1 

// 1.ALERTS welcome alert 

alert("welcome to Zee Links\n A world of Network")


// 2. alert of wrong password 

alert("Error! Please enter a valid password");


// 3.alert line break 

alert("Welcome to JS Land...\n Happy Coding");

// 4.alerts im generating are already in sequence

alert("Welcome to JS Land....");
alert("Happy Coding");

// 5. developer console 

console.log("Hello.....I can run JS through Browser's console");




// CHAPTER 2
alert("CHAPTER 2 STARTED");
// 1. declaration of variable 

var username;

// 2. declaration and assignment string to a variable 

var myName = "Mohammad Ayaz Ansari";

// 3. declaration js variable and assign it " HELLO WORLD" then alert it  

var message;
message = "Hello World";
alert(message);


// 4. student bio 

var student1Name = "Mohammad Ayaz Ansari";
var name1Age = 30 + " years old";
var courseName = "Certified Mobile Application Development";
alert(" 1st Student name" + student1Name);
alert(name1Age);
alert(courseName);

// 5. PIZZA alert 
alert("PIZZA\n PIZZ\n PIZ\n PI\n P");

// 6. email concatenation 
var email = "ayaz_ansari1983@yahoo.com";
alert("My email address is " + email);

// 7. declaration variable of book of JS and alert a message related to it  
var book = "A Smarter Way To Learn Java Script";
alert("im trying to learn from the Book " + book);

// 8. write in browser window using JS  
document.write("Yah! I can write HTML content through JavaScript" + "<br>");

// 9. string assign and alert  
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ;
alert(design);


// CHAPTER 3  
alert("chapter 3 started");

// 1. assign age and alert  
var age = 30;
alert("I am " + age + " years old");

// 2. number of visit  
var N = 10;
alert(" You have visited this site " + N + " times");

// 3. birth assign   
var birthYear = 1988;
document.write("My birth year is" + birthYear  + "<br>")
document.write("Dta type of my declared is " + typeof(birthYear) + "<br>");


// 4. visitors name title quantity  
var VisitorsName = "ayaz";
productTitle = "T-shirt(s)";
Quantity = 5;
document.write(VisitorsName + " has ordered " + Quantity  + " " + productTitle + " on xyz Clothing Store");



// CHAPTER 4  
alert("CHAPTER 4 STARTED");

// 1.  3 VARIABLE DECLARATION  

var a = b = c ;


// 2  . declaration of 5 legal and 5 illegal names 
// 5 legal  
var varlname ; 
alertName  ;  
_legalname ;  
$legal;
legal1;
//  var 1; its illegal  
// var n 1 ; its illegal  
// var var; illegal   
// var %; illegal 
// var alert; illegal  

// 3. heading stating rules of JS  variable  
document.write("<h1> Rules of naming JS Variables</h1>" + "<br>" );
document.write("Variable names can only contains" + "<u> letters</u>" +
", " + "<u>numbers, </u>" + "<u> dollar sign</u> " + " and " + "<u>underscore</u> <br>");
document.write("Variables must begin with a" + " <u> dollar sign </u>, " + "<u> under Score </u>" + "or <u> alphabet </u>" +  " For example $name, _name or name" );
document.write("Variable name are case " + "<u> sensitive</u>");
document.write("Variable names shouls not be JS " + "<u>keyword</u>");

// CHAPTER 5 
alert("chapter 5");

// 1. write a program to sum  

var a = +prompt("please enter 1st number", "your number here");
var b = +prompt("please enter 2nd number", "your number here");
var c = a + b ;
document.write("Sum of " + a + " and " + b + " is " + c);

// 2. subtraction 
var a = +prompt("please enter 1st number", "number in which 2nd number will be subtracted");
var b = +prompt("please enter 2nd number", "number to be subtracted from 1st number");
var c = a - b ;
document.write("Subtraction  " + b + " from " + a + " answer is " + c);
// multiplication 
var a = +prompt("please enter 1st number for multiplication", "your number");
var b = +prompt("please enter 2nd number for multiplication", "your number");
var c = a * b ;
document.write("To Multiply  " + a + " and " + b + " answer is " + c);
// division  
var a = +prompt("please enter 1st number will be devided by 2nd number", "your number");
var b = +prompt("please enter 2nd number " , "your number");
var c = a / b ;
document.write("To Devide  " + a + " by " + b + " answer is " + c);
// modulus 
var a = +prompt("please enter 1st number for modulus", "your number");
var b = +prompt("please enter 2nd number",  "your number");
var c = a % b ;
document.write("The Modulus  " + a + " by " + b + " answer is " + c + "<br>");


// 3. mathematics expression 
var num ;
document.write("Value after variable declaration is: ?? " + "<br>");
num = 6;
document.write("initial value: " + num + "<br>");
num = ++num;
document.write("Value of variable after increament is " + num + "<br>");
// add 7 to the variable 
num = 7 + num;
document.write("value of variable after addition 7 in variable" + num + "<br>");
// decreament variable 
num = --num;
document.write("value of variable after decreament is" + num + "<br>" );
// division by 3 
num = num/3 ;
document.write("value of variable after division by 3 is " + num + "<br>" );
document.write("The reminder is : 0 " + "<br>");


// 4. Ticket price 
var ticketPrice = 800;
var totalCost = ticketPrice * 5
document.write("Cost of 5 ticket buying for a movie is " + totalCost);


// 5. Table of 3 
document.write("<h1> Table of 3" + "<br>");
for(var i = 0; i < 10 ; i++){
    var k = 1+i
    var j = 3 * k ;
    document.write("3 x " + k  + " = " + j + "<br>  " );
}


// 6. temperature converter 

var celcius = 30;
// farenheit = (30 * 9 /5) +32 = 86

var Farenheit = 90; 


// celcius = ( 90 - 32 ) * 5/9 = 32.22222222 

document.write( "30" + "<sup>o</sup> C " + "is " + "86 " + "<sup>o</sup> " + "F" + "<br>");
document.write("90" + "<sup>o</sup> F" + "is " + "86 " + "<sup>o</sup> " + "C");


// 7. shopping cart 
var priceOfItem1 = 600;
var priceOfItem2 = 800;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;
document.write("<h1>Shopping Cart</h1>" + "<br>");
document.write("price of item 1 is " + priceOfItem1 + "<br>");
document.write("Quantity of item 1 is " + orderedQuantityOfItem1 + "<br>");
document.write("price of item 2 is " + priceOfItem2 + "<br>");
document.write("Quantity of item 2 is " + orderedQuantityOfItem2 + "<br>");
document.write("Shipping charges "  + shippingCharges + "<br>" + "<br>");
var j = priceOfItem1 * orderedQuantityOfItem1 + priceOfItem2 *orderedQuantityOfItem2 + shippingCharges
document.write("Total cost of your order is " + j  );


// 8. marks sheet 
var totalMarks = 850;
var marksObtained = 520;
var j = 100/totalMarks*marksObtained;
document.write("Total marks " + totalMarks + "<br>");
document.write("Marks obtained " + marksObtained + "<br>");
document.write("Percentage " + j);


// 9. total currency 
var totalCurrency = 10*104.80 + 25*28;
document.write("<h1>Currency in PKR </h1>" + "<br>");
document.write("Total currency in PKR : " + totalCurrency);

// 10. number 
var someNumber = 20;
someNumber = ((someNumber + 5)*10)/2;


// 11. age calculator 
var currentYear = 2020;
var birthYear = 1983;
var age = currentYear - birthYear;
age2 = age + 1
document.write( "<h1>Age Calculator </h1>" + "<br>");
document.write("Current Year " + currentYear + "<br>");
document.write("Birth Year " + birthYear + "<br>");
document.write("Your age is " + age + " or " + age2 );

// 12. area radius 
var r = 10;  //radius
var cOfaCircle = 2*3.142*10;  //circumference of a circle 2 pie r



document.write("<h1>Geometrizer</h1>" + "<br>");
document.write("Radius of a Circle is :" + r + "<br>");
document.write("The circumference is :" + cOfaCircle + "<br>");
var area = 3.142 * r * r ;
document.write("The area is " + area);


// 13. age n snacks 
var favSnack = "Chocolate chip";
var age = 34;
var maxage = 60;
var estimatedPerday = 4;
var totalYears = maxage - age ;
var estimatedTotalsnacks = totalYears*4;
document.write("<h1>The Lifetime Supply calculator</h1> " + "<br>");
document.write("favourite snacks " + favSnack +"<br>");
document.write( "Current age "+ age + "<br>");
document.write("Estimated maximum age " + maxage + "<br>");
document.write("Amount of snacks per day  " + estimatedPerday + "<br>");
document.write("You will need  " +  " " +  estimatedTotalsnacks + " " + favSnack + " to last you until the ripe old age of " + maxage + "<br>");


// CHAPTER 6 to 9

// 1. a++ ++a a-- --a 
var a = +prompt("write a number");
document.write("Result" + "<br>");
document.write("value of   a  is: " + a + "<br>");
document.write(".............................." + "<br>");
a = ++a;
document.write("value of ++a is " + a + "<br>");
document.write("now the value of a is : " + a + "<br>" + "<br>");
a = a++;
document.write("the value of a++ is : "+ a + "<br>");
document.write("now the value of a is :" + a + "<br>" + "<br>");

document.write("the value of --a is" + "<br>");
document.write("now the value of a is : " + a + "<br>" +"<br>");

document.write("the value of  a-- is " + a + "<br>");
document.write("now the value of a is " + a + "<br>");


// 2. pre post increment, decrement 
var a = 2, b = 1;
var result = --a - --b + ++b + b-- ;

// --a it is pre decrement 1 will less before next step and a will be 1;
// 1 - --b again pre decrement will less 1 from b so 1 - 0 
// 1 - 0 and now pre increment in b will make it again 1 so 1 - 0 + 1
// 1 - 0 + 1 and here is post decrement will effect after this step so current value will remain same for current step
// 1 - 0 + 1 + 1 result is 3 
document.write(" a is : 2 " + "<br>" );
document.write(" b is : 1 " + "<br>" );
document.write(" result  is : 3 " + "<br>" );

// 3. prompt n greet 
var name = prompt("write your name");
alert(" Welcome Mr " + name);


//4. its empty 


// 5.. table
var l = +prompt("enter a number");
    
    if ( l > 0){ 
        document.write("<h1> Table of " + l + "<br>");
        for(var i = 0; i < 10 ; i++){
            var k = 1+i
            var j = l * k ;
            document.write(l + " x " + k  + " = " + j + "<br>  " );
        }    
    
}
else{
document.write("<h1> Table of 5" + "<br>");
for(var i = 0; i < 10 ; i++){
    var k = 1+i
    var j = 5 * k ;
    document.write("5 x " + k  + " = " + j + "<br>  " );
}
}




// 6. subjects n marks 

var sub1 = prompt("enter your 1st subjest");
var sub2 = prompt("enter your 2nd subjest");
var sub3 = prompt("enter your 3rd subjest");

var totalMarks = 100;
var sub1Marks = +prompt("enter your " + sub1 + " marks");
var sub2Marks = +prompt("enter your " + sub2 + " marks");
var sub3Marks = +prompt("enter your " + sub3 + " marks");
var totalobtainedmarks = sub1Marks + sub2Marks + sub3Marks;

var sub1per = 100/totalMarks*sub1Marks;
var sub2per = 100/totalMarks*sub2Marks;
var sub3per  = 100/totalMarks*sub3Marks;

document.write("Subject total marks" + "  " + " obtained marks" + " Percentage" + "<br>");

document.write(sub1 + " " + totalMarks + " " + sub1Marks + " " + sub1per + "<br>");
document.write(sub2 + " " + totalMarks + " " + sub2Marks + " " + sub2per + "<br>");
document.write(sub3 + " " + totalMarks + " " + sub3Marks + " " + sub3per + "<br>");




var totalper = sub1per + sub2per + sub3per;
 var tot = totalMarks*3;
 var totalobtainedmarks = sub1Marks + sub2Marks + sub3Marks;
 document.write(tot + " " + totalobtainedmarks + " " + totalper);




//  CHAP 9 TO 11 
// 1. city of light 
var city = prompt("enter city name");
if(city === "Karachi"){
    alert(" Welcome to the  city of light")
}

// 2.male female

var gender = prompt("enter your gender");
if (gender === "male"){
    alert("Good Morning Sir");
}
if (gender === "female"){
    alert("Good Morning Ma'am");
}


// 3. traffic signals  

var color = prompt("write color of traffic signal");

if (color === "Red"){
    alert("Must Stop")
}
if (color === "Yellow"){
    alert("Ready to Move")
}
if (color === "Green"){
    alert("Move now")
}



// 5. statements

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}


// 6. marks n grade
var obtainedMarks = +prompt("enter your obtaining marks");
var totalMarks = +prompt("enter Total Marks");
var percentage = 100/totalMarks*obtainedMarks;
document.write("<h1>Marks Sheet</h1>" + "<br>");

document.write("Total Marks" + totalMarks + "<br>");
document.write("Obtained Marks " + obtainedMarks + "<br>");
document.write( percentage + "<br>");
var remarks ;
var grade ;
if( percentage => 80){
remarks = "Excellent";
grade = "A-One";
}
if( percentage => 70){
remarks = "Good";
grade = "A";
}
if( percentage => 60){
remarks = "You need to improve";
grade = "B";
}
if( percentage < 60){
remarks = "Sorry";
grade = "Fail";
}
document.write("Grade" + grade+ "<br>");
document.write("Remarks " + remarks + "<br>");


// 7. guess number
var a = 5;
var b = +prompt("Guess n enter a number from 1 to 10");
if(b === a){
alert("Bingo : Correct Answer ");
}
if( b+1 === a){
alert("Close enough to correct the answer");
}



//8. Divisible by 3 or not

var a = +prompt("enter any number");
if(a%3 === 0){
alert("given number is divisible by 3");
}
else{
alert("given number is not divisible by 3");
}
