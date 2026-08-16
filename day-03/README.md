🚀 Day 03 — Modern JavaScript ES6+ Features
�
￼ 

�
￼ ￼ ￼ ￼ 

�
30-Day React Developer Bootcamp • Day 03
Learning modern JavaScript syntax and patterns used extensively in React applications. 

🎯 Objective
Day 03 focuses on ES6+ JavaScript features that make code shorter, cleaner, more expressive, and easier to maintain.
According to the bootcamp plan, Day 03 covers:
Arrow functions
Template literals
Destructuring
Spread operator
Rest operator
Default parameters
Practical function conversion
Nested destructuring
Array and object operations
Transforming monthly salary into annualSalary
These features are especially important for React because modern React code uses them constantly when working with:
Components
Props
State
Arrays
Objects
Function callbacks
API data
Event handlers
📚 Day 03 Learning Map
MODERN JAVASCRIPT ES6+
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
   Arrow Functions      Template Literals    Destructuring
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
       Spread               Rest          Default Parameters
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ▼
                     Cleaner JavaScript
                              │
                              ▼
                     React Development
1. ⚡ Arrow Functions
Arrow functions provide a shorter syntax for writing functions.
Traditional function
function add(a, b) {
    return a + b;
}
Arrow function
const add = (a, b) => {
    return a + b;
};
For a single expression, the function can be shortened further:
const add = (a, b) => a + b;
Syntax
const functionName = (parameters) => {
    // function body
};
🔍 Arrow Function Variations
No parameters
const greet = () => {
    console.log("Hello Vamsi");
};
One parameter
Parentheses can be omitted for a single parameter:
const square = number => number * number;
You can also write:
const square = (number) => number * number;
Multiple parameters
const multiply = (a, b) => a * b;
Multiple statements
When using multiple statements, use braces and an explicit return when a value needs to be returned.
const calculate = (a, b) => {
    const sum = a + b;
    const result = sum * 2;

    return result;
};
2. 🧠 Arrow Functions and React
Arrow functions are extremely common in React.
For example:
const handleClick = () => {
    console.log("Button clicked");
};
They are also commonly used with array methods:
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);
This makes arrow functions an important prerequisite for React.
3. 📝 Template Literals
Template literals provide a convenient way to create strings using backticks:
``
Instead of:
const name = "Vamsi";
const age = 22;

console.log("My name is " + name + " and I am " + age + " years old.");
we can write:
const name = "Vamsi";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
${} Expression Interpolation
Expressions can be placed inside:
${expression}
Example:
const a = 10;
const b = 20;

console.log(`The sum is ${a + b}`);
Output:
The sum is 30
🔥 Why Template Literals Matter in React
Template literals are useful when creating dynamic text.
const user = "Vamsi";

const message = `Welcome, ${user}!`;

console.log(message);
They make dynamic strings easier to read than long string concatenations.
4. 🧩 Destructuring
Destructuring allows values to be extracted from arrays or objects and assigned to variables using a concise syntax.
There are two major forms:
Array Destructuring
Object Destructuring
5. 📦 Array Destructuring
Suppose we have:
const numbers = [10, 20, 30];
Without destructuring:
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
With destructuring:
const [first, second, third] = numbers;
Now:
console.log(first);
console.log(second);
console.log(third);
Output:
10
20
30
⏭️ Skipping Array Values
You can skip elements using commas.
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
Output:
10
30
🔄 Swapping Variables
Array destructuring can also be used to swap values.
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
Output:
20
10
6. 🏷️ Object Destructuring
Consider:
const user = {
    name: "Vamsi",
    age: 22,
    city: "Bangalore"
};
Without destructuring:
const name = user.name;
const age = user.age;
const city = user.city;
With destructuring:
const { name, age, city } = user;
Now:
console.log(name);
console.log(age);
console.log(city);
🔄 Renaming During Destructuring
If you want a different variable name:
const user = {
    name: "Vamsi",
    age: 22
};

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
Here:
Object property → Local variable

