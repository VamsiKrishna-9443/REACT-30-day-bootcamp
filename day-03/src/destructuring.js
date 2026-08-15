const user = { name: "Vamsi", age: 24, city: "Bengaluru" };

// Old way
const name = user.name;
const age = user.age;

// Destructuring
const { name, age } = user;
console.log(name, age); // Vamsi 24

// Rename while destructuring
const { name: userName } = user;
console.log(userName); // Vamsi

// Default value if property doesn't exist
const { country = "India" } = user;
console.log(country); // India


// Now with Array destructuring
const numbers = [1,2,3,4,5];
const {a,b,c} = numbers;
console.log(a,b,c); // 1 2 3
console.log(a);
conssole.log(b);
console.log(c);
