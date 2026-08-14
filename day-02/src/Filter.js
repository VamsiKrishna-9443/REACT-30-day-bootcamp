let number = [1,2,3,4,5,6,7,8,9,10];

let EvenNumbers = number.filter((n) => { 
    return n%2 === 0;
})

console.log("Using filter() to iterate over the array and create a new array with even numbers");
console.log(EvenNumbers);


//Example with Objects
let students = [
  { name: "A", passed: true },
  { name: "B", passed: false },
  { name: "C", passed: true }
];

let passedStudents = students.filter((student) => {
    return student.passed === true;
})

console.log(passedStudents);

let passedStudentNames = students.filter(s => s.passed);
console.log(passedStudentNames);

let passedStudentNamesOnly = passedStudents.map(s => s.name);
console.log(passedStudentNamesOnly);