name → userName
age  → userAge
7. 🪆 Nested Destructuring
Objects can contain other objects.
const user = {
    name: "Vamsi",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};
Nested destructuring:
const {
    name,
    address: { city, state }
} = user;
Now:
console.log(name);
console.log(city);
console.log(state);
Output:
Vamsi
Bangalore
Karnataka
Why this matters
API responses often contain nested objects. Destructuring makes accessing deeply nested values more concise.
8. 📤 Spread Operator
The spread operator is written as:
...
It expands the elements of an iterable such as an array or the properties of an object in the appropriate context.
Array Spread
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
Output:
[1, 2, 3]
This creates a new array rather than simply assigning another reference to the same array.
🔗 Merging Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const merged = [...first, ...second];

console.log(merged);
Output:
[1, 2, 3, 4, 5, 6]
9. 📋 Spread with Objects
Example:
const user = {
    name: "Vamsi",
    age: 22
};

const updatedUser = {
    ...user,
    city: "Bangalore"
};

console.log(updatedUser);
Result:
{
    name: "Vamsi",
    age: 22,
    city: "Bangalore"
}
🔄 Updating an Object with Spread
A common pattern is:
const user = {
    name: "Vamsi",
    age: 22
};

const updatedUser = {
    ...user,
    age: 23
};
The later age property overrides the earlier one.
This pattern is especially important in React because state should generally be updated without directly mutating the existing object.
10. 🧮 Rest Operator
The rest operator also uses:
...
But its purpose is different from spread.
Spread
Expands values.
Rest
Collects remaining values.
Rest with Function Parameters
function sum(...numbers) {

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));
Output:
60
The ...numbers parameter collects all remaining arguments into an array.
Rest with Arrays
const numbers = [10, 20, 30, 40];

const [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);
Output:
10
[20, 30, 40]
Rest with Objects
const user = {
    name: "Vamsi",
    age: 22,
    city: "Bangalore",
    role: "Developer"
};

const { name, ...details } = user;

console.log(name);
console.log(details);
Result:
Vamsi

{
    age: 22,
    city: "Bangalore",
    role: "Developer"
}
11. 🆚 Spread vs Rest
Although both use ..., their jobs are different.
Feature
Spread
Rest
Main purpose
Expand values
Collect values
Common use
Copy/merge arrays and objects
Function parameters/destructuring
Direction
Expands
Gathers
Example
[...arr]
(...args)
Easy memory trick
SPREAD
... → opens/unpacks

REST
... → collects the rest
12. 🎯 Default Parameters
Default parameters provide a fallback value when an argument is not provided or is undefined.
Without a default:
function greet(name) {
    console.log(`Hello ${name}`);
}

greet();
The output would contain undefined.
With a default:
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
Output:
Hello Guest
If an argument is provided:
greet("Vamsi");
Output:
Hello Vamsi
13. 🔢 Default Parameters with Multiple Values
function calculateSalary(monthlySalary, bonus = 0) {

    return monthlySalary + bonus;

}

console.log(calculateSalary(50000));
console.log(calculateSalary(50000, 5000));
The default value is used only when bonus is not supplied.
14. 🔗 Combining ES6 Features
Modern JavaScript becomes powerful when these features are combined.
Example:
const user = {
    name: "Vamsi",
    age: 22,
    city: "Bangalore"
};

const { name, ...details } = user;

const updatedUser = {
    ...details,
    role: "Developer"
};

console.log(`User: ${name}`);
console.log(updatedUser);
This single example uses:
Object destructuring
Rest
Spread
Template literals
15. 💼 Practical Exercise — Employee Salary Transformation
The bootcamp verification for Day 03 requires transforming monthly salary into annualSalary in a new array.
Example input:
const employees = [
    {
        name: "Vamsi",
        monthlySalary: 50000
    },
    {
        name: "Rahul",
        monthlySalary: 60000
    },
    {
        name: "Anil",
        monthlySalary: 45000
    }
];
The goal is to create a new array where each employee contains:
monthlySalary
annualSalary
Transformation
const updatedEmployees = employees.map((employee) => ({
    ...employee,
    annualSalary: employee.monthlySalary * 12
}));

