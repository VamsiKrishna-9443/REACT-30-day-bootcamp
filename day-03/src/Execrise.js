// Clone Object 

const user = { name: "Vamsi", age: 24, city: "Bengaluru" }; 

const userCopy = {...user};
console.log(userCopy); // { name: "Vamsi", age: 24, city: "Bengaluru" }


// Merge two arrays using spread operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArray = [...arr1,...arr2];
console.log(mergedArray); // [1,2,3,4,5,6]


// Nested destructuring
const userDetails = {   
    id: 1,
    name: "Vamsi",
    city: "Bengaluru",
    country: "India"
    
}

const { name, address: { city, country } } = userDetails;
console.log(name);
console.log(address); // Bengaluru India

// Default Parameters
function greet(name = "Guest"){
    console.log(`Hello ${name}`);
}
greet("Vamsi");
greet();

// function conversion
function add(a, b) {
    return a + b;
}
const addArrow = (a,b) => a + b;