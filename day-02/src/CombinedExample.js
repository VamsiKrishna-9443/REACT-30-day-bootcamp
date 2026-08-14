let products  = [
    {id:1, name:"laptop", price:50000},
    {id:2, name:"mobile", price:20000},
    {id:3, name:"tablet", price:30000},
];

products.forEach((product) => {
    console.log(product.name);
});

products.forEach(product  => console.log(product.price));

let prices = products.map(product => product.price);
console.log(prices);

let costliestProduct = products.filter(product => product.price > 25000);
console.log(costliestProduct);

let device = products.find(product => product.name === "mobile");
console.log(device);

let total = products.reduce((sum,product) => sum + product.price,0);
console.log(total);