console.log(updatedEmployees);
Result
[
    {
        name: "Vamsi",
        monthlySalary: 50000,
        annualSalary: 600000
    },
    {
        name: "Rahul",
        monthlySalary: 60000,
        annualSalary: 720000
    },
    {
        name: "Anil",
        monthlySalary: 45000,
        annualSalary: 540000
    }
]
Concepts combined
employees
    ↓
map()
    ↓
arrow function
    ↓
spread operator
    ↓
calculate annualSalary
    ↓
new array
This is a strong example of how modern JavaScript syntax works together.
16. 🔄 Function Conversion Practice
A common Day 03 exercise is converting traditional functions into arrow functions.
Traditional
function add(a, b) {
    return a + b;
}
Arrow
const add = (a, b) => a + b;
Traditional
function square(number) {
    return number * number;
}
Arrow
const square = number => number * number;
Traditional
function greet(name) {
    return `Hello ${name}`;
}
Arrow
const greet = name => `Hello ${name}`;
The goal is not just shorter code. The important part is understanding how the function behavior remains the same while the syntax becomes more concise.
17. 🧠 Why These Features Matter for React
Modern React code heavily relies on ES6+ syntax.
Arrow functions
Used for event handlers and callbacks:
const handleClick = () => {
    console.log("Clicked");
};
Destructuring
Frequently used with props and state:
const { name, email } = user;
Spread
Frequently used when creating updated arrays or objects:
const updatedUser = {
    ...user,
    name: "New Name"
};
Template literals
Useful for dynamic strings:
const message = `Welcome, ${name}`;
Rest
Useful when collecting remaining arguments or properties:
const { name, ...otherDetails } = user;
Default parameters
Useful when a function needs fallback values:
function greet(name = "Guest") {
    return `Hello ${name}`;
}
These patterns will appear repeatedly throughout the React portion of the bootcamp.
18. 🧩 Common Beginner Mistakes
Mistake 1 — Confusing spread and rest
const copy = [...numbers]; // Spread
versus:
function sum(...numbers) {} // Rest
Remember:
Spread → expand
Rest   → collect
Mistake 2 — Forgetting return
This:
const add = (a, b) => {
    a + b;
};
does not return the result.
Correct:
const add = (a, b) => {
    return a + b;
};
Or use implicit return:
const add = (a, b) => a + b;
Mistake 3 — Destructuring with incorrect property names
Given:
const user = {
    name: "Vamsi"
};
Correct:
const { name } = user;
If you want a different local name:
const { name: userName } = user;
Mistake 4 — Mutating instead of creating a new object
Instead of directly changing the original object:
user.age = 23;
a non-mutating update pattern is:
const updatedUser = {
    ...user,
    age: 23
};
This style becomes especially important when working with React state.
19. 📊 ES6+ Feature Summary
Feature
Main Purpose
Example
Arrow Function
Concise function syntax
const add = (a,b) => a+b
Template Literal
Dynamic strings
`Hello ${name}`
Array Destructuring
Extract array values
const [a,b] = arr
Object Destructuring
Extract object properties
const {name} = user
Nested Destructuring
Extract nested data
const {address:{city}} = user
Spread
Expand/copy/merge
{...user}
Rest
Collect remaining values
(...args)
Default Parameters
Provide fallback values
(name = "Guest")
20. 🧪 Day 03 Exercises
The bootcamp specifies practical exercises around the following concepts:
[x] Convert functions to arrow functions
[x] Create object clones using spread
[x] Merge arrays using spread
[x] Use nested destructuring
[x] Use default parameters
[x] Use rest with arrays
[x] Use rest with objects
[x] Practice template literals
[x] Transform monthly salary into annualSalary
[x] Create a new transformed employee array
21. 🏆 Verification
The main Day 03 verification requirement is:
Transform each employee's monthly salary into an annualSalary property in a new array.
Expected transformation:
monthlySalary
      ↓
