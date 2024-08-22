function evenNumber(numbers){
    const evens = [];
    for(const number of numbers){
        if(number %2 === 0){
            // console.log(number);
            evens.push(number);
            
        }
    }
    return evens;
}

const numbers = [5,8,91,24]
const evens = evenNumber(numbers)
console.log('Even numbers are :', evens);

function sumofEven(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumofEven(numbers);
console.log('Sum of even numbers: ' + sum);