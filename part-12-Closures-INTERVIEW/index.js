function up(){
    var c = 20
    function x(b){
        function y(){
            console.log(a,b,c)
        }
        var a = 10;
        return y;
    }
    return x;
}
let a = 100
let c = 200
var z = up()("hello world");
z();


// function xx(){

//     function y(){
//         console.log(a)
//     }
//     let a = 10;      let and var no diffrent
//     return y;
// }

// var z = x();
// z();             // stil show number 10 

function counter(){
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count)
    }
}
var counter1 = new counter();
counter1.incrementCounter();counter1.incrementCounter();counter1.incrementCounter();counter1.incrementCounter();
counter1.decrementCounter();counter1.decrementCounter();counter1.decrementCounter();counter1.decrementCounter();