const products = [
    {name: 'Shampoo', price: 300, quantity: 1},
    {name: 'Brush', price: 100, quantity: 5},
    {name: 'Shirt', price: 500, quantity: 2},
    {name: 'Pant', price:700, quantity: 3}
]

function getShopping(products){
    let sum = 0;
    for(const product of products){
        // console.log(product);
        sum = sum + product.price;
    }
    return sum;
}

const total = getShopping(products);
console.log("Total Cost: "+ total);