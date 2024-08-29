const price = [20000,15000,45000,100000,120000,145693]

function getMinimum(numbers){
    let min = numbers[0];
    for(const number of numbers){
        // console.log(number);
        if(number < min){
            min = number;
        }
    }
    return min;

}
const result = getMinimum(price);
console.log("Minimum: " + result);

const phoness = [

    { name: 'Samsung', price: 100000, camera:'12mp', color: 'black'},
    { name: 'Apple', price: 120000, camera:'25mp', color: 'Gray'},
    { name: 'Motorola', price: 110000, camera:'20mp', color: 'Tomato'},
    { name: 'Sony', price: 110000, camera:'22mp', color: 'Golden'},
    { name: 'HTC', price: 150000, camera:'26mp', color: 'black'},
]

function getPhones(phones){
    for(const phone of phones){
        // console.log(phone);
    }
}

const cheap = getPhones(phones);
console.log("Cheapest phones",cheap);