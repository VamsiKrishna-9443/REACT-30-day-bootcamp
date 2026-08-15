// Spread operator allows us to expand an iterable (like an array or object) into individual elements. It is denoted by three dots (...).

// For Arrays first

const nums1 = [1,2,3];
const nums2 = [4,5,6];

// Old way of combining arrays
const combinedOld = nums1.concat(nums2);
console.log(combinedOld); // [1,2,3,4,5,6]

// Using spread operator
const combinedNew = [...nums1,...nums2];
console.log(combinedNew); // [1,2,3,4,5,6]


const copy = [...nums1];
console.log(copy); // [1,2,3]

const copwithExtra = [...nums1,7,8,9];
console.log(copwithExtra); // [1,2,3,7,8,9]


// For Objects 
const user ={
    name : "Vamsi",
    age :21,
    city  : "Bengaluru"
}

const usercopy = {...user};
console.log(usercopy); // {name: "Vamsi", age: 21, city: "Bengaluru"}
const updatedUser = {...user,country : "India"}
console.log(updatedUser); // {name: "Vamsi", age: 21, city: "Bengaluru", country: "India"}