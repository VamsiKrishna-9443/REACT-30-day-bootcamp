# 🚀 Day 04 — JavaScript Asynchronous Programming

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=2800&pause=900&center=true&vCenter=true&width=750&lines=Callbacks+%7C+Promises+%7C+Async%2FAwait;Try%2FCatch+%7C+Fetch+API;Building+a+User+Directory+with+a+Public+API" alt="Animated typing heading" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Day-04-111827?style=for-the-badge" alt="Day 04" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Async-Programming-2563EB?style=for-the-badge" alt="Async Programming" />
  <img src="https://img.shields.io/badge/API-Fetch-16A34A?style=for-the-badge" alt="Fetch API" />
</p>

<p align="center">
  <b>React 30-Day Developer Bootcamp • Day 04</b><br/>
  Understanding asynchronous JavaScript and building a reliable API-driven User Directory.
</p>

---

## 📚 What I Learned

Day 04 focused on one of the most important foundations for modern web development: **asynchronous JavaScript**.

I learned how JavaScript handles operations that do not finish immediately, how callbacks evolved into Promises, how `async/await` makes asynchronous code easier to read, and how `fetch()` is used to communicate with APIs.

### Core concepts

- ✅ Synchronous vs Asynchronous JavaScript
- ✅ Callbacks
- ✅ Callback Hell
- ✅ Promises
- ✅ Promise states
- ✅ `resolve()` and `reject()`
- ✅ `.then()`
- ✅ `.catch()`
- ✅ `.finally()`
- ✅ `async` functions
- ✅ `await`
- ✅ `try/catch`
- ✅ `fetch()`
- ✅ HTTP response handling
- ✅ `response.ok`
- ✅ `response.json()`
- ✅ Loading, Success and Error states
- ✅ Public API integration
- ✅ User Directory project

---

# 🧠 1. Synchronous JavaScript

Synchronous JavaScript executes statements **one after another**.

```javascript
console.log("Start");

console.log("Middle");

console.log("End");
```

### Output

```text
Start
Middle
End
```

Each statement waits for the previous statement to complete.

### Mental model

```text
Statement 1
    ↓
Statement 2
    ↓
Statement 3
    ↓
Statement 4
```

This works well for small and fast operations.

However, web applications frequently perform operations that can take time:

- API requests
- Database operations
- File operations
- Timers
- Network communication

Waiting for these operations synchronously would make applications feel unresponsive.

---

# ⚡ 2. Asynchronous JavaScript

Asynchronous JavaScript allows JavaScript to start a time-consuming operation and continue executing other code.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Data loaded");
}, 2000);

console.log("End");
```

### Output

```text
Start
End
Data loaded
```

The callback passed to `setTimeout()` runs later.

### Key idea

> Asynchronous JavaScript allows long-running operations to complete later without blocking the rest of the application.

---

# 🔁 3. Callbacks

A **callback** is a function passed as an argument to another function so that it can be executed later.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Vamsi", sayBye);
```

### Flow

```text
greet()
   ↓
Print Hello
   ↓
Execute callback
   ↓
sayBye()
```

### Callback with `setTimeout()`

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Data loaded");
}, 2000);

console.log("End");
```

The function passed to `setTimeout()` is a callback.

---

# 🧩 4. Why Callbacks Are Useful

Suppose we need to:

1. Fetch a user
2. Fetch that user's orders
3. Fetch products
4. Calculate the total

A callback-based approach could look like:

```javascript
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getProducts(orders, function(products) {
            calculatePrice(products, function(price) {
                console.log(price);
            });
        });
    });
});
```

This becomes difficult to read and maintain.

---

# 😵 5. Callback Hell

Deeply nested callbacks are commonly called **Callback Hell**.

```text
getUser()
   │
   └── getOrders()
          │
          └── getProducts()
                 │
                 └── calculatePrice()
```

### Problems

- Difficult to read
- Difficult to debug
- Difficult to maintain
- Error handling becomes complicated
- Code becomes deeply nested

This problem led to cleaner asynchronous patterns such as **Promises**.

---

# 🔮 6. Promises

A **Promise** represents the eventual result of an asynchronous operation.

A Promise has three states:

```text
             ┌─────────┐
             │ PENDING │
             └────┬────┘
                  │
          ┌───────┴───────┐
          ↓               ↓
   ┌────────────┐   ┌────────────┐
   │ FULFILLED  │   │  REJECTED  │
   │  SUCCESS   │   │   ERROR    │
   └────────────┘   └────────────┘
```

### Promise states

| State | Meaning |
|---|---|
| Pending | Operation is still running |
| Fulfilled | Operation completed successfully |
| Rejected | Operation failed |

---

# 🏗️ 7. Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }

});
```

### `resolve()`

Indicates success.

```javascript
resolve(data);
```

### `reject()`

Indicates failure.

```javascript
reject(error);
```

