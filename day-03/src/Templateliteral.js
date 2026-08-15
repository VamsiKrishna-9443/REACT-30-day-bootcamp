const name = "Vamsi Krishna";
const age = 24;

// Old way
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal
console.log(`My name is ${name} and I am ${age} years old.`);

// Expressions work too
console.log(`Next year I will be ${age + 1}`);

// Multi-line strings
const message = `Hello ${name}`;