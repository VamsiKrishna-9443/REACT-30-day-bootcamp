// Callback function without parameters

console.log("Callback function without parameters");

function welcomeUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

welcomeUser("Vamsi", sayGoodbye);


// Callback function with parameters

console.log("\nCallback function with parameters");

function introduceUser(name, callback) {
    console.log("Hello " + name);
    callback(name);
}

function showWelcome(name) {
    console.log("Welcome! " + name);
}

introduceUser("Vamsi", showWelcome);


// Callback function with parameters and return value

console.log("\nCallback function with parameters and return value");

function processUser(name, callback) {
    console.log("Hello " + name);

    let result = callback(name);
    console.log(result);
}

function createGoodbyeMessage(name) {
    return "Goodbye! " + name;
}

processUser("Vamsi", createGoodbyeMessage);


// Callback function with setTimeout

console.log("\nCallback function with setTimeout");

function delayedGreeting(name, callback) {
    console.log("Hello " + name);

    setTimeout(callback, 2000);
}

function delayedGoodbye() {
    console.log("Goodbye!");
}

delayedGreeting("Vamsi", delayedGoodbye);