monthlySalary × 12
      ↓
annualSalary
      ↓
new array
Example:
const result = employees.map(employee => ({
    ...employee,
    annualSalary: employee.monthlySalary * 12
}));
Verification checklist
[x] Arrow functions understood
[x] Template literals understood
[x] Array destructuring practiced
[x] Object destructuring practiced
[x] Nested destructuring practiced
[x] Spread operator practiced
[x] Rest operator practiced
[x] Default parameters practiced
[x] Functions converted to arrow syntax
[x] Monthly salary transformed to annual salary
[x] New array created without replacing the original array
📁 22. Suggested Folder Structure
day-03/
├── README.md
├── notes.md
└── src/
    ├── arrowFunctions.js
    ├── templateLiterals.js
    ├── arrayDestructuring.js
    ├── objectDestructuring.js
    ├── nestedDestructuring.js
    ├── spreadOperator.js
    ├── restOperator.js
    ├── defaultParameters.js
    └── salaryTransformation.js
💻 23. How to Run
From the project root:
node day-03/src/arrowFunctions.js
node day-03/src/templateLiterals.js
node day-03/src/arrayDestructuring.js
node day-03/src/objectDestructuring.js
node day-03/src/nestedDestructuring.js
node day-03/src/spreadOperator.js
node day-03/src/restOperator.js
node day-03/src/defaultParameters.js
node day-03/src/salaryTransformation.js
💡 24. What I Learned Today
Day 03 moved my JavaScript learning from basic syntax toward the modern JavaScript patterns used in real React applications.
The most important lessons were:
Arrow functions make function syntax concise.
Template literals make dynamic strings easier to read.
Destructuring makes accessing array and object data cleaner.
Nested destructuring is useful for structured data such as API responses.
Spread helps create copies and combine arrays or objects.
Rest collects remaining values into arrays or objects.
Default parameters provide safe fallback values.
Combining these features produces cleaner and more expressive JavaScript.
Transforming data into a new array is an important pattern for React development.
⚛️ 25. React Readiness
Day 03 is an important bridge between basic JavaScript and React.
DAY 01
JavaScript Fundamentals
        ↓
Variables • Conditions • Loops • Functions
        ↓
DAY 02
Arrays • Objects • map • filter • reduce
        ↓
DAY 03
Modern ES6+
        ↓
Arrow Functions
Destructuring
Spread / Rest
Template Literals
Default Parameters
        ↓
DAY 04
Asynchronous JavaScript
        ↓
Callbacks • Promises • async/await
try/catch • fetch • API
        ↓
REACT
By the end of Day 03, the goal is to be comfortable reading modern JavaScript code before moving into asynchronous programming.
📈 Bootcamp Progress
Day
Topic
Status
Day 01
Modern JavaScript Basics
✅ Completed
Day 02
Arrays & Objects
✅ Completed
Day 03
ES6 Features
✅ Completed
Day 04
Async JavaScript
🔜 Next
👨‍💻 Author
Vamsi Krishna
B.Tech CSE (AI & ML) — 2026
Aspiring Java Backend & React Developer
🔥 Day 03 → Day 04
Day 03 focused on making JavaScript modern, concise, and expressive.
The next challenge is learning how JavaScript handles operations that do not finish immediately.
Day 04 continues with:
Modern JavaScript
       ↓
Asynchronous JavaScript
       ↓
Callbacks
       ↓
Promises
       ↓
.then() / .catch() / .finally()
       ↓
async / await
       ↓
try / catch
       ↓
fetch()
       ↓
Public API
       ↓
User Directory
       ↓
Loading • Success • Error
Day 03 taught me how to write modern JavaScript.
Day 04 will teach me how to work with asynchronous data and APIs. 🚀
�
￼ 

�
⚡ Next → Day 04: Async JavaScript, Promises, Fetch & API Integration 
