// Rest operator allows us to collect the remaining elements of an array or object into a new array or object.

// For Arrays first
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);


// For Objects
const user = {
    name: "Vamsi",
    age: 24,
    city: "Bengaluru",
    country: "India"
}
console.log("Using Rest operator to extract remaining properties from an object:");
const { name, age, ...otherDetails } = user;

console.log("Name:", name);
console.log("Age:", age);
console.log("Other Details:", otherDetails);