const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Brush', price: 100},
    {name: 'Shirt', price: 500},
    {name: 'Pant', price:700}
]

function getShopping(products){
    for(const product of products){
        console.log(product);
    }
}

const total = getShopping(products);
console.log("Total : "+ total);