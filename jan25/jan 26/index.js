console.log("hi");

// Take the three numbers from the user as input and alert minimum of those three?

var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
var num3 = prompt("Enter the third number");

if(num1 < num2 && num1 < num3){
	alert(num1 + " is minimum number");
	}
else if(num2 < num3 && num2 < num1){
	alert(num2 + " is minimum number");
}
else{
	alert(num3 + " is minimum number");
	}
	


// Take a character from the user and show whether it is a vowel or consonant?


var char = prompt("enter a letter");

if ( char == "a"|| char == "A"|| char == "e"|| char == "E"|| char == "I"|| char == "i"|| char == "o"|| char == "O"|| char == "u" || char == "U"){
	console.log(char + " is a vowel");
	}
else{
	console.log(char + " is a consonant");
	} 

