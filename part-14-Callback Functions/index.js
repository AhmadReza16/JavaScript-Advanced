function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function(){
        console.log("Butten Clicked", ++count);
    });
}
attachEventListeners();