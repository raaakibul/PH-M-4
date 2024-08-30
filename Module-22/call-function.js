/***
 *  Simple calculator to call function inside a function
 */

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function calculator(a,b,operator){
    if(operator === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operator === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operator === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else if(operator === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else{
        console.log("Invalid operation");
    }
}

const operation = calculator(45, 100, 'divide');
console.log(operation);