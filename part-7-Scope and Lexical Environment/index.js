

function a(){
    c();
    function c(){
        console.log(b);
    }
}

var b = 10;

a(); // 10

// ---------------

function d(){
    var e = 20;
    function f(){
        
    }
}

console.log(e); // ReferenceError: e is not defined
