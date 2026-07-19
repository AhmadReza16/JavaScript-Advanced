console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");


let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000){
    endDate= new Date().getDate();
}

console.log("While expiers");


//  These are displayed in the console in order:
//  Start
//  End
//  after 10 second show:
//  While expiers
//  Callback

// ----------------------------------

console.log("Start");

function cd(){
    console.log("Callback");
}

setTimeout(cb , 0);

console.log("End");

//  also display in the console is like that:
//  Start
//  End
//  Callback