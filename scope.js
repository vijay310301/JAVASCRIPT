/*
let a=5;
console.log(a);
let A="hi";
console.log(A);



//Global scope

var apple=5;    

console.log(apple);           //Using in global

function add(){

    apple =apple+2;        //Using inside a function
    console.log(apple);
}
add();



//Block scope
console.log(c);

if(true){
    var c=50;             // First declaration inside the block
}


fun();            //Function call befor function defintion

function fun(){
    console.log("hi");
}

//Anonymus functions and hoisting





function sun(){
    console.log("First function");
}
var sun = function(){
    console.log("Anonymous function");
}

function sun(){
    console.log("Second function");
}


sun();



//Function scope


// Declaring variables inside function and Using them globally will produce reference error
function jail(){
    var accust_name="sugan";
    console.log(accust_name);
}
jail();

console.log(accust_name);   //creates error message



//Simple scope accessibility rules:



*/



function show(){             

   let rule=5;            //Declaring inside a function
   rule=4;
    console.log(rule);       //Using it in function
}
show();

 rule=5;
console.log(rule);    // Using it globally
  




 









