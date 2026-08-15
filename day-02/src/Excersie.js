let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

console.log("Even Numbers:");
let  evenNumbers = numbers.filter((n) => n % 2 == 0);
console.log(evenNumbers);

let highestNumber = numbers.reduce((max, n) => {
    return n > max ? n : max;
}, numbers[0]);

console.log("Highest Number:", highestNumber);

let totalSum = numbers.reduce((sum,n) => sum + n,0);
console.log("Total Sum:", totalSum);