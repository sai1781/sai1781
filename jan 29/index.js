console.log("hai");

//User enters a number, check and tell whether that nu,ber is a prime number or not.
//(if users enters abcd. you handle that situation).
num = prompt(" enter the number");
if(isNaN(num)){
	alert("please enter the valid number");
	num = prompt("enter the number");
	if(num % 2 ==0){
		console.log("It is not an prime number");
		}
	else{
		console.log("It is an prime number");
		}
	}
else if(num % 2 == 0){
	console.log("It is  not an prime number");
	}
else{
	console.log("It is an prime number ");
	}

//user will give a string return the count of vowels.
//example nagasai--> output:4


var a = prompt("enter the name");
var c = a.split("");
console.log(c.length);// To know the length of the string.
count = 0;

for(var i=0; i<c.length; i++){
	switch(c[i]) {
	case 'a':
	case 'A':
		count++;
		break;
	case 'e':
	case 'E':
		count++;
		break;
	case 'i':
	case 'I':
		count++;
		break;
	case 'o':
	case 'O':
		count++;
		break;
	case 'u':
	case 'U':
		count++;
		break;
 		}
	}
	console.log(count);
	