---

# ⛓️ 8. `.then()`

`.then()` handles a successful Promise.

```javascript
promise.then((result) => {
    console.log(result);
});
```

### Flow

```text
Promise
   ↓
Successful?
   ↓
.then()
   ↓
Use result
```

---

# ❌ 9. `.catch()`

`.catch()` handles rejected Promises.

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Flow

```text
Promise
   │
   ├── Success → .then()
   │
   └── Failure → .catch()
```

---

# 🧹 10. `.finally()`

`.finally()` executes whether the Promise succeeds or fails.

```javascript
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Request completed");
    });
```

This is especially useful for loading indicators.

```text
Loading = true
      ↓
   API call
      ↓
 ┌────┴────┐
 ↓         ↓
Success   Error
 ↓         ↓
 └────┬────┘
      ↓
Loading = false
```

---

# ✨ 11. Async Functions

Adding `async` before a function makes it return a Promise.

```javascript
async function hello() {
    return "Hello";
}
```

The function returns a Promise even though the code appears to return a normal string.

```javascript
hello().then((message) => {
    console.log(message);
});
```

---

# ⏳ 12. `await`

`await` waits for a Promise to settle inside an asynchronous function.

```javascript
async function getData() {

    const result = await fetchData();

    console.log(result);

}
```

Instead of chaining:

```javascript
fetchData()
    .then((result) => {
        console.log(result);
    });
```

we can write:

```javascript
const result = await fetchData();
console.log(result);
```

### Why `async/await` is useful

It makes asynchronous code:

- Easier to read
- Easier to understand
- Easier to debug
- Easier to handle with `try/catch`

---

# 🛡️ 13. Try/Catch

`try/catch` is used to handle errors.

```javascript
async function getData() {

    try {

        const result = await fetchData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

### Flow

```text
┌─────────┐
│   TRY   │
└────┬────┘
     │
     ↓
Execute operation
     │
 ┌───┴────┐
 ↓        ↓
Success  Error
 ↓        ↓
Continue  CATCH
          ↓
      Handle error
```

---

# 🌐 14. Fetch API

`fetch()` is a browser API used to make HTTP requests.

```javascript
fetch("https://jsonplaceholder.typicode.com/users");
```

`fetch()` returns a **Promise**.

Therefore, we can use:

```javascript
.then()
.catch()
```

or:

```javascript
async/await
```

---

# 📦 15. Basic Fetch Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response);
    });
```

The response is an HTTP Response object.

It is not yet the actual JavaScript user data.

---

# 🔄 16. `response.json()`

We need to convert the response body into JavaScript data.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Request flow

```text
fetch()
   ↓
HTTP Response
   ↓
response.json()
   ↓
JavaScript Array/Object
   ↓
Use the data
```

---

# 🧪 17. Fetch with Async/Await

This is the pattern I practiced for modern JavaScript:

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error);

    }

}
```

Then:

```javascript
getUsers();
```

---

# 🚨 18. Checking `response.ok`

One important concept is that `fetch()` does not automatically reject for every HTTP error.

Therefore, we should explicitly check:

```javascript
if (!response.ok) {
    throw new Error("Failed to fetch users");
}
```

### Complete pattern

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }

}
```

This pattern is important for real-world API integration.

---

# 👥 19. User Directory Project

## 🎯 Project Objective

Build a simple **User Directory** that retrieves user information from a public API and displays it in the browser.

### Requirements

- Fetch users from a public API
- Display users
- Show loading state
- Show error state
- Handle failed API requests
- Use `async/await`
- Use `try/catch`
- Check `response.ok`
- Convert API response using `response.json()`

---

# 🔗 20. Public API

For this project, I used:

```text
https://jsonplaceholder.typicode.com/users
```

The API returns user objects containing information such as:

```javascript
{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}
```

---

# 🖥️ 21. User Directory Logic

```javascript
async function fetchUsers() {

    try {

        setLoading(true);

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

    } catch (error) {

        setError("Unable to load users.");

    } finally {

        setLoading(false);

    }

}
```

---

# 🔄 22. User Directory State Flow

The application follows this flow:

```text
                 USER DIRECTORY
                       │
                       ▼
                Start API request
                       │
                       ▼
                 Loading = true
                       │
                       ▼
                    fetch()
                       │
              ┌────────┴────────┐
              │                 │
           SUCCESS            FAILURE
              │                 │
              ▼                 ▼
      response.json()        catch(error)
              │                 │
              ▼                 ▼
       Store user data      Show error
              │                 │
              └────────┬────────┘
                       ▼
                Loading = false
```

---

# 🎨 23. UI States

The application has three important states.

## Loading State

```text
Loading users...
```

Displayed while the API request is running.

## Success State

```text
User Directory

Leanne Graham
Sincere@april.biz

Ervin Howell
Shanna@melissa.tv
```

