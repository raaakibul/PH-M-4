/***
 * Handle unexpected function input parameter error
 */
function multiply(num1, num2) {
    return num1 * num2;
}

const result = multiply(1, 2);
console.log(result);
const result2 = multiply(5,'seven');
console.log(result2);


function fullName(first, second) {
    if(typeof first !== 'string'){
        return 'Please enter a string';
    }
    else if(typeof second !== 'string'){
        return 'Please enter a string';
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName(5, 'Islam');
console.log(full);