console.log("hi");
// write a program to check whether the number is greater than or equal to 10 or not...

/*
var num = prompt("enter the number");
if (num <10){
	console.log("number is less  than 10");
}
else if(num == 10){
	console.log("number is equal 10");
}
else{
	console.log("number is  greater than  10");
}


*/

// Take 3 number and write a program to find maximum of these 3numbers.


var a = prompt("enter the first number");
var b = prompt("enter the second number");
var c = prompt("enter the third number");
var a = parseInt(a);
var b = parseInt(b);
var c = parseInt(c);
if (a>b && a>c){
	console.log(a + " is maximum number");
	}
else if (b>a && b>c){
	console.log(b + " is maximum number");
	}
else{
	console.log(c + " is maximum number");
	}
console.log(typeof a);






