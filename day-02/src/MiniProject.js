// Employee Data Analyzer

const employees = [
  { id: 1, name: "Vamsi", salary: 50000 },
  { id: 2, name: "Krishna", salary: 65000 },
  { id: 3, name: "Yadav", salary: 45000 },
  { id: 4, name: "Rahul", salary: 80000 },
  { id: 5, name: "Anjali", salary: 70000 }
];

console.log("===== Employee Data Analyzer =====");

// 1. Total Employees
const totalEmployees = employees.length;
console.log("Total Employees:", totalEmployees);

// 2. Total Salary using reduce()
const totalSalary = employees.reduce((sum, emp) => {
  return sum + emp.salary;
}, 0);

console.log("Total Salary:", totalSalary);

// 3. Average Salary 
const averageSalary = totalSalary / totalEmployees;
console.log("Average Salary:", averageSalary.toFixed(2));

// 4. Highest-Paid Employee using reduce()
const highestPaidEmployee = employees.reduce((highest, emp) => {
  return emp.salary > highest.salary ? emp : highest;
});

console.log("Highest Paid Employee:");
console.log("Name:", highestPaidEmployee.name);
console.log("Salary:", highestPaidEmployee.salary);

// 5. Display all employees using forEach()
console.log("\nEmployee List:");
employees.forEach(emp => {
  console.log(`${emp.id} - ${emp.name} - ₹${emp.salary}`);
});