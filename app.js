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
var a = +prompt("please enter 1st number will be devided by 2nd number", "you
