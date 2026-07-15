// if (true){
//     // Compound Statment
//     var a = 10;
//     console.log(a);
// }

//----------------- 

var a = 100; // This a is a shadow of a inside the block and var can bieing shadowing of let in the block
let b = 200; // This ذ is a shadow of a inside the block.
const c = 300; // This ز is a shadow of a inside the block.

{
    var a = 10; 
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); // 100
console.log(b); // 200
console.log(c); // 300

// If a is not a variable outside the block, it displays these. 
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c); // if b being in a comment : Uncaught ReferenceError: b is not defined

