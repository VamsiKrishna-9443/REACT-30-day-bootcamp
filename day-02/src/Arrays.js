// ARRAYS 

let fruits = ["apple","mango","watermelon"];
console.log(fruits[0]); // apple
console.log(fruits[1]);
console.log("Length of the Fruits Array:"+fruits.length); // 3

console.log(fruits);

// Adding new element to the array
console.log("Adding new element to the array");
fruits.push("orange");
console.log(fruits);

//Remove the last element from the array
console.log("Remove the last element from the array");
fruits.pop();
console.log(fruits);

// Add at the beginning of the Array
console.log("Add at the beginning of the Array");
fruits.unshift ("grapes");
console.log(fruits);

// Remove the first element from the array
console.log("Remove the first element from the array");
fruits.shift();
console.log(fruits);