# 🚀 Day 02 — Arrays, Objects & Data Manipulation

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=2800&pause=900&center=true&vCenter=true&width=820&lines=Day+02+%E2%80%94+Arrays+%26+Objects;map%28%29+%7C+filter%28%29+%7C+find%28%29+%7C+reduce%28%29+%7C+forEach%28%29;Building+the+Foundation+for+React+Data+Handling" alt="Animated Day 02 heading" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Day-02-111827?style=for-the-badge" alt="Day 02" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Arrays-%26%20Objects-2563EB?style=for-the-badge" alt="Arrays and Objects" />
  <img src="https://img.shields.io/badge/React-Foundation-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
</p>

<p align="center">
  <b>30-Day React Developer Bootcamp • Day 02</b><br/>
  Learning how to store, transform, search and analyze collections of data using modern JavaScript.
</p>

---

## 🎯 Objective

Day 02 builds on the JavaScript fundamentals learned in Day 01 and introduces the two most important data structures used constantly in React applications:

- **Arrays**
- **Objects**

The main focus is learning how to process collections of data using:

```text
forEach()
map()
filter()
find()
reduce()
```

The official bootcamp plan defines Day 02 around arrays, objects, `map`, `filter`, `find`, `reduce` and `forEach`, followed by practical exercises and an **Employee Data Analyzer** mini project. fileciteturn0file0L16-L19

---

# 🧭 Day 02 Learning Roadmap

```text
                 DAY 02
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       ARRAYS              OBJECTS
          │                   │
          └─────────┬─────────┘
                    ↓
             Array Methods
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
   forEach()      map()       filter()
       │            │            │
       └────────────┼────────────┘
                    ↓
              find() + reduce()
                    │
                    ↓
             Data Processing
                    │
                    ↓
        Employee Data Analyzer
                    │
                    ↓
            React Data Handling
```

---

# 📦 1. Arrays

An **array** is a collection of values stored in a single variable.

Instead of writing:

```javascript
const employee1 = "Vamsi";
const employee2 = "Rahul";
const employee3 = "Arun";
```

we can store the values together:

```javascript
const employees = ["Vamsi", "Rahul", "Arun"];
```

An array can contain multiple values:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

---

## 🔢 Array Index

JavaScript arrays use **zero-based indexing**.

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

The indexes are:

```text
Apple   → index 0
Banana  → index 1
Mango   → index 2
```

Access an element:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

## 📏 Array Length

The `length` property gives the number of elements.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

Output:

```text
4
```

---

# ➕ 2. Adding and Removing Array Elements

Although Day 02 focuses mainly on data-processing methods, understanding basic array manipulation is important.

### `push()`

Adds an element to the end.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Result:

```text
["Apple", "Banana", "Mango"]
```

### `pop()`

Removes the last element.

```javascript
fruits.pop();
```

### `unshift()`

Adds an element to the beginning.

```javascript
fruits.unshift("Orange");
```

### `shift()`

Removes the first element.

```javascript
fruits.shift();
```

These methods modify the original array.

---

# 🧑‍💻 3. Objects

An **object** stores related information using **key-value pairs**.

Example:

```javascript
const employee = {
    name: "Vamsi",
    age: 22,
    department: "Development",
    salary: 50000
};
```

Here:

```text
name       → "Vamsi"
age        → 22
department → "Development"
salary     → 50000
```

Objects are extremely important in React because API responses and application data are commonly represented as objects.

---

# 🔑 4. Accessing Object Properties

### Dot notation

```javascript
console.log(employee.name);
console.log(employee.salary);
```

### Bracket notation

```javascript
console.log(employee["name"]);
console.log(employee["salary"]);
```

Both access the same property.

---

# ✏️ 5. Updating Object Properties

Objects can be modified:

```javascript
employee.salary = 60000;
```

Now:

```javascript
console.log(employee.salary);
```

returns:

```text
60000
```

---

