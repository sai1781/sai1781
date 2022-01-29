console.log("hi");




var n = prompt("enter the number the values you want");
var arr = new Array(n);
for(var i = 0; i<=n; i++){
	var c = prompt("enter the value");
	arr.push(c);
	}
var max = arr[0];
for(var j=0; j<=arr.length; j++){
	if(max <arr[j]){
		max = arr[j];
		}
	}
	console.log(max);



