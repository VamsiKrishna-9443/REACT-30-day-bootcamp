let users = [
    {id:1, name:"vamsi", age:23},
    {id:2, name:"Aashitha", age:22},
    {id:3, name:"bhoomika", age:21},
];

let user = users.find((user) => {
    return user.id === 2;
})

let user1 = users.find((user) => user.name === "vamsi");
console.log(user);
console.log(user1);