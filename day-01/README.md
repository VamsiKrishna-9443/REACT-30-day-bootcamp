# 🚀 Day 01 — Modern JavaScript Basics

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=2800&pause=900&center=true&vCenter=true&width=800&lines=Modern+JavaScript+Basics;Building+the+Foundation+for+React;Variables+%7C+Conditions+%7C+Loops+%7C+Functions" alt="Animated typing heading" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Day-01-111827?style=for-the-badge" alt="Day 01" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-Foundation-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
</p>

<p align="center">
  <b>30-Day React Developer Bootcamp • Day 01</b><br/>
  Building a strong JavaScript foundation before moving into React.
</p>

---

## 🎯 Objective

Day 01 focuses on the **fundamentals of modern JavaScript**.

Before learning React, it is important to understand how JavaScript works because React applications are built using JavaScript concepts such as:

* Variables
* Data types
* Operators
* Conditions
* Loops
* Functions
* Arrays and objects
* String manipulation
* Problem-solving

The goal of Day 01 is to build enough JavaScript understanding to write small programs independently and prepare for more advanced ES6+ concepts in the upcoming days.

---

# 📚 Topics Covered

```text
                    JavaScript Basics
                           │
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
    Variables          Data Types         Operators
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ↓
                    Conditional Logic
                           │
                           ↓
                         Loops
                           │
                           ↓
                       Functions
                           │
                           ↓
                    String Handling
                           │
                           ↓
                   Problem Solving
                           │
                           ↓
                    React Foundation
```

---

# 1. 📦 Variables in JavaScript

Variables are used to store data.

JavaScript provides three ways to declare variables:

```javascript
let
const
var
```

---

## `let`

`let` is used when the value of a variable may change.

```javascript
let age = 22;

age = 23;

console.log(age);
```

Output:

```text
23
```

### Important characteristics

* Block scoped
* Can be reassigned
* Cannot be redeclared in the same scope

Example:

```javascript
let city = "Bangalore";

city = "Hyderabad";
```

---

## `const`

`const` is used when a variable should not be reassigned.

```javascript
const name = "Vamsi";

console.log(name);
```

This is not allowed:

```javascript
const age = 22;

age = 23;
```

### Important characteristics

* Block scoped
* Cannot be reassigned
* Cannot be redeclared in the same scope

For modern JavaScript, prefer `const` by default and use `let` when the value needs to change.

---

## `var`

`var` is the older way of declaring variables.

```javascript
var city = "Bangalore";

console.log(city);
```

`var` is **function scoped**, unlike `let` and `const`, which are block scoped.

Modern JavaScript generally prefers:

```javascript
const
let
```

over:

```javascript
var
```

---

# 2. 🧠 `let` vs `const` vs `var`

| Feature               | `var`         | `let`                  | `const`        |
| --------------------- | ------------- | ---------------------- | -------------- |
| Scope                 | Function      | Block                  | Block          |
| Reassignment          | ✅             | ✅                      | ❌              |
| Redeclaration         | ✅             | ❌                      | ❌              |
| Modern recommendation | Usually avoid | Use when value changes | Default choice |

### Simple rule

```text
Value changes?
     │
   YES → let
     │
    NO
     ↓
  const
```

---

# 3. 🔤 Data Types

JavaScript supports different types of values.

### Primitive data types

```javascript
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

---

## String

Used for text.

```javascript
let name = "Vamsi";
```

---

## Number

Used for integers and decimal numbers.

```javascript
let age = 22;
let price = 99.99;
```

---

## Boolean

Represents either `true` or `false`.

```javascript
let isStudent = true;
```

---

## Undefined

A variable that has been declared but has not been assigned a value.

```javascript
let value;