Displayed when the API request succeeds.

## Error State

```text
Unable to load users.
Please try again.
```

Displayed when the API request fails.

---

# ⚛️ 24. Connection to React

These JavaScript concepts directly prepare me for React API integration.

In React, the same logic can be represented using state:

```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

### State responsibilities

| State | Purpose |
|---|---|
| `users` | Stores API user data |
| `loading` | Controls loading UI |
| `error` | Stores/display API error information |

React can then render different UI based on these states.

```text
loading
   ↓
Loading UI

error
   ↓
Error UI

users
   ↓
User List UI
```

This is the foundation for working with APIs inside React components.

---

# 🧠 25. Callback vs Promise vs Async/Await

| Concept | Purpose | Example |
|---|---|---|
| Callback | Execute a function later | `getData(callback)` |
| Promise | Represent future result | `getData().then()` |
| `.then()` | Handle success | `.then(data => ...)` |
| `.catch()` | Handle failure | `.catch(error => ...)` |
| `.finally()` | Always execute afterward | `.finally(...)` |
| `async` | Create async function | `async function getData()` |
| `await` | Wait for Promise | `await fetch(url)` |
| `try/catch` | Handle errors | `try { } catch { }` |
| `fetch()` | Make HTTP request | `fetch(url)` |

---

# 💡 26. Key Differences

### Callback

```javascript
getData((data) => {
    console.log(data);
});
```

### Promise

```javascript
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Async/Await

```javascript
async function getData() {

    try {

        const data = await getDataFromServer();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

### Preferred modern style

For most API code, I practiced:

```text
async/await
    +
try/catch
    +
response.ok
```

---

# 🧩 27. Important Concepts to Remember

### Callback

> A function passed to another function to be executed later.

### Promise

> An object representing the eventual success or failure of an asynchronous operation.

### Async

> Makes a function return a Promise.

### Await

> Waits for a Promise to settle inside an async function.

### Try/Catch

> Provides structured error handling.

### Fetch

> Browser API for making HTTP requests.

### Response JSON

> Converts the HTTP response body into usable JavaScript data.

### Loading State

> Indicates that an asynchronous operation is currently running.

### Error State

> Indicates that an operation failed and provides feedback to the user.

---

# 🚀 28. Real-World API Pattern

A reusable mental model for API requests:

```javascript
async function fetchData() {

    try {

        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        setData(data);

    } catch (error) {

        setError(error.message);

    } finally {

        setLoading(false);

    }

}
```

This pattern can be adapted for:

- User APIs
- Product APIs
- Weather APIs
- Movie APIs
- Dashboard APIs
- Search APIs
- Authentication APIs
- Backend REST APIs

---

# 🏆 29. Day 04 Verification

### Concept Verification

- [x] Understand synchronous JavaScript
- [x] Understand asynchronous JavaScript
- [x] Understand callbacks
- [x] Understand callback hell
- [x] Understand Promises
- [x] Understand Promise states
- [x] Understand `.then()`
- [x] Understand `.catch()`
- [x] Understand `.finally()`
- [x] Understand `async`
- [x] Understand `await`
- [x] Understand `try/catch`
- [x] Understand `fetch()`
- [x] Understand `response.json()`
- [x] Understand `response.ok`

### Project Verification

- [x] Public API integrated
- [x] User list displayed
- [x] Loading state implemented
- [x] Error state implemented
- [x] API failure handled
- [x] Async/await used
- [x] Try/catch used
- [x] Finally used
- [x] API response validated

---

# 📈 30. What I Learned From This Day

Day 04 helped me understand how modern web applications communicate with external services.

The most important progression was:

```text
Callbacks
    ↓
Callback Hell
    ↓
Promises
    ↓
.then / .catch / .finally
    ↓
async / await
    ↓
try / catch
    ↓
fetch()
    ↓
API Integration
    ↓
Loading / Success / Error
    ↓
React API Development
```

The key takeaway is that **API calls are asynchronous**, so applications must properly manage waiting, successful responses, and failures.

---

# 🔥 Day 04 Takeaway

> **Don't just learn how to fetch data. Learn how to manage the complete lifecycle of an asynchronous operation.**

```text
REQUEST
   ↓
LOADING
   ↓
┌───────────────┐
│ API RESPONSE  │
└───────┬───────┘
        │
   ┌────┴─────┐
   ↓          ↓
SUCCESS     FAILURE
   ↓          ↓
DATA        ERROR
   ↓          ↓
   └────┬─────┘
        ↓
   STOP LOADING
```

This foundation will be used heavily throughout my **React learning journey**.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:7C3AED&height=120&section=footer&text=Day%2004%20Completed%20🚀&fontSize=28&fontColor=FFFFFF&animation=twinkling" alt="Animated footer" />
</p>

<p align="center">
  <b>Next Step → Day 05: React Fundamentals ⚛️</b>
</p>
