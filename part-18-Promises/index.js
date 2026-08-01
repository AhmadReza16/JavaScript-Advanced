const cart = [ "shoes", "pants", "kurta"];


//   this is called multiple time execution of function
createOrder( cart , function (orderId){
    proceedToPayment(orderId);
});



// thats called just one time execution of function
const Promise = createOrder(cart);

Promise.then(function (orderId) {
    proceedToPayment(orderId);
});

// ---------------------------------------------------