
# java script working #

## #1 Everything in javascript happens inside an "Exection context " ##
### Execution Context ###
* Execution context is like a box.It has two components.
* 1)Memory component or Variable environment.
* 2)code component or thread of execution.
###  Memory component ###
* It is the environment where all the variables and functions are stored as key-value pairs.
### Code compoent  ###
* This is the place  where  code is executed one line at a time


<<<<<<< HEAD
<img src="images/Execution context.webp" alt="not available" width="350" height="300" >
=======
<img src="https://images.viblo.asia/2c66423f-b9af-4eb0-a7b0-7e348a10e267.png" alt="not available" width="350" height="300" >
>>>>>>> 77121902bec2dfbf28b7d23c81262a702b37881d

##  #2 Javascript is a synchronous singe-threaded language ##
* Single-thread --> javascript can execute one command at a time.
* Synchronous --> Javascript can execute one command at a time in a specific order.

## chapter 6  ##
### Type coersion  ###
* When + operator encounters objects of incompatible type, it will attempt to coerce those objects to their values in string format.
* Example:
```javascript 
 console.log(null + {} +true + [] + [5]);  //return .toString() result  for each 
 ```
### Type coersion in Boolean constructors  ###
* Meaningless values still evaluate to either true or false, because these are the only values available for boolean types.
```javascript
let a =Boolean(true);
console.log(a);
let b =Boolean([]);
console.log(b);
let c = Boolean({});
console.log(c);
let d= Boolean(false);
console.log(d);
let e = Boolean(NaN);
console.log(e);
let f =Boolean(null);
console.log(f);
let g = Boolean (Infinity);
console.log(g);
let h = Boolean (undefined);
console.log(h);
let i = Boolean ('');
console.log(i);
let j = Boolean (0);
console.log(j);  
```
* Output:
```javascript 
true
true
true
false
false
false
true
false
false
false
```
### Type coersion  ###
* Coercion is the process of converting a value from one type into another. For
example, number to string, object to string, string to number (if the entire string
consists of numeric characters) and so on...

* The unary plus and minus operators force the value to a number. If the value is not a number, NaN is generated:

* This rule is specific to the unary operator.

```javascript 
//Unary minus , plus type coersion (String to Unary number)
const s ="text";
console.log(s);             //normal
console.log(+s);            //Can't change to number so returns NaN
console.log(-s);             //Can't change to number so returns NaN
```
* Output:

```javascript 
text
NaN
NaN
```
### Number and String arithematics ###
* Let us consider + operator : It behaves in three different ways as below
```javascript
//Sring and number arithematic in + operator
1 + 2;            // + as arithematic
"hello" + "JS" ;     // + as String arithematic
+1 + -12;            // + Unary and arithematic

// opearor +  in string and number
"hello" + 20;   // It converts the  numeric as string and prosuce string o/p
 ```

 *Output:
 ```javascript
 1+2;
3
"hi" + "hello"
'hihello'
+12 + -56;
-44 
 ```

 ```javascript
"hello" + 20;
'hello20'
 ```

 ## Operator Precedence & Associativity Table ##
 *  L-value and R-value 
 ### Assignment Operator ###
The assignment operator takes the R-value and transfers it over to L-value, which
is usually a variable identifier name.
 ### Arithmetic Addition Operator ###
But the arithmetic addition operator takes the L-value and adds R-value to it:

 ### null vs undefined  ###

*  Think of null as a unique type for explicitly assigning a ”nothing” or ”empty”
value to a variable. This way it doesn’t end up undefined.

* The null keyword is used to assign a temporary default value to a variable before
it’s populated with actual object data at a later time in your program.

```javascript
//   assigning a variable to nothing will produce undefined
let bike ;
console.log(bike);

// Assigning a variable to undefined will produce undefined

let motor = undefined;
console.log(motor);

//Assinging a unknown value to null ,we can update the value later in program

let cycle=null;
console.log(cycle);
```

