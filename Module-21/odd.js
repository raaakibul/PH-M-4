function oddAvg(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 !=0){
            // console.log(number);
            odds.push(number)
        }
    }
    console.log(odds);
    let sum = 0;
    for (const number of numbers){
        sum += number;
    }
    const count = odds.length;
    console.log("Sum of the odd numbers:",sum);
    const avg = sum / count;
    // console.log("Average of the odd numbers:",avg);
    return avg;

}
const numbers = [41,42,65,78,45,81,77,54,785];
const result = oddAvg(numbers);
console.log("Average of the odd Numbers:",result);