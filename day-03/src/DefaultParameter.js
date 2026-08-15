function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Vamsi");
greet();


// Arrow function version
const greet = (name = "Guest") => {
    console.log(`Hello ${name}`);
};

greet("Vamsi");
greet();

// Default parameters can also be used in combination with destructuring
function displayUser({ name = "Guest", age = 0 } = {}) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Vamsi", age: 24 });
displayUser({ name: "Vamsi" });
displayUser();

function calculatePrice(price, tax = 18) {
    return price + tax;
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));