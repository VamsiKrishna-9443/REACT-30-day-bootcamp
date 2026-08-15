// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Implicit return (no braces, no `return` keyword)
const add = (a, b) => a + b;

// Single parameter — parentheses optional
const square = (n) => n * n;
const square = n => n * n;

// No parameters — parentheses required
const greet = () => "Hello!";