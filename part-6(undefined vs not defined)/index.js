
console.log(a) // undefined 

var a = 7;

// console.log(x) // ReferenceError: x is not defined

// ---------------

var b ;

console.log(b) // undefined

b = 10;
if (b === undefined){
    console.log('b is undefined')   // if b has no value then it is undefined
}
else{
    console.log('b is not undifined (has a value)') // b is defined | if b has a value then it is not undefined
}

// ---------------

var c ;
console.log(c) // undefined
var c = 10;
console.log(c) // 10  
var c = "hell world";
console.log(c) // hell world


// ---------------

var d ;

d = null;
if (d >= 0) {
    console.log(' d is bigger as 0');
}
else if (d === 0){
    console.log('d  === 0')
}
else if (d <= 0) {
    console.log('d is smaller as 0')
}