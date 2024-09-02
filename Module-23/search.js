const numbers = [45,56,98,78,91];
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

const products = [
    {id:1, name: 'Phone', price:4500},
    {id:2, name: 'Fax', price:5600},
    {id:3, name: 'Macbook', price:117899},
    {id:4, name: 'Dell', price:145698},
    {id:5, name: 'Hp', price:120000},
    {id:6, name: 'Lenovo', price:145000},
    {id:7, name: 'Nokia', Price:45000}
]

// for (const product of products){
//     console.log(product);
// }

function matchedProduct(products, search){
    const matched = [];
    for( const product of products){
        if(product.name.includes(search)){
            matched.push(product);
    }
    }
    return matched;
}

const result = matchedProduct(products,'Phone')
console.log(result);