```javascript 
Output:
undefined
undefined
null
```
## Initialize or Update in null ##
* consider the following situation which is initializing and later updating will not be undefined at any cost if we declare it as null
```javascript
// assigning null to a variable and create a new object for it later will not affect it.

let plane =null;

class helicopter{

    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.features = null;
    }
     getFeatures(){
         if (this.features==null)
         {
              console.log(this.features);    //calling original value
            
         }
         else 
         {
             this.features=2;
             console.log(this.features);    //updating the value.
             
            }
         
     }
    }

plane = new helicopter("AirIndia","AR005",2022);
plane.getFeatures();
```

* Output:
```javascript
null
```

# Chapter 7 #

# Scope #

* Scope is simply the area enclosed by {} brackets.
*  But be careful not to confuse it with the identical empty object-literal syntax.
* There are 3 unique scope types:
* The global scope.
*  block scope .
* function scope.

## Scoping in variable definitions ##
# Case-Sensitivity #
* A and a are not same

```javascript
let a=5;
console.log(a);
let A="hi";
console.log(A);
```
* Output:
```javascript
5
hi
```
# explore variable definitions using var keyword and hoisting #
 * When a variable is defined in global scope using var keyword, it also automatically becomes available as a property on window object.
 ```javascript
 //Global scope

var apple=5;    

console.log(apple);           //Using in global

function add(){

    apple =apple+2;        //Using inside a function
    console.log(apple);
}
add();

 ```

 * Output

 ```javascript
 5
7
 ```

 ## Block scope ##

 * Generally speaking, whenever you see {curly brackets}, it is a block.
 * A block scope is the area within if, switch conditions or for and while loops.
* declaring a variable inside block scope will hoist to global scope.

```javascript

//Block scope
console.log(c);

if(true){
    var c=50;             // First declaration inside the block
}
```
* But output is undefined now

```javascript
undefined
```

## Hoisting ##
* Hoisting simply means ”raised” or ”placed on top of”.
* It means that accessing(invoking or calling) functions or variables before we initialize it without error.
* Hoisting is limited to variables defined using var keyword and function name de-fined using function keyword.
###  Function Name Hoisting ###
* We can call function without defining it (It is legal)
```javascript

fun();            //Function call befor function defintion

function fun(){
    console.log("hi");
}



```

* Output:
```javascript
hi
```

### Anonymous function and function hoisting property ###
* It’s important to note, however, that anonymous functions that were assigned to variable names are not hoisted unlike named functions.
* Example:
```javascript

//Anonymus functions and hoisting

function sun(){
    console.log("First function");
}

var sun = function(){
    console.log("Anonymous function [second funcion]");
}

sun();     // calls the second function (Overwritten)

```

* Output:
```javascript
Anonymous function [second funcion]
```
## Procedence ##
* If we have two functions with same name,then we call the function second one will be executed
```javascript
function sun(){
    console.log("First function");
}

function sun(){
    console.log("Second function");
}


sun();     // calls the second function (Overwritten)

```

*Output:
```javascript
Second function
```

* If we have one function and another anonymous with same name ,then caling will produce the anonymous functions result not the second one
```javascript
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

```
* Output:
```javascript
Anonymous function
```

## Defining Variables Inside Function Scope ##
* At this point you might want to know that variables defined inside a function will be limited only to the scope of that function. 
* Trying to access them outside of the function will result in a reference error:

```javascript

// Declaring variables inside function and not using them globaly
function jail(){
    var accust_name="sugan";
    console.log(accust_name);
}
jail();
```
* Output:
```javascript
sugan
```
```javascript
// Declaring variables inside function and Using them globally will produce reference error
function jail(){
    var accust_name="sugan";
    console.log(accust_name);
}
jail();

console.log(accust_name);   //creates error message
```
  
* Output:
```javascript
sugan
/home/guest/Documents/javascript/scope.js:69
console.log(accust_name);   //creates error message
            ^

ReferenceError: accust_name is not defined

```
## Simple scope accessibility rules: ##
* Rule:1 The variable declared in global will be accessed in anywhere in the program

```javascript
//Simple scope accessibility rules:

var rule=5;            //Declaring globally

console.log(rule);    // Using it globally

if(true)
{
    rule=2;               //Using it in block
    console.log(rule);
}

function show(){             //Using it in function
    rule=4;
    console.log(rule);
}
show();

```
* Output:

```javascript
guest@stalin:~/Documents/javascript$ node scope.js
5
2
4
```

