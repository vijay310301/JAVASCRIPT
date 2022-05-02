let fruit = [
    {name:"Apple",count:23,},
    {name:"Orange",count:20,},
    {name:"PineApple",count:1,},
    {name:"Watermelon",count:10,},
    {name:"Pomogranate",count:50,},
    {name:"Banana",count:50,},

];
console.log("Array before sorting:/n");
console.log(fruit);

console.log("Array after sorting:/n");

fruit.sort(function(a,b){
    if(a.count < b.count)
    return -1;
    if(a.count > b.count)
    return 1;
    return 0;

});
console.log(fruit);



/* let my_sort = (a,b) => a.count - b.count;

let sorted = fruit.sort(my_sort);
console.log(sorted);
*/

//for ..each method

let animals = ['dog','cat','lion','snake'];

let show = (item,index,object) => {
    console.log(item,index,object);
}

animals.forEach(show);



let numbers = [1,4,6];
let add5 = (item,index) => {
    item+=5;
    console.log(item,index);
}
numbers.forEach(add5);



























