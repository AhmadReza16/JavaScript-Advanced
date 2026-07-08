

getName();  
console.log(x); // if x is declared after the function call, it will throw an error because of hoisting.
// consol.log(getName);
console.log(getName2); // if getName2 is declared after the function call, it will throw an error because of hoisting.

var x = 7

function getName() {
    console.log("My name is Jake");
}

var  getName2 =() =>{

}

// getName();               //  "My name is Jake"
// console.log(x);          // 7
// console.log(getName);    // [Function: getName]