* Rule :2  --> The variable declared inside a block can also use it anywhere 
* NOTE: The result will vary according to the position the variable is used

```javascript

if(true)
{

   var rule;            //Declaring block

    rule=2;               //Using it in block
    console.log(rule);
}

function show(){             //Using it in function
    rule=4;
    console.log(rule);
}
show();

console.log(rule);    // Using it globally
```

* Output:

```javascript
guest@stalin:~/Documents/javascript$ node scope.js
2
4
4
```

* Rule:3 --> Defining variables inside function scope is basically one way street ordeal. 
* Nothing can leave the confines of a function into its parent scope.

```javascript

function show(){             

   var rule;            //Declaring inside a function
    rule=4;
    console.log(rule);       //Using it in function
}
show();

console.log(rule);    // Using it globally
```
* Output:
```javascript
guest@stalin:~/Documents/javascript$ node scope.js
4
/home/guest/Documents/javascript/scope.js:90
console.log(rule);    // Using it globally
            ^

ReferenceError: rule is not defined
```

## Variable Types ##
* The keywords var, let and const do not determine the variable’s type. Instead, they determine how the variable can be used:
* var    --> For the most part it is still available but only to support legacy code.
* let    --> let defines a variable but limits its use to the scope in which it was defined.
* const  --> const is the same as let but you can’t re-assign it to a new value once defined.

#  Scope Visibility Differences  #

##  No Difference In Global Scope ##

*  When variables are defined in global scope there is no differences between var, let and const in terms of scope visibility.

*  They all propagate into inner block-level, function-level and event callback scopes:

```javascript

// let ,var and const are same in global scope

 var monday=1;

 let tuesday=2;

 const wednesday=3;

 console.log(monday,tuesday,wednesday);    ///using globally

 function week(){
 
     console.log(monday);                //Using inside a function
     
 
     console.log(tuesday);

     console.log(wednesday);
 }
week();
```

* Output:

```javascript
guest@stalin:~/Documents/javascript$ node scope.js
1 2 3
1
2
3
```
## Keywords let and const limit variable to the scope in which they were defined: ##

```javascript
// let , const and var in block scope

if(true){                   
    var jan=1;                   ///Declaring in block-scope
    let feb=2;
    const mar=3;
     
    console.log(jan,feb,mar);      
}
console.log(jan);           //var will log the value
                       
console.log(feb);           //let  will give reference error

console.log(mar);           //const will also give reference error   
```
* Output:
```javascript
guest@stalin:~/Documents/javascript$ node scope.js
1 2 3
1
/home/guest/Documents/javascript/scope.js:128
console.log(feb);           //let  will give reference error
            ^

ReferenceError: feb is not defined
```

## Variables defined using let and const are not hoisted. Only var is ##
* Hoisting means that using variables even before initializing it
### 1.Hoisting var  ###
 * It will produce default keyword undefined because it onloy allocates placeholder
 ```javascript
 //Hoisting var

console.log(jun);
var jun=55;
 ```

 * Output:
 ```javascript
 guest@stalin:~/Documents/javascript$ node scope.js
undefined
 ```

### 2.Hoistig let and const ###
* It will produce an reference error as let and const will allocate memory in seperate place not in global in execution context.
```javascript
//Histing let
console.log(jul);
let jul=34;

```
* Output:
```javascript
console.log(jul);
            ^

ReferenceError: jul is not defined
```
* Same reference errpr will be come for const also.

## In Function Scope all variable types, including var remain limited to their scope ##
* We cannot access variables outside of the function scope in which they were defined regardless of which keyword was used.
```javascript
// let, var and const are same in function scope

function games(){
    var football=1;              //declaring inside functons
    let cricket=2;
    const hockey=3;

    console.log(football);        //can work inside a function
    console.log(cricket);          
    console.log(hockey);
}
games();

console.log(fotball);          //cannot acces it globaly
```
* Output:
```javascript
guest@stalin:~/Documents/javascript$ node scope.js
1
2
3
/home/guest/Documents/javascript/scope.js:165
console.log(fotball);
```
* The same referece error will be thrown to the other let and const also.


## Closures  ##

* A function closure is a function trapped inside another function:

* Function along with it,s lexical scope forms closure.

```javascript
 var plus =  function (){
    var counter=0;
      return function() {
        counter +=1;
        return counter;
    }

} 
();

console.log(plus());
console.log(plus());
console.log(plus());
```

* Output:

```javascript
guest@stalin:~/Documents/javascript$ node closure.js
1
2
3
```
## Class scope ##

* The class scope is simply a placeholder. Trying to define variables directly in class scope will produce an error

```javascript
class cat {
    let property=1;     //will produce error
    this.property=2;
}
```

* Output:
```javascript
guest@stalin:~/Documents/javascript$ node class.js
/home/guest/Documents/javascript/class.js:2
    let property=1;
        ^^^^^^^^

SyntaxError: Unexpected identifier

```

* In class methods, let (or var or const) only create a local variable to that scope.
* Therefore, it cannot be accessed outside of the method in which it was defined.

```javascript
class cat{
    constructor(){
        let property=1;
        this.something=2;

    }
    methods(){
       
        console.log(this.property);
        console.log(this.something);
    }
}

const a = new cat();

a.methods();
```

* Output:

```javascript
undefined
2
```
## const keyword ##

* The const keyword is distinct from let and var.
* It requires assignment on definition

```javascript
const a;   //shows error
```

* Output:
```javascript
/home/guest/Documents/javascript/const.js:4
const a;   //shows error
      ^

SyntaxError: Missing initializer in const declaration
```
* Reason: value of const cannot be reassigned

```javascript
const b =10;
b=12;
console.log(b);
```
* Output:
```javascript
b=12;
 ^

TypeError: Assignment to constant variable.
```

* CORRECT METHOD:
```javascript
const b =10;   // no error
```
### const and Arrays ###

* Can’t assign any new objects to the original variable name again.

```javascript
const c=[];
c[0]=276;
c[1]=356;
c[2]=456;
console.log(c);
 c = [];         //  reassigning is not allowed
```
* Output:
```javascript
[ 276, 356, 456 ]
/home/guest/Documents/javascript/const.js:16
 c = [];
   ^

TypeError: Assignment to constant variable.
```

### const and Object Literals  ###
* We can't reassign the object but can acces the properties and methods within it

```javascript
 const obj ={
     property : 1 ,
     display : function (){
         console.log("hi")
     }
   
 }                              //Normal object with const keyword

 console.log(obj);              //prints available object

 obj.display();                   //Prints display function

 obj.property=3;           
 console.log(obj);    //We can update the property      

obj.display =  () => {
    console.log("hello");       //We can update the function
}
obj.display();

obj={                          //But we can't reassign ,It will show error
    property :35,
    show : function(){

    }
}
```

* Output:
```javascript
{ property: 1, display: [Function: display] }
hi
{ property: 3, display: [Function: display] }
hello
/home/guest/Documents/javascript/const.js:40
obj={                          //But we can't reassign ,It will show error
   ^

TypeError: Assignment to constant variable.
```

# Chapter 7: Operators #
<br>

## Arithmetic Operators ##
<br>

<img src="images/arithematic.png" alt="Sorry" height="250">

## Assignment Operators ##
<br>

<img src="images/assignment.png" alt="Sorry" height="200">


## String ##
<br>

<img src="images/string.png" alt="" height="200">

## Comparison Opearors ##
<br>


<img src="images/comparison.png" alt="" height="300">
<br>

## Logical Operator  ##
<br>

<img src="images/logical.png" alt="" height="200">

* Logical AND (&&)

* it performs * operation that means,

   
   * 0 0 --> 0
   * 0 1 --> 0
   * 1 0 --> 0
   * 1 1 --> 1

* In other words, If both conditiona are true, only Result is true.

* Logical OR (||)

* it performs + operation that means,

         
   * 0 0 --> 0
   * 0 1 --> 1
   * 1 0 --> 1
   * 1 1 --> 1

* In other words if any one of the condition is true the result is true.

* Logical NOT (!)

     * 0 --> 1
     * 1 --> 0

 * In other words Just opposite.







<br>

## Bitwise Opeartor ##
<br>


<img src="images/bitwise.png" alt="" height="200">
























































