# ➕ 6. Adding Object Properties

A new property can be added:

```javascript
employee.location = "Bangalore";
```

The object now contains:

```javascript
{
    name: "Vamsi",
    age: 22,
    department: "Development",
    salary: 60000,
    location: "Bangalore"
}
```

---

# 🧩 7. Arrays of Objects

This is one of the most important patterns for React.

Instead of storing simple values:

```javascript
const employees = ["Vamsi", "Rahul", "Arun"];
```

we can store complete employee records:

```javascript
const employees = [
    {
        name: "Vamsi",
        department: "Development",
        salary: 50000
    },
    {
        name: "Rahul",
        department: "Testing",
        salary: 45000
    },
    {
        name: "Arun",
        department: "Development",
        salary: 60000
    }
];
```

This structure is common when working with API data.

```text
Array
 │
 ├── Object
 │    ├── name
 │    ├── department
 │    └── salary
 │
 ├── Object
 │    ├── name
 │    ├── department
 │    └── salary
 │
 └── Object
      ├── name
      ├── department
      └── salary
```

---

# 🔁 8. `forEach()`

`forEach()` executes a function once for every element in an array.

```javascript
const numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
});
```

Output:

```text
10
20
30
```

### Mental model

```text
[10, 20, 30]
     │
     ↓
forEach()
     │
 ┌───┼───┐
 ↓   ↓   ↓
10  20  30
```

---

## `forEach()` with Index

The callback can receive both the value and index:

```javascript
numbers.forEach((number, index) => {
    console.log(index, number);
});
```

Output:

```text
0 10
1 20
2 30
```

---

## When to use `forEach()`

Use `forEach()` when the main goal is to **perform an action for every element**.

For example:

```javascript
employees.forEach((employee) => {
    console.log(employee.name);
});
```

Important:

> `forEach()` does not create a new array as its normal purpose.

---

# 🗺️ 9. `map()`

`map()` creates a **new array** by transforming every element of the original array.

Example:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

### Data flow

```text
Original Array
[1, 2, 3, 4]
      │
      ↓
    map()
      │
      ↓
Multiply each by 2
      │
      ↓
[2, 4, 6, 8]
```

---

# 🎯 10. `map()` with Objects

Suppose:

```javascript
const employees = [
    { name: "Vamsi", salary: 50000 },
    { name: "Rahul", salary: 45000 },
    { name: "Arun", salary: 60000 }
];
```

Get only the employee names:

```javascript
const names = employees.map((employee) => {
    return employee.name;
});
```

Result:

```text
["Vamsi", "Rahul", "Arun"]
```

This concept becomes extremely important in React because lists are commonly rendered using:

```javascript
array.map(...)
```

---

# 🔎 11. `filter()`

`filter()` creates a new array containing only elements that satisfy a condition.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

### Data flow

```text
[1, 2, 3, 4, 5, 6]
          │
          ↓
       filter()
          │
     condition:
     number % 2 === 0
          │
          ↓
      [2, 4, 6]
```

---

# 👨‍💼 12. `filter()` with Objects

Using employees:

```javascript
const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 50000;
});
```

This returns only employees whose salary is greater than `50000`.

Example result:

```javascript
[
    {
        name: "Arun",
        salary: 60000
    }
]
```

---

# 🎯 13. `find()`

`find()` returns the **first element** that satisfies a condition.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => {
    return number > 25;
});

console.log(result);
```

Output:

```text
30
```

Why?

```text
10 → false
20 → false
30 → true  ← first match
40 → not checked
```

---

# 🔍 14. `find()` with Objects

```javascript
const employee = employees.find((employee) => {
    return employee.name === "Arun";
});

console.log(employee);
```

`find()` is useful when you need **one matching object** rather than a collection.

### Difference

```text
filter()
   ↓
returns all matching elements

find()
   ↓
