// a(); // a called 
// b();  // typeError: b is not a function

// Function Statement and Function Declaration
function a(){
    console.log("a called")
}
a(); // a called 

// Function Expression 
var b = function (){
    console.log("b called")
}
 b(); // b called


// Anonymos Function 

// function (){
// }

// Named Function Expression 

var c = function xyz(){
    console.log("c called")
}

// Diffrence Between Paramenters & Arguments ?

var d = function (param1,param2){
    console.log(param1,param2,"d called")
}
d(1,2)

// First Class Function - Ability to be used
// First Class Citizens
const e = function (){
    console.log("e called")
}

// Arrow Functions