console.log(value);
```

Output:

```text
undefined
```

---

## Null

Represents an intentional empty value.

```javascript
let data = null;
```

---

## Checking Data Types

JavaScript provides:

```javascript
typeof
```

Example:

```javascript
let name = "Vamsi";
let age = 22;
let student = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof student);
```

Output:

```text
string
number
boolean
```

---

# 4. ➕ Operators

Operators are symbols used to perform operations on values.

---

## Arithmetic Operators

```javascript
+
-
*
/
%
**
```

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

The `%` operator gives the remainder.

This is especially useful for checking even and odd numbers.

```javascript
if (number % 2 === 0) {
    console.log("Even");
}
```

---

# 5. 🔍 Comparison Operators

Comparison operators compare values.

```javascript
>
<
>=
<=
===
!==
```

Example:

```javascript
let age = 22;

console.log(age >= 18);
```

Output:

```text
true
```

---

## `===` vs `==`

Prefer:

```javascript
===
```

because it checks both **value and type**.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Whereas:

```javascript
console.log(5 == "5");
```

can return:

```text
true
```

For modern JavaScript, `===` is generally the safer choice.

---

# 6. 🔗 Logical Operators

JavaScript provides:

```javascript
&&   // AND
||   // OR
!    // NOT
```

### AND

Both conditions must be true.

```javascript
age >= 18 && hasId
```

### OR

At least one condition must be true.

```javascript
isAdmin || isOwner
```

### NOT

Reverses a boolean value.

```javascript
!isLoggedIn
```

---

# 7. 🔀 Conditional Statements

Conditional statements allow programs to make decisions.

---

## `if`

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

## `if...else`

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## `else if`

Used when there are multiple conditions.

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}
```

---

# 8. 🔁 Loops

Loops are used to execute code repeatedly.

The main loop practiced on Day 01 is the `for` loop.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

### Loop structure

```javascript
for (initialization; condition; update) {

    // code to execute

}
```

Example:

```text
i = 1
 ↓
Check condition
 ↓
Execute code
 ↓
i++
 ↓
Check condition again
```

Loops are extremely important for:

* Arrays
* Strings
* Searching
* Counting
* Mathematical problems
* Data structures
* React rendering concepts

---

# 9. 🧩 Functions

A function is a reusable block of code designed to perform a particular task.

```javascript
function greet() {
    console.log("Hello Vamsi");
}

greet();
```

---

## Function Parameters

Parameters allow functions to receive values.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Vamsi");
```

Output:

```text
Hello Vamsi
```

---

## Return Values

Functions can return a result.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Function flow

```text
Arguments
    ↓
Function
    ↓
Processing
    ↓
Return value
```

Understanding functions is particularly important for React because React applications are built around components and reusable logic.

---

# 10. 🔤 String Manipulation

Strings represent text.

```javascript
let text = "React";
```

JavaScript provides many useful string methods.

---

## `length`

```javascript
console.log(text.length);
```

Output:

```text
5
```

---

## `toUpperCase()`

```javascript
console.log(text.toUpperCase());
```

Output:

```text
REACT
```

---

## `toLowerCase()`

```javascript
console.log(text.toLowerCase());
```

Output:

```text
react
```

---

## `split()`

Converts a string into an array.

```javascript
let text = "react";

console.log(text.split(""));
```

Output:

```text
["r", "e", "a", "c", "t"]
```

---

## `reverse()`

`reverse()` is an array method.

Therefore, to reverse a string:

```javascript
let text = "react";

let reversed = text
    .split("")
    .reverse()
    .join("");

console.log(reversed);
```

Output:

```text
tcaer
```

---

## `join()`

Converts an array back into a string.

```javascript
let letters = ["R", "e", "a", "c", "t"];

console.log(letters.join(""));
```

Output:

```text
React
```

### String reversal flow

```text
"react"
   ↓
split("")
   ↓
["r","e","a","c","t"]
   ↓
reverse()
   ↓
["t","c","a","e","r"]
   ↓
join("")
   ↓
