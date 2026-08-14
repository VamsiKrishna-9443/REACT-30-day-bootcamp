let numbers = [1, 2, 3, 4, 5];

// Using foreach to iterate over the array
numbers.forEach((n) => { 
    console.log(n);
});
console.log("Using forEach to iterate over the array and print the square of each number");
// Using forEach to iterate over the array
numbers.forEach(function(number) {
    console.log(number **2);
});

console.log("Using ForEach to iterate over the array and print the element multiplied by 3");
// Using forEach with arrow function
numbers.forEach((n) => {
    console.log(n*3);
});