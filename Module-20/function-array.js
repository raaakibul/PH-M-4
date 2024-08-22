function sumofNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
} 
const nums = [45,56,78,78,456,789];
const sum = sumofNumbers(nums);
console.log('Sum of numbers: ', sum);