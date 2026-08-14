let numbers = [1, 2, 3, 4, 5];

// Using Map() to iterate over the array and create a new array with the square of each number

let squareNumbers = numbers.map((n) => {
    return n ** 2;
})

console.log("Using Map() to iterate over the array and create a new array with the square of each number");
console.log(squareNumbers);

// With String Array
let names = ["vamsi", "Aashitha", "bhoomika"];

let uppercaseNames = names.map((name) =>{
    return name.toUpperCase();
})
console.log(uppercaseNames);