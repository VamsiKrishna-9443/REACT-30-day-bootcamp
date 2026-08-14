let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce((sum,n) =>{
    return sum + n;
},0);

console.log(total);

let count = numbers.reduce((sum, n) => sum + n, 0);
console.log(count); // 15