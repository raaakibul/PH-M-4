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
    const full = first + ' ' + second;
    return full;
}
const full = fullName('Rakibul', 'Islam');
console.log(full);