console.log("hi");


// print the first n numbers of a fibonacci series?


var count = prompt("enter the number");
var num1=0;
var num2=1;
 console.log(num1);
 console.log(num2);
var num3;
    for(var i =2;i<=count;i++)
     {
	    num3=num1+num2;
	      console.log(num3);
	        num1=num2;
	         num2=num3;
     }	


// Take input n from user and print all the numbers in reverse order.

var num1 = prompt("enter the number");
var num1 = parseInt(num1);
var reverse = 0;

while(num1 != 0){
	reverse = (reverse*10)+(num%10);
	num1 = num1/10;
	}
console.log("Reverse Number : "+reverse);