returns first matching element
```

---

# ➕ 15. `reduce()`

`reduce()` is one of the most important array methods.

It processes all elements and combines them into **one final value**.

For example, calculate the sum:

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

---

## Understanding the Accumulator

In:

```javascript
numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

- `sum` = accumulator
- `number` = current array element
- `0` = initial value

The process is:

```text
Initial sum = 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100

Final result = 100
```

---

# 💰 16. `reduce()` for Employee Salary

```javascript
const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
```

If salaries are:

```text
50000
45000
60000
```

then:

```text
50000 + 45000 + 60000 = 155000
```

This is exactly the type of aggregation needed for the Day 02 mini project.

---

# 📊 17. Average Salary Using `reduce()`

First calculate total:

```javascript
const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
```

Then calculate average:

```javascript
const averageSalary = totalSalary / employees.length;
```

This demonstrates how multiple array operations can work together.

---

# 🧠 18. `map()` vs `filter()` vs `find()` vs `reduce()` vs `forEach()`

| Method | Main Purpose | Returns |
|---|---|---|
| `forEach()` | Perform an action for each element | Usually `undefined` |
| `map()` | Transform every element | New array |
| `filter()` | Select matching elements | New array |
| `find()` | Find first matching element | One element / `undefined` |
| `reduce()` | Combine values into one result | Single accumulated value |

### Easy memory trick

```text
forEach → DO
map     → TRANSFORM
filter  → SELECT MANY
find    → SELECT ONE
reduce  → COMBINE
```

---

# 🔥 19. Method Selection Guide

When solving a problem, ask:

### "Do I want to perform an action?"

Use:

```javascript
forEach()
```

### "Do I want to transform every item?"

Use:

```javascript
map()
```

### "Do I want multiple matching items?"

Use:

```javascript
filter()
```

### "Do I want the first matching item?"

Use:

```javascript
find()
```

### "Do I want one final value?"

Use:

```javascript
reduce()
```

---

# 🧪 20. Day 02 Exercises

The bootcamp specifies the following Day 02 exercises: filter even numbers, find the highest number, remove duplicates, calculate a sum using `reduce`, and filter employees by salary. fileciteturn0file0L16-L19

---

## Exercise 1 — Filter Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

Expected:

```text
[2, 4, 6, 8]
```

---

# 🏆 21. Exercise 2 — Find Highest Number

One approach is to use `reduce()`:

```javascript
const numbers = [10, 45, 20, 90, 30];

const highest = numbers.reduce((max, number) => {
    return number > max ? number : max;
}, numbers[0]);

console.log(highest);
```

Expected:

```text
90
```

### Logic

```text
Compare current number
       ↓
Is it greater than max?
   ┌───┴───┐
  YES      NO
   ↓        ↓
Update     Keep max
   └───┬────┘
       ↓
Continue
```

---

# 🔄 22. Exercise 3 — Remove Duplicates

A common modern approach is to use `Set`:

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

Result:

```text
[1, 2, 3, 4, 5]
```

This exercise connects array handling with another useful JavaScript collection type.

---

# ➕ 23. Exercise 4 — Sum Using `reduce()`

```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);
```

Output:

```text
100
```

---

# 💼 24. Exercise 5 — Filter Employees by Salary

```javascript
const employees = [
    {
        name: "Vamsi",
        salary: 50000
    },
    {
        name: "Rahul",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 65000
    }
];

const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 50000;
});

console.log(highSalaryEmployees);
```

Expected result:

```text
Arun → 65000
```

---

# 📊 25. Mini Project — Employee Data Analyzer

The official Day 02 mini project is an **Employee Data Analyzer**.

The project should dynamically process employee data and display:

- Total number of employees
- Average salary
- Highest-paid employee

The verification requirement is that the output must be **dynamically processed rather than hardcoded**. fileciteturn0file0L16-L19

---

## Project Data

