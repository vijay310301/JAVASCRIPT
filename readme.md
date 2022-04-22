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

 ######