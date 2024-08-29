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