"tcaer"
```

---

# 11. 🧮 Problem-Solving Practice

Day 01 also focused on applying the concepts through small programming problems.

---

## Even or Odd

```javascript
function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}
```

### Example

```text
7 → Odd
10 → Even
```

### Concept practiced

* Function
* Parameter
* `%` operator
* `if` statement
* `return`

---

# 12. 🏆 Largest of Three Numbers

The objective is to determine the largest number among three values.

Example:

```text
10
45
30
```

Result:

```text
Largest: 45
```

### Concepts practiced

* Variables
* Comparison operators
* Conditional statements
* Functions
* Logical thinking

---

# 13. 🔄 Reverse a String

Example:

```text
Input:  react
Output: tcaer
```

Using:

```javascript
split()
reverse()
join()
```

This problem demonstrates how different JavaScript methods can be combined to solve a problem.

---

# 14. ✖️ Factorial

The factorial of `5` is:

```text
5 × 4 × 3 × 2 × 1 = 120
```

A loop can be used:

```javascript
function factorial(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
```

Output:

```text
120
```

### Concepts practiced

* Function
* Variable
* `for` loop
* Multiplication
* Accumulation

---

# 15. 🔁 Palindrome

A palindrome reads the same forward and backward.

Examples:

```text
madam → true
racecar → true
hello → false
```

Basic approach:

```text
Original
   ↓
Reverse
   ↓
Compare
   ↓
Same?
 ┌─┴─┐
YES  NO
 ↓    ↓
True False
```

Example:

```javascript
function isPalindrome(text) {

    const reversed = text
        .split("")
        .reverse()
        .join("");

    return text === reversed;
}
```

---

# 📁 16. Folder Structure

```text
day-01/
├── README.md
├── notes.md
└── src/
    ├── basic.js
    ├── evenOdd.js
    ├── largestOfThree.js
    ├── reverseString.js
    ├── factorial.js
    └── palindrome.js
```

Keeping each program in a separate file makes the learning repository easier to understand, maintain, and review.

---

# 💻 17. Programs Included

### `basic.js`

Demonstrates:

* `let`
* `const`
* `var`
* Variables
* Basic output

Example:

```text
Vamsi Krishna 22 Bangalore
```

---

### `evenOdd.js`

Determines whether a number is even or odd.

```text
7 is Odd
10 is Even
```

---

### `largestOfThree.js`

Finds the largest value among three numbers.

```text
Largest: 45
```

---

### `reverseString.js`

Reverses a string using JavaScript string/array methods.

```text
react → tcaer
```

---

### `factorial.js`

Calculates factorial using a `for` loop.

```text
Factorial of 5: 120
```

---

### `palindrome.js`

Checks whether a string is a palindrome.

```text
madam: true
hello: false
```

---

# ▶️ 18. How to Run

From the project root:

### Basic JavaScript

```bash
node day-01/src/basic.js
```

### Even or Odd

```bash
node day-01/src/evenOdd.js
```

### Largest of Three

```bash
node day-01/src/largestOfThree.js
```

### Reverse String

```bash
node day-01/src/reverseString.js
```

### Factorial

```bash
node day-01/src/factorial.js
```

### Palindrome

```bash
node day-01/src/palindrome.js
```

---

# 🧠 19. Concepts Practiced

| Concept         | What I Learned                                  |
| --------------- | ----------------------------------------------- |
| `let`           | Block-scoped variable that can be reassigned    |
| `const`         | Block-scoped variable that cannot be reassigned |
| `var`           | Function-scoped legacy variable declaration     |
| Data Types      | Different kinds of values handled by JavaScript |
| Operators       | Arithmetic, comparison and logical operations   |
| `if/else`       | Conditional decision-making                     |
| `for` loop      | Repeated execution                              |
| Functions       | Reusable blocks of logic                        |
| Parameters      | Passing data into functions                     |
| `return`        | Returning a result from a function              |
| Strings         | Working with text                               |
| `split()`       | Converting strings into arrays                  |
| `reverse()`     | Reversing array elements                        |
| `join()`        | Combining array elements into a string          |
| Problem Solving | Applying concepts to small coding problems      |

---

# 🔍 20. Important JavaScript Rules Learned

### Prefer `const` by default

```javascript
const name = "Vamsi";
```

Use `let` when the value needs to change:

```javascript
let count = 0;
count++;
```

---

### Prefer strict equality

```javascript
value === expected
```

instead of:

```javascript
value == expected
```

---

### Write reusable functions

Instead of repeating:

```javascript
console.log(a + b);
```

create reusable logic:

```javascript
function add(a, b) {
    return a + b;
}
```

---

### Break problems into smaller steps

For example, palindrome checking:

```text
Input
 ↓
Reverse
 ↓
Compare
 ↓
Return result
```

This approach improves logical thinking and makes larger problems easier to solve.

---

# 🧪 21. Self-Assessment

* [x] Node.js installed
* [x] VS Code configured
* [x] GitHub repository created
* [x] Variables understood
* [x] Data types practiced
* [x] Operators practiced
* [x] Conditional statements practiced
* [x] Loops practiced
* [x] Functions practiced
* [x] String manipulation practiced
* [x] Six JavaScript programs completed
* [x] Programs executed successfully
* [x] Code committed to GitHub

---

# 📌 22. Git Commands Used

```bash
git add .
git commit -m "Day 1 completed - JavaScript Basics"
git push origin main
```

---

# 💡 23. What I Learned Today

Day 01 established the foundation for my JavaScript learning journey.

### Key takeaways

* JavaScript is the programming language behind React.
* Variables allow applications to store and manage data.
* Conditions allow programs to make decisions.
* Loops allow repetitive operations to be automated.
* Functions help create reusable and organized logic.
* String methods make text manipulation easier.
* Small programming problems improve problem-solving skills.
* Writing and executing programs independently is more valuable than simply memorizing syntax.
* Understanding JavaScript fundamentals will make learning React much easier.

---

# 🚀 24. React Connection

The concepts learned today are directly connected to React.

```text
JavaScript Fundamentals
          ↓
Variables & Data
          ↓
Functions
          ↓
Conditions & Logic
          ↓
Arrays & Objects
          ↓
ES6+ Features
          ↓
React Components
          ↓
State & Props
          ↓
API Integration
```

Day 01 therefore acts as the **foundation layer** for the rest of the bootcamp.

---

# 🏆 25. Day 01 Completion

```text
┌──────────────────────────────────────┐
│       DAY 01 — COMPLETED ✅          │
├──────────────────────────────────────┤
│ Variables              ✅            │
│ Data Types             ✅            │
│ Operators              ✅            │
│ Conditions             ✅            │
│ Loops                  ✅            │
│ Functions              ✅            │
│ Strings                ✅            │
│ Problem Solving        ✅            │
└──────────────────────────────────────┘
```

---

# 📈 Bootcamp Progress

| Day        | Topic                          | Status      |
| ---------- | ------------------------------ | ----------- |
| **Day 01** | Modern JavaScript Basics       | ✅ Completed |
| Day 02     | Arrays & Objects               | 🔜 Next     |
| Day 03     | Modern JavaScript ES6+         | 🔜 Upcoming |
| Day 04     | Asynchronous JavaScript & APIs | 🔜 Upcoming |

---

# 👨‍💻 Author

**Vamsi Krishna**
B.Tech CSE (AI & ML) — 2026
Aspiring **Java Backend & React Developer**

---

# 🔥 Day 01 → Day 02

Day 01 focused on the **basic building blocks of JavaScript**:

```text
Variables
   ↓
Data
   ↓
Conditions
   ↓
Loops
   ↓
Functions
   ↓
Problem Solving
```

With these fundamentals in place, the next step is to learn how JavaScript handles **collections of data**.

### Coming up in Day 02:

```text
Arrays
   ↓
Array Methods
   ↓
Objects
   ↓
Object Methods
   ↓
map()
filter()
reduce()
   ↓
Practical Data Manipulation
```

**Day 01 builds the foundation. Day 02 starts working with real collections of data.** 🚀

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:7C3AED&height=130&section=footer&text=Day%2001%20Completed%20🚀&fontSize=30&fontColor=FFFFFF&animation=twinkling" alt="Animated footer" />
</p>

<p align="center">
  <b>➡️ Continue to Day 02 — Arrays, Objects & Data Manipulation</b>
</p>
