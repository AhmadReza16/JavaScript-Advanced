const arr = [5 , 1 , 3 , 2 , 6 ];


function finSum(){
    let sum = 0;
    for (let i = 0 ; i < arr.length; i++){
        sum = sum + arr[i];
    } 
    return sum;
}

console.log(finSum(arr)); // 17

const output = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc;
}, 0)
console.log(output); // 17

// ---------------------------------------

const users = [
    {firstName : "jake" , lastName : "peralta", age : 34},
    {firstName : "ray" , lastName : "holt", age : 55},
    {firstName : "amy" , lastName : "santiago", age : 32},
    {firstName : "rosa" , lastName : "diaz", age : 32},
];

const FullName = users.map((x) => x.firstName + " " + x.lastName);

console.log(FullName);  // [ "jake peralta", "ray holt", "amy santiago", "rosa diaz" ]

const ageput =  users.reduce(function (acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
    } else {
        acc [curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageput)  // { 32: 2, 34: 1, 55: 1 }


// -------------------------------

const youngageput = users.filter( (x) => x.age < 35).map((x) => x.firstName);

console.log(youngageput);

// reduce ???????