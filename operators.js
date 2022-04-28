//Bitwise AND

let a=3;         //converted  as 0011

let b=5;           //coverted as 0101

console.log(a & b);       // res 0001  --> 1


//Bitwise OR

let c=10;              // converted as 1010

let d= 8;              // converted as 1000

console.log(c | d)             // res 1010  --> 10

//Bitwise XOR

let e=6;              // converted as 0110

let f= 9;              //converted as 1001

console.log(e ^ f)             // res 1111 -->  15

//Bitwise NOT

let g=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( ~g)      // res 11111111111111111111111111111010 (~5 = -6) 


//Bitwise Leftshift

let h=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( h << 1)  // 00000000000000000000000000000101  (5)
                      // 00000000000000000000000000001010  (1 left shift of 5) --> 10

 
//Bitwise Rightshift 

let i=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( h >> 1)  // 00000000000000000000000000000101  (5)
                      // 00000000000000000000000000000010  (1 right shift of 5) --> 2














