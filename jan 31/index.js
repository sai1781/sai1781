console.log("hi");


var num = prompt("enter the marks");
parseInt(num);

var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "sudheer",
            "marks": 15
        },
        {
            "name": "ramesh",
            "marks": 17
        },
        {
            "name": "abhay",
            "marks": 19
        },
        {
            "name": "kalli",
            "marks": 21
        },
        {
            "name": "naresh",
            "marks": 0
        },
        {
            "name": "sunil",
            "marks": 27
        },
	
	
    ],
};

var length = obj.students.length
console.log(obj.students.length);


for(var i =0; i<=length; i++){
	if(num < obj.students[i].marks){
		console.log(obj.students[i].name);
		}
	}