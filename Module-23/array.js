const products = [{
    name:'test', price: 2500},
    {name:'Laptop', price:250000}
]
console.log(products[0]);
console.log(products[1]);

const products2 ={
    '0': 25,
    '1': 29,
    '2': 30
}

console.log(products2);

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
}
add(12,54,78,45,)