
// console.log(a); // can't access 'a' before initialization

// console.log(c) // can't access 'a' before initialization

// console.log(b) // undefined

let a = 10;
// let a = 110 // you can't redeclare 'a' in the same scope

console.log(a); // 10

a = 20;

console.log(a); // 20

var b = 100;

const c = 200;
// const c = 300 // you can't redeclare 'c' in the same scope
