/*//CharacterCount

var usrChar = prompt("Enter some text below: ");
var lengthofusrChar = usrChar.length;
//var lengthRemaining = 140 - lengthofusrChar;
alert("You have written " + lengthofusrChar + " characters and have " + (140 - lengthofusrChar) + " remaining.");*/

/*//CharacterCount using Slice 

var userPrompt = prompt("Enter some text: ");
alert("Your 140 character count text is: "+ (userPrompt.slice(0,140)));*/

/*//Captialize the first character in a string
var userInput = prompt("Enter your name:");
alert("Hello! " + (userInput.slice(0,1).toUpperCase()) + (userInput.slice(1,userInput.length).toLowerCase()));*/

/*//Calculate Human Age from Dog Age
var dogAge = prompt("Enter your dog's age: ");
var humanAge = ((dogAge-2) * 4) + 21;
alert("Your dog's human age will be: " + humanAge);*/


//Functions
/*//BMI Calculator

function bmiCalculator(weight, height){
    weight/(height)*(height)
}

var bmi = bmiCalculator(68, 1.9);
console.log("Your BMI is " + bmi);*/

//Random Numaber
/*
prompt("Enter your name: ");
prompt("Enter your beau's name: "); 
var num = Math.random();
var randNum = ((num*100)+1);
alert("Your and your beau's love score is " + Math.floor(randNum) + "%"); */

//If-Else Statements
/*
prompt("Enter your name: ");
prompt("Enter your beau's name: "); 
var num = Math.random();
var randNum = ((num*100)+1);

if(randNum > 70){
    alert("Your and your beau's love score is " + Math.floor(randNum) + "% You love each other like kanye loves kanye."); 
}

if(randNum > 30 && randNum <= 70 ){
    alert("Your and your beau's love score is " + Math.floor(randNum) + "%");
}
if (randNum <= 30) {
    alert("Your and your beau's love score is " + Math.floor(randNum) + "% You go together like oil and water.");
}
*/


//BMI Calculator
/*
function bmiCalculator (weight, height) {
    var interpretation = weight/(height*height);

    if (interpretation <= 18.5 ) {
    return "Your BMI is "+ interpretation + ", so you are underweight.";
} if(interpretation > 18.5 && interpretation <= 24.9) {
    return "Your BMI is "+ interpretation + ", so you have a normal weight.";
}
    if(interpretation>24.9){
        return "Your BMI is "+ interpretation + ", so you are overweight.";
    }
    
    return interpretation;
}
*/

//Leap Year
/*
function isLeap(year) { 
    if (year%4===0 && year%400===0 ) {
        return "Leap year."       
    }
    if (year%4!=0 && year%400!=0) {
        return "Not leap year."
    }
    if(year%100!= 0 ){
        return "Leap year."
    }
}

isLeap(2005);
*/


//Arrays
/*
var guestList = ["Sheel", "MoMo", "Shru", "Gaurav", "Vedant"];
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome"); 
} else {
    alert("Access Denied");
}
*/

//FizzBuzz Challange
/*
var output = [];
var count = 1;
function fizzBuzz(){
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz")
    } else if (count % 3 ===0) {
        output.push("Fizz")
    } else if(count % 5 ===0) {
        output.push("Buzz")        
    } else{
        output.push(count);
    }
    count++;
    console.log(output);
    
}
*/

//Random selection from an array 
/*
function whosPaying(names) {
    var arrLength = (names.length);
    var randomPerson = Math.floor(Math.random()*arrLength);
    return (names[randomPerson])+" is going to buy lunch today!";
}
whosPaying(["Sheel", "MoMo", "Shru", "Gaurav", "Vedant"]) */


//While Loop
//Using while loop with FizzBuzz
/*
var output = [];
var count = 1;
function fizzBuzz(){

    while (count <= 100) {
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz")
    } else if (count % 3 ===0) {
        output.push("Fizz")
    } else if(count % 5 ===0) {
        output.push("Buzz")        
    } else{
        output.push(count);
    }
    count++;
}
    console.log(output); 
} */


/*//While looop beer song (My solution)
var count = 100; 
function beer() {
    while (count > 0) {
        count--
        console.log(count + " bottles of beer on the wall,"+ count + " bottles of beer.");
    }
}*/

/* //Angels's solution for while loop 

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
} */


//For Loop

