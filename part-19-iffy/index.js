// immediately invoked function expression (IIFE)
// function scoping : IIFE
var foo = "foo";

(function bob(){
    var foo = "foo2";
    console.log(foo);
}) ();


console.log(foo);

// ----------------------

for (var i = 0; i < 5; i++) {
    (function IIFE(){
        var j = i;
        console.log(j);     // 0, 1, 2, 3, 4
    }) ();
}

// ------------------------
// Closure : loop

for (var i = 1; i <= 5; i++) {
    setTimeout(function(){
        console.log("i:" + i);   // 6, 6, 6, 6, 6
    }, i*1000);
}