```javascript
const employees = [
    {
        name: "Vamsi",
        department: "Development",
        salary: 50000
    },
    {
        name: "Rahul",
        department: "Testing",
        salary: 45000
    },
    {
        name: "Arun",
        department: "Development",
        salary: 65000
    },
    {
        name: "Priya",
        department: "Design",
        salary: 55000
    }
];
```

---

# 👥 26. Total Employees

The number of employees can be calculated dynamically:

```javascript
const totalEmployees = employees.length;

console.log(totalEmployees);
```

Output:

```text
4
```

No hardcoded employee count is required.

---

# 💰 27. Total Salary

Use `reduce()`:

```javascript
const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log(totalSalary);
```

---

# 📈 28. Average Salary

```javascript
const averageSalary = totalSalary / employees.length;

console.log(averageSalary);
```

The result changes automatically if employees are added or removed.

---

# 🏆 29. Highest-Paid Employee

Use `reduce()`:

```javascript
const highestPaidEmployee = employees.reduce((highest, employee) => {

    return employee.salary > highest.salary
        ? employee
        : highest;

}, employees[0]);

console.log(highestPaidEmployee);
```

This dynamically finds the employee with the highest salary.

---

# 🔄 30. Complete Analyzer Flow

```text
                 EMPLOYEE ARRAY
                       │
                       ▼
             ┌───────────────────┐
             │   employees[]     │
             └─────────┬─────────┘
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     length         reduce()       reduce()
        │              │              │
        ↓              ↓              ↓
    Employees     Total Salary    Highest Paid
                       │
                       ↓
                  Average Salary
```

---

# ⚛️ 31. Why Day 02 Matters for React

Arrays and objects are not just basic JavaScript topics.

They are used constantly in React.

For example, API data often looks like:

```javascript
const users = [
    {
        id: 1,
        name: "Vamsi",
        email: "vamsi@example.com"
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@example.com"
    }
];
```

React can later render this data using:

```javascript
users.map((user) => {
    // render user
});
```

Filtering can power:

```text
Search
Filters
Categories
Status selection
```

`find()` can locate:

```text
A particular user
A product
An employee
A task
```

`reduce()` can calculate:

```text
Cart total
Total salary
Statistics
Counts
Aggregated data
```

Therefore, mastering these methods now will make React development much easier.

---

# 🧠 32. Important Day 02 Takeaways

### Arrays

> Arrays store ordered collections of values.

### Objects

> Objects store related data using key-value pairs.

### Array of Objects

> A common structure for representing real-world data and API responses.

### `forEach()`

> Performs an operation for every element.

### `map()`

> Transforms every element and returns a new array.

### `filter()`

> Returns a new array containing elements that satisfy a condition.

### `find()`

> Returns the first element that satisfies a condition.

### `reduce()`

> Processes an array and produces one accumulated result.

---

# 🧪 33. Day 02 Verification

According to the bootcamp, Day 02 is verified through **dynamic data processing**, meaning results should be calculated from the data rather than hardcoded. fileciteturn0file0L16-L19

### Concepts

- [x] Arrays understood
- [x] Array indexing practiced
- [x] Objects understood
- [x] Object properties accessed
- [x] Arrays of objects practiced
- [x] `forEach()` understood
- [x] `map()` understood
- [x] `filter()` understood
- [x] `find()` understood
- [x] `reduce()` understood

### Exercises

- [x] Filter even numbers
- [x] Find highest number
- [x] Remove duplicates
- [x] Calculate sum using `reduce()`
- [x] Filter employees by salary

### Mini Project

- [x] Employee Data Analyzer
- [x] Total employees calculated dynamically
- [x] Average salary calculated dynamically
- [x] Highest-paid employee calculated dynamically
- [x] No hardcoded output

---

# 📁 34. Recommended Folder Structure

```text
day-02/
├── README.md
├── notes.md
└── src/
    ├── arrays.js
    ├── objects.js
    ├── filterEven.js
    ├── highestNumber.js
    ├── removeDuplicates.js
    ├── reduceSum.js
    ├── salaryFilter.js
    └── employeeAnalyzer.js
```

---

# 💻 35. Running the Programs

From the project root:

```bash
node day-02/src/arrays.js
```

```bash
node day-02/src/objects.js
```

```bash
node day-02/src/filterEven.js
```

```bash
node day-02/src/highestNumber.js
```

```bash
node day-02/src/removeDuplicates.js
```

```bash
node day-02/src/reduceSum.js
```

```bash
node day-02/src/salaryFilter.js
```

```bash
node day-02/src/employeeAnalyzer.js
```

---

# 📈 36. Day 01 → Day 02 Progression

Day 01 focused on the basic building blocks:

```text
Variables
   ↓
Data Types
   ↓
Operators
   ↓
Conditions
   ↓
Loops
   ↓
Functions
```

Day 02 builds on those concepts:

```text
JavaScript Fundamentals
          ↓
       Arrays
          ↓
       Objects
          ↓
   Array of Objects
          ↓
    Array Methods
          ↓
 map / filter / find
          ↓
       reduce
          ↓
   Data Processing
          ↓
  Employee Analyzer
```

This progression moves from **basic JavaScript syntax** toward **real-world data manipulation**.

---

# 🚀 37. What I Learned Today

Day 02 helped me understand how JavaScript stores and processes collections of real-world data.

The most important lesson was not just memorizing array methods, but understanding **which method should be used for a particular problem**.

```text
Need to perform an action?
        ↓
    forEach()

Need to transform data?
        ↓
      map()

Need multiple matches?
        ↓
     filter()

Need one match?
        ↓
      find()

Need one final result?
        ↓
     reduce()
```

These methods form an important part of modern JavaScript and will be used heavily when working with React components and API data.

---

# 🏆 Day 02 Completion

```text
┌────────────────────────────────────────┐
│       DAY 02 — COMPLETED ✅            │
├────────────────────────────────────────┤
│ Arrays                     ✅          │
│ Objects                    ✅          │
│ Arrays of Objects          ✅          │
│ forEach()                  ✅          │
│ map()                      ✅          │
│ filter()                   ✅          │
│ find()                     ✅          │
│ reduce()                   ✅          │
│ Data Processing            ✅          │
│ Employee Analyzer          ✅          │
└────────────────────────────────────────┘
```

---

# 📚 Bootcamp Progress

| Day | Topic | Status |
|---|---|---|
| Day 01 | Modern JavaScript Basics | ✅ Completed |
| **Day 02** | **Arrays & Objects** | **✅ Completed** |
| Day 03 | ES6 Features | 🔜 Next |

---

# 🔥 Day 02 → Day 03

Day 02 focused on **working with collections of data**:

```text
Arrays
   +
Objects
   ↓
Array Methods
   ↓
Data Transformation
```

Now that I can store and process data effectively, **Day 03 moves into modern ES6+ JavaScript syntax**.

### Day 03 Preview

```text
Arrow Functions
      ↓
Template Literals
      ↓
Destructuring
      ↓
Spread Operator
      ↓
Rest Operator
      ↓
Default Parameters
      ↓
Cleaner Modern JavaScript
```

The Day 03 bootcamp plan specifically introduces arrow functions, template literals, destructuring, spread/rest and default parameters, followed by practical exercises and a salary transformation task. fileciteturn0file0L20-L23

> **Day 01 taught me how JavaScript works.  
> Day 02 taught me how to work with data.  
> Day 03 will teach me how to write that JavaScript more cleanly and efficiently.** 🚀

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:7C3AED&height=140&section=footer&text=Day%2002%20Completed%20%F0%9F%9A%80&fontSize=30&fontColor=FFFFFF&animation=twinkling" alt="Animated footer" />
</p>

<p align="center">
  <b>➡️ Continue to Day 03 — Modern ES6+ Features</b>
</p>
