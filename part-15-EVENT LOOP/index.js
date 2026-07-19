console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
}, 5000 );

fetch("https://api.netfilx.com")
.then(function cbF() {
    console.log("CB Netflix");
});

console.log("End")



//  These are displayed in the console in order:
//  Start
//  End
//  CB Netfilx
//  CB SetTimeout
