const arr = [5 , 1 , 3 , 2 , 6 , 7 , 8]

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

function isOdd(x){
    return x % 2;
}

function isEven(x){
    return x % 2 ===0;
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);
const output4 = arr.filter(isOdd);
const output5 = arr.filter(isEven);


console.log(output1);   //  [ 10, 2, 6, 4, 12, 14 ]

console.log(output2);   //  [ 15, 3, 9, 6, 18, 21 ]

console.log(output3);   //  [ "101", "1", "11", "10", "110", "111" ]

console.log(output4);   //  [ 5, 1, 3, 7 ]

console.log(output5);   //  [ 2, 